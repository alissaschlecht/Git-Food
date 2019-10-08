import { EMAIL_REGEX, STRONG_PASSWORD_REGEX, CURRENCY_REGEX } from './regex.js';

const inputErrors = {
  required: {
    key: 'empty',
    message: "empty",
    isError: value => !value || value.length === 0
  },
  noFutureDate: {
    key: 'no-future-date',
    message: 'no-future-date',
    isError: date => !date || new Date()
  },
  minimumAmount: {
    key: 'minimum-amount',
    message: 'minimum-amount',
    isError: value => !value || value <= 0
  },
  validEmail: {
    key: 'valid-email',
    message: 'valid-email',
    isError: email => !EMAIL_REGEX.test(email)
  },
  strongPassword: {
    key: 'strong-password',
    message: 'strong-password',
    isError: password => !STRONG_PASSWORD_REGEX.test(password)
  },
  validCurrency: {
    key: 'valid-currency',
    message: 'Must be a valid currency.',
    isError: value => !CURRENCY_REGEX.test(value)
  }
};

export default inputErrors;
