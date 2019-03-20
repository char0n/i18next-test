import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';

import * as i18nPropTypes  from '../../i18n/prop-types';
import { formatNumber } from '../../i18n/formatters';
import FormattedNumber from '../../i18n/components/FormattedNumber';


const Strong = ({ children }) => (
  <strong>{children}</strong>
);

const IntlComponent = ({ count, t: _ }) => (
  <div>
    <header>{_('feature1:Welcome to react')}</header>
    <main>
      <Trans count={count} ns="feature1">
        Hello <Strong>World</Strong>, you have {{count}} unread message.
      </Trans>
      <br />
      <strong>{_('Interpolation example {{number}}', { number: formatNumber({ style: 'currency', currency: 'EUR' }, count) })}</strong>
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
