import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import * as i18nPropTypes  from '../prop-types';
import { formatNumber } from '../formatters/number';


const FormattedNumber = ({ i18n, t, value, ...intlOptions }) => {
  const { language: lng } = i18n;

  return (
    <span data-i18n-formatted-number>{formatNumber(lng, intlOptions, value)}</span>
  );
};

FormattedNumber.propTypes = {
  i18n: i18nPropTypes.i18n.isRequired,
  t: i18nPropTypes.i18n.isRequired,

  value: PropTypes.any.isRequired,

  style: PropTypes.oneOf(['decimal', 'currency', 'percent']),
  currency: PropTypes.string,
  currencyDisplay: PropTypes.oneOf(['symbol', 'code', 'name']),
  useGrouping: PropTypes.bool,

  minimumIntegerDigits: PropTypes.number,
  minimumFractionDigits: PropTypes.number,
  maximumFractionDigits: PropTypes.number,
  minimumSignificantDigits: PropTypes.number,
  maximumSignificantDigits: PropTypes.number,
};


export default withTranslation()(FormattedNumber);
