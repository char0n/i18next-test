/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';

import * as i18nPropTypes  from '../../i18n/prop-types';
import { formatNumber } from '../../i18n/formatters';
import FormattedNumber from '../../i18n/components/FormattedNumber';


const Strong = ({ children, ...props }) => (
  <strong {...props}>{children}</strong>
);

const IntlComponent = ({ count, t: _ }) => (
  <div>
    <header>{_('feature1:Welcome to react')}</header>
    <main>
      <Trans
        count={count}
        ns="feature1"
        defaults="Hello <0>World</0>, you have <1>{count}</1> unread message."
        components={[<Strong test="1">~</Strong>, <Strong>~</Strong>]}
      />
      <br />
      <Trans
        count={count}
        defaults="{count, plural, =0 {no persons} =1 {one person} other {# persons}}"
      />
      <br />
      <strong>{_('Interpolation example {number}', { number: formatNumber({ style: 'currency', currency: 'EUR' }, count) })}</strong>
      <div>
        Formatted number: <FormattedNumber value={count} />
      </div>
    </main>
    <footer>{_('This is translated footer')}</footer>
  </div>
);

IntlComponent.propTypes = {
  count: PropTypes.number.isRequired,
  t: i18nPropTypes.t.isRequired,
};


export default withTranslation(['translation', 'feature1'])(IntlComponent);
