// copied from @magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useCreditCard.js
import { useCallback, useEffect, useState, useMemo } from 'react';
import { useFormState, useFormApi } from 'informed';
import { useQuery, useApolloClient, useMutation } from '@apollo/client';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

import { useCartContext } from '@magento/peregrine/lib/context/cart';

import BRAINTREE_OPERATIONS from '@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/creditCard.gql';
import STRIPE_OPERATIONS from './stripe.gql';
import { useGoogleReCaptcha } from '@magento/peregrine/lib/hooks/useGoogleReCaptcha';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {useToasts} from '@magento/peregrine';

const getRegion = region => {
    return region.region_id || region.label || region.code;
};

/**
 * Maps address response data from GET_BILLING_ADDRESS and GET_SHIPPING_ADDRESS
 * queries to input names in the billing address form.
 * {@link creditCard.gql.js}.
 *
 * @param {ShippingCartAddress|BillingCartAddress} rawAddressData query data
 */
import { mapAddressData } from '@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useCreditCard.js';

/**
 * Talon to handle Credit Card payment method.
 *
 * @param {Boolean} props.shouldSubmit boolean value which represents if a payment paymentIntent request has been submitted
 * @param {Function} props.onSuccess callback to invoke when the a payment paymentIntent has been generated
 * @param {Function} props.onReady callback to invoke when the stripe dropin component is ready
 * @param {Function} props.onError callback to invoke when the stripe dropin component throws an error
 * @param {Function} props.resetShouldSubmit callback to reset the shouldSubmit flag
 * @param {DocumentNode} props.operations.getBillingAddressQuery query to fetch billing address from cache
 * @param {DocumentNode} props.operations.getIsBillingAddressSameQuery query to fetch is billing address same checkbox value from cache
 * @param {DocumentNode} props.operations.setBillingAddressMutation mutation to update billing address on the cart
 *
 * NOT IN USE - FROM BRAINTREE
 * @param {DocumentNode} props.operations.getPaymentNonceQuery query to fetch payment nonce saved in cache
 * @param {DocumentNode} props.operations.setCreditCardDetailsOnCartMutation mutation to update payment method and payment nonce on the cart
 *
 * FROM LOCAL STRIPE GQL:
 * @param {DocumentNode} props.operations.getStripeConfigQuery GET_STRIPE_CONFIG_DATA,
 * @param {DocumentNode} props.operations.setPaymentMethodOnCartMutation SET_PAYMENT_METHOD_ON_CART,
 * @param {DocumentNode} props.operations.getPaymentIntentQuery query to fetch payment intent saved in cache - replaces getPaymentNonceQuery,
 * @param {DocumentNode} props.operations.setStripeCreditCardDetailsOnCartMutation mutation to update payment method - replaces setCreditCardDetailsOnCartMutation
 * @param {DocumentNode} props.createPaymentIntentMutation mutation to create a payment intent on the M2 backend. returns a CLIENT_SECTRET
 *
 * @returns {
 *   errors: Map<String, Error>,
 *   isBillingAddressSame: Boolean,
 *   isLoading: Boolean,
 *   stepNumber: Number,
 *   initialValues: {
 *      firstName: String,
 *      lastName: String,
 *      city: String,
 *      postcode: String,
 *      phoneNumber: String,
 *      street1: String,
 *      street2: String,
 *      country: String,
 *      state: String,
 *      isBillingAddressSame: Boolean
 *   },
 *   shippingAddressCountry: String,
 *   shouldTeardownDropin: Boolean,
 * }
 */
