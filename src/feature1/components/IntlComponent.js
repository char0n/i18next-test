import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';

import * as i18nPropTypes  from '../../i18n/prop-types';


const IntlComponent = ({ count, t: _, i18n }) => (
  <div>
    <header>{_('feature1:Welcome to react')}</header>
    <main>
      <Trans i18nKey="feature1:hello_message" count={count} ns="feature1">
        Hello <strong>World</strong>, you have {{count}} unread message.
      </Trans>
      <br />
      <strong>{_('Interpolation example {{count}}', { count })}</strong>
    </main>
    <footer>{_('This is translated footer')}</footer>
  </div>
);

IntlComponent.propTypes = {
  count: PropTypes.number.isRequired,
  t: i18nPropTypes.t.isRequired,
};


export default withTranslation(['translation', 'feature1'])(IntlComponent);
