/* eslint-disable */
const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const URL_REGEX = /:\/\/(www[0-9]?\.)?(.[^/:]+)/i;
const STRONG_PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-zA-Z])(.+){8,}$/;
const CURRENCY_REGEX = /-?[0-9]+[\.]*[0-9]*/;

module.exports = {
  EMAIL_REGEX,
  URL_REGEX,
  STRONG_PASSWORD_REGEX,
  CURRENCY_REGEX
};