export const useCreditCard = props => {
    const {
        onSuccess,
        onReady,
        onError,
        shouldSubmit,
        resetShouldSubmit
    } = props;

    const operations = mergeOperations(
        BRAINTREE_OPERATIONS,
        STRIPE_OPERATIONS,
        props.operations
    );

    const {
        getBillingAddressQuery,
        getIsBillingAddressSameQuery,
        getShippingAddressQuery,
        setBillingAddressMutation,
        setStripeCreditCardDetailsOnCartMutation,
        getPaymentMethodQuery,
        createPaymentIntentMutation
    } = operations;

    const {
        recaptchaLoading,
        generateReCaptchaData,
        recaptchaWidgetProps
    } = useGoogleReCaptcha({
        currentForm: 'STRIPE_PAYMENTS',
        formAction: 'stripe_payments'
    });

    const stripe = useStripe();
    const elements = useElements();

    const [isStripeJSLoading, setStripeJSLoading] = useState(true);
    const [shouldRequestPayment, setShouldRequestPayment] = useState(false);
    const [shouldTeardownDropin, setShouldTeardownDropin] = useState(false);
    const [number, setNumber] = useState(0);

    const [stepNumber, setStepNumber] = useState(0);

    const client = useApolloClient();
    const formState = useFormState();
    const { validate: validateBillingAddressForm } = useFormApi();
    const [{ cartId }] = useCartContext();
    const [, { addToast }] = useToasts();
    const isLoading =
        isStripeJSLoading ||
        recaptchaLoading

    /**
     * GQL DATA QUERIES
     */
    const { data: billingAddressData } = useQuery(getBillingAddressQuery, {
        skip: !cartId,
        variables: { cartId }
    });
    const { data: shippingAddressData } = useQuery(getShippingAddressQuery, {
        skip: !cartId,
        variables: { cartId }
    });
    const { data: isBillingAddressSameData } = useQuery(
        getIsBillingAddressSameQuery,
        { skip: !cartId, variables: { cartId } }
    );
    const { data: stripePaymentMethodData } = useQuery(getPaymentMethodQuery, {
        skip: !cartId,
        variables: { cartId }
    });


    const [createPaymentIntent, { data: intentData }] = useMutation(
        createPaymentIntentMutation
    );
    const CLIENT_SECRET = intentData?.createPaymentIntent?.intent_client_secret;


    const [
        updateBillingAddress,
        {
            error: billingAddressMutationError,
            called: billingAddressMutationCalled,
            loading: billingAddressMutationLoading
        }
    ] = useMutation(setBillingAddressMutation);


    const setPaymentMethodInCache = useCallback(
        paymentMethod => {
            const token = `${paymentMethod.id}:${paymentMethod.card.brand}:${paymentMethod.card.last4
                }`;
            client.writeQuery({
                query: getPaymentMethodQuery,
                data: {
                    cart: {
                        __typename: 'Cart',
                        id: cartId,
                        stripe_payment_method: token
                    }
                }
            });
        },
        [cartId, client, getPaymentMethodQuery]
    );

    const [
        updateCCDetails,
        {
            error: ccMutationError,
            called: ccMutationCalled,
            loading: ccMutationLoading
        }
    ] = useMutation(setStripeCreditCardDetailsOnCartMutation);

    const shippingAddressCountry = shippingAddressData
        ? shippingAddressData?.cart?.shippingAddresses[0]?.country?.code
        : DEFAULT_COUNTRY_CODE;
    const isBillingAddressSame = formState.values.isBillingAddressSame;

    const initialValues = useMemo(() => {
        const isBillingAddressSame = isBillingAddressSameData
            ? isBillingAddressSameData.cart.isBillingAddressSame
            : true;

        let billingAddress = {};

        if (billingAddressData && !isBillingAddressSame) {
            if (billingAddressData.cart.billingAddress) {
                const {
                    // eslint-disable-next-line no-unused-vars
                    __typename,
                    ...rawBillingAddress
                } = billingAddressData.cart.billingAddress;
                billingAddress = mapAddressData(rawBillingAddress);
            }
        }

        return { isBillingAddressSame, ...billingAddress };
    }, [isBillingAddressSameData, billingAddressData]);

    const setIsBillingAddressSameInCache = useCallback(() => {
        client.writeQuery({
            query: getIsBillingAddressSameQuery,
            data: {
                cart: {
                    __typename: 'Cart',
                    id: cartId,
                    isBillingAddressSame
                }
            }
        });
    }, [client, cartId, getIsBillingAddressSameQuery, isBillingAddressSame]);


    const setShippingAddressAsBillingAddress = useCallback(() => {
        const shippingAddress = shippingAddressData
            ? mapAddressData(shippingAddressData.cart.shippingAddresses[0])
            : {};

        updateBillingAddress({
            variables: {
                cartId,
                ...shippingAddress,
                sameAsShipping: true
            }
        });
    }, [updateBillingAddress, shippingAddressData, cartId]);

    const setBillingAddress = useCallback(() => {
        const {
            firstName,
            lastName,
            country,
            street1,
            street2,
            city,
            region,
            postcode,
            phoneNumber
        } = formState.values;

        updateBillingAddress({
            variables: {
                cartId,
                firstName,
                lastName,
                country,
                street1,
                street2: street2 || '',
                city,
                region: getRegion(region),
                postcode,
                phoneNumber,
                sameAsShipping: false
            }
        });
    }, [formState.values, updateBillingAddress, cartId]);

    const updateCCDetailsOnCart = useCallback(
        async stripeToken => {
            try {
                const reCaptchaData = await generateReCaptchaData();

                await updateCCDetails({
                    variables: {
                        cartId,
                        stripeToken: stripeToken,
                        save: false
                    },
                    ...reCaptchaData
                });
            } catch (error) {
                console.log('BIS:', error);
            }
        },
        [updateCCDetails, cartId, generateReCaptchaData]
    );

    const onPaymentError = useCallback(
        error => {
            setStepNumber(0);
            setShouldRequestPayment(false);
            resetShouldSubmit();
            addToast({
                type: 'error',
                message: error.message,
            });
            if (onError) {
                onError(error);
            }
        },
        [onError, resetShouldSubmit]
    );

    useEffect(() => {
        if (stripe && elements && isStripeJSLoading) {
            setStripeJSLoading(false);
            setStepNumber(0);
            if (onReady) {
                onReady();
            }
        }
    }, [stripe, elements, isStripeJSLoading, onReady]);


    useEffect(() => {
        try {
            if (shouldSubmit) {

                validateBillingAddressForm();

                const hasErrors = Object.keys(formState.errors).length;

                if (!hasErrors) {
                    setStepNumber(1);
                    if (isBillingAddressSame) {
                        setShippingAddressAsBillingAddress();
                    } else {
                        setBillingAddress();
                    }
                    setIsBillingAddressSameInCache();
                } else {
                    throw new Error('Errors in the billing address form');
                }
            }
        } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(err);
            }
            setStepNumber(0);
            resetShouldSubmit();
            setShouldRequestPayment(false);
        }
    }, [
        shouldSubmit,
        isBillingAddressSame,
        setShippingAddressAsBillingAddress,
        setBillingAddress,
        setIsBillingAddressSameInCache,
        resetShouldSubmit,
        validateBillingAddressForm,
        formState.errors
    ]);

    useEffect(() => {
        try {
            const billingAddressMutationCompleted =
                billingAddressMutationCalled && !billingAddressMutationLoading;

            if (
                billingAddressMutationCompleted &&
                !billingAddressMutationError
            ) {

                setStepNumber(2);
                setShouldRequestPayment(true);
            }

            if (
                billingAddressMutationCompleted &&
                billingAddressMutationError
            ) {

                throw new Error('Billing address mutation failed');
            }
        } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(err);
            }
            setStepNumber(0);
            resetShouldSubmit();
            setShouldRequestPayment(false);
        }
    }, [
        billingAddressMutationError,
        billingAddressMutationCalled,
        billingAddressMutationLoading,
        resetShouldSubmit
    ]);

    useEffect(() => {
        if (shouldSubmit) {

            if (shouldRequestPayment && billingAddressData?.cart?.billingAddress) {
                try {
                    console.log(
                        'should request paymentMethod',
                        billingAddressData.cart.billingAddress
                    );
                    const {
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        street,
                        postcode,
                        city,
                        country_id
                    } = billingAddressData.cart.billingAddress;
                    if (!stripe || !elements || !firstName) {
                        if (process.env.NODE_ENV !== 'production') {
                            console.error(
                                'billingAddress or API missing on paymentMethod req.',
                                firstname
                            );
                        }
                        throw new Error('PaymentMethod request failed');
                    }

                    const createPaymentMethod = async () => {
                        const { paymentMethod, error } = await stripe.createPaymentMethod({
                            type: 'card',
                            card: elements.getElement(CardElement),
                            billing_details: {
                                name: firstName + ' ' + lastName,
                                email: email,
                                phone: phoneNumber,
                                address: {
                                    line1: street[0],
                                    postal_code: postcode,
                                    city: city,
                                    country: country_id
                                }
                            }
                        });
                        if(error) {
                            onPaymentError(error)
                            return;
                        }

                        //console.log("payment method is: ", paymentMethod);
                        if (!paymentMethod?.id) {
                            if (process.env.NODE_ENV !== 'production') {
                                console.error(
                                    'Failed to create stripeJS paymentMethod'
                                );
                            }
                        } else {
                            updateCCDetailsOnCart(paymentMethod.id);
                            setPaymentMethodInCache(paymentMethod);
                        }
                    };
                    createPaymentMethod();
                } catch (err) {
                    onPaymentError(err);
                }
            } else {
                console.info('shouldrequest method with no billingaddress');
            }
        }
    }, [
        shouldSubmit,
        shouldRequestPayment,
        stripe,
        elements,
        billingAddressData,
        setPaymentMethodInCache,
        onPaymentError,
        CLIENT_SECRET,
        updateCCDetailsOnCart
    ]);

    useEffect(() => {
        if (stripePaymentMethodData) {
            console.log(
                'paymentMethod found in cache',
                stripePaymentMethodData
            );
            setNumber(1)
            if (number === 0) {
                createPaymentIntent({
                    variables: { cartId }
                });
            }
        } else {
            console.log('no payment method yet');
        }
    }, [stripePaymentMethodData, stripe, createPaymentIntent, cartId]);


    useEffect(() => {

        try {
            const ccMutationCompleted = ccMutationCalled && !ccMutationLoading;

            if (ccMutationCompleted && !ccMutationError && CLIENT_SECRET) {
                const authorizePayment = async () => {

                    console.log('cart has payment method now. authorizing');
                    stripe.retrievePaymentIntent(CLIENT_SECRET).then(result => {
                        console.log('got paymentIntent from stripe', result);
                        const {
                            paymentIntent: { status, confirmation_method }
                        } = result;
                        if (
                            [
                                'requires_action',
                                'requires_source_action'
                            ].includes(status)
                        ) {
                            if (confirmation_method === 'manual') {
                                return stripe.handleCardAction(CLIENT_SECRET);
                            } else {
                                return stripe.handleCardPayment(CLIENT_SECRET);
                            }
                        }
                        return null;
                    });
                };
                if (CLIENT_SECRET) {
                    // got a payment Method in local state
                    authorizePayment().then(result => {
                        if (onSuccess) {
                            onSuccess();
                        }
                        resetShouldSubmit();
                        setStepNumber(4);
                    });
                }
            }

            if (ccMutationCompleted && ccMutationError) {

                console.log('GOT CREDIT CARD MUTATION ERROR', ccMutationError);

                throw new Error(
                    'Credit card paymentIntent save mutation failed.'
                );
            }
        } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(err);
            }
            setStepNumber(0);
            resetShouldSubmit();
            setShouldRequestPayment(false);
            setShouldTeardownDropin(true);
        }
    }, [
        ccMutationCalled,
        ccMutationLoading,
        onSuccess,
        setShouldRequestPayment,
        resetShouldSubmit,
        ccMutationError,
        CLIENT_SECRET,
        stripe
    ]);

    const errors = useMemo(
        () =>
            new Map([
                ['setBillingAddressMutation', billingAddressMutationError],
                ['setCreditCardDetailsOnCartMutation', ccMutationError]
            ]),
        [billingAddressMutationError, ccMutationError]
    );

    return {
        errors,
        isBillingAddressSame,
        isLoading,
        stepNumber,
        initialValues,
        shippingAddressCountry,
        shouldTeardownDropin,
        recaptchaWidgetProps
    };
};
