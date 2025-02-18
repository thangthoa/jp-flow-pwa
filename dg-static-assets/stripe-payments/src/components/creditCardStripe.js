// copied from @magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.js
import React, { useMemo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { bool, func, shape, string } from 'prop-types';
import { useCreditCard } from '../talons/useCreditCard';

import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import Country from '@magento/venia-ui/lib/components/Country';
import Region from '@magento/venia-ui/lib/components/Region';
import Postcode from '@magento/venia-ui/lib/components/Postcode';
import Checkbox from '@magento/venia-ui/lib/components/Checkbox';
import Field from '@magento/venia-ui/lib/components/Field';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import { useStyle } from '@magento/venia-ui/lib/classify';

import defaultClasses from '@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.module.css';
import FormError from '@magento/venia-ui/lib/components/FormError';
import GoogleReCaptcha from '@magento/venia-ui/lib/components/GoogleReCaptcha';
import { CardElement } from '@stripe/react-stripe-js';

const STEP_DESCRIPTIONS = [
    { defaultMessage: 'Loading Payment', id: 'checkoutPage.step0' },
    {
        defaultMessage: 'Checking Credit Card Information',
        id: 'checkoutPage.step1'
    },
    {
        defaultMessage: 'Checking Credit Card Information',
        id: 'checkoutPage.step2'
    },
    {
        defaultMessage: 'Checking Credit Card Information',
        id: 'checkoutPage.step3'
    },
    {
        defaultMessage: 'Saved Credit Card Information Successfully',
        id: 'checkoutPage.step4'
    }
];

/**
 * The initial view for the "Stripe Payments" payment method.
 */
const CreditCardStripe = props => {
    const {
        classes: propClasses,
        onPaymentSuccess: onSuccess,
        onPaymentReady: onReady,
        onPaymentError: onError,
        resetShouldSubmit,
        shouldSubmit
    } = props;
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, propClasses);

    const talonProps = useCreditCard({
        onSuccess,
        onReady,
        onError,
        shouldSubmit,
        resetShouldSubmit
    });


    const {
        errors,
        isBillingAddressSame,
        isLoading,
        stepNumber,
        initialValues,
        shippingAddressCountry,
        shouldTeardownDropin,
        recaptchaWidgetProps
    } = talonProps;

    const creditCardComponentClassName = isLoading
        ? classes.credit_card_root_hidden
        : classes.credit_card_root;

    const billingAddressFieldsClassName = isBillingAddressSame
        ? classes.billing_address_fields_root_hidden
        : classes.billing_address_fields_root;


    const fieldClasses = useMemo(() => {
        return [
            'first_name',
            'last_name',
            'country',
            'street1',
            'street2',
            'city',
            'region',
            'postal_code',
            'phone_number'
        ].reduce((acc, fieldName) => {
            acc[fieldName] = { root: classes[fieldName] };

            return acc;
        }, {});
    }, [classes]);

    const isFieldRequired = useCallback((value, { isBillingAddressSame }) => {
        if (isBillingAddressSame) {
            return undefined;
        } else {
            return isRequired(value);
        }
    }, []);

    const stepTitle = STEP_DESCRIPTIONS[stepNumber].defaultMessage
        ? formatMessage({
              id: STEP_DESCRIPTIONS[stepNumber].id,
              defaultMessage: STEP_DESCRIPTIONS[stepNumber].defaultMessage
          })
        : formatMessage({
              id: 'checkoutPage.loadingPayment',
              defaultMessage: 'Loading Payment'
          });

    const loadingIndicator = isLoading ? (
        <LoadingIndicator>{stepTitle}</LoadingIndicator>
    ) : null;

    const CARD_ELEMENT_OPTIONS = {
        hidePostalCode: true,
      appearance: {
        theme: 'night'
      },
        style: {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '20px',
                 lineHeight: '5em',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        }
    };

    return (
        <div className={classes.root} data-cy="CreditCard-root">
            <div className={creditCardComponentClassName}>
                <FormError
                    allowErrorMessages
                    classes={{ root: classes.formErrorContainer }}
                    errors={Array.from(errors.values())}
                />
                <div className={classes.dropin_root}>
                    {shouldTeardownDropin ? null : (
                        <CardElement options={CARD_ELEMENT_OPTIONS} />
                    )}
                </div>
                <div
                    data-cy="CreditCard-AddressCheck-root"
                    className={classes.address_check}
                >
                    <Checkbox
                        data-cy="PaymentInformation-billingAddressSame"
                        field="isBillingAddressSame"
                        label={formatMessage({
                            id: 'checkoutPage.billingAddressSame',
                            defaultMessage:
                                'Billing address same as shipping address'
                        })}
                        initialValue={initialValues.isBillingAddressSame}
                    />
                </div>
                <div
                    data-cy="CreditCard-billingAddressFields"
                    className={billingAddressFieldsClassName}
                >
                    <Field
                        id="firstName"
                        classes={fieldClasses.first_name}
                        label={formatMessage({
                            id: 'global.firstName',
                            defaultMessage: 'First Name'
                        })}
                    >
                        <TextInput
                            data-cy="CreditCard-billingAddress-firstname"
                            id="firstName"
                            field="firstName"
                            validate={isFieldRequired}
                            initialValue={initialValues.firstName}
                        />
                    </Field>
                    <Field
                        id="lastName"
                        classes={fieldClasses.last_name}
                        label={formatMessage({
                            id: 'global.lastName',
                            defaultMessage: 'Last Name'
                        })}
                    >
                        <TextInput
                            data-cy="CreditCard-billingAddress-lastname"
                            id="lastName"
                            field="lastName"
                            validate={isFieldRequired}
                            initialValue={initialValues.lastName}
                        />
                    </Field>
                    <Country
                        data-cy="CreditCard-billingAddress-country"
                        classes={fieldClasses.country}
                        validate={isFieldRequired}
                        initialValue={
                            initialValues.country || shippingAddressCountry
                        }
                    />
                    <Field
                        id="street1"
                        classes={fieldClasses.street1}
                        label={formatMessage({
                            id: 'global.streetAddress',
                            defaultMessage: 'Street Address'
                        })}
                    >
                        <TextInput
                            data-cy="CreditCard-billingAddress-street1"
                            id="street1"
                            field="street1"
                            validate={isFieldRequired}
                            initialValue={initialValues.street1}
                        />
                    </Field>
                    <Field
                        id="street2"
                        classes={fieldClasses.street2}
                        label={formatMessage({
                            id: 'global.streetAddress2',
                            defaultMessage: 'Street Address 2'
                        })}
                        optional={true}
                    >
                        <TextInput
                            data-cy="CreditCard-billingAddress-street2"
                            id="street2"
                            field="street2"
                            initialValue={initialValues.street2}
                        />
                    </Field>
                    <Field
                        id="city"
                        classes={fieldClasses.city}
                        label={formatMessage({
                            id: 'global.city',
                            defaultMessage: 'City'
                        })}
                    >
                        <TextInput
                            data-cy="CreditCard-billingAddress-city"
                            id="city"
                            field="city"
                            validate={isFieldRequired}
                            initialValue={initialValues.city}
                        />
                    </Field>
                    <Region
                        data-cy="CreditCard-billingAddress-region"
                        classes={fieldClasses.region}
                        initialValue={initialValues.region}
                        validate={isFieldRequired}
                        fieldInput={'region[label]'}
                        fieldSelect={'region[region_id]'}
                        optionValueKey={'id'}
                    />
                    <Postcode
                        data-cy="CreditCard-billingAddress-postcode"
                        classes={fieldClasses.postal_code}
                        validate={isFieldRequired}
                        initialValue={initialValues.postcode}
                    />
                    <Field
                        id="phoneNumber"
                        classes={fieldClasses.phone_number}
                        label={formatMessage({
                            id: 'global.phoneNumber',
                            defaultMessage: 'Phone Number'
                        })}
                    >
                        <TextInput
                            data-cy="CreditCard-billingAddress-phoneNumber"
                            id="phoneNumber"
                            field="phoneNumber"
                            validate={isFieldRequired}
                            initialValue={initialValues.phoneNumber}
                        />
                    </Field>
                </div>
                <GoogleReCaptcha {...recaptchaWidgetProps} />
            </div>
            {loadingIndicator}
        </div>
    );
};

export default CreditCardStripe;

CreditCardStripe.propTypes = {
    classes: shape({
        root: string,
        dropin_root: string,
        billing_address_fields_root: string,
        first_name: string,
        last_name: string,
        city: string,
        region: string,
        postal_code: string,
        phone_number: string,
        country: string,
        street1: string,
        street2: string,
        address_check: string,
        credit_card_root: string,
        credit_card_root_hidden: string
    }),
    shouldSubmit: bool.isRequired,
    onPaymentSuccess: func,
    onPaymentReady: func,
    onPaymentError: func,
    resetShouldSubmit: func.isRequired
};
