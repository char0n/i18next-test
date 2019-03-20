import { curry } from 'ramda';

import i18n from '..';


export const formatNumber = curry((lng, options, value) => new Intl.NumberFormat(lng, options).format(value));


// this is a bound version of formatNumber to i18n instance
export default (options, value) => {
  const { language: lng } = i18n;

  return formatNumber(lng, options, value);
};
