import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';

import * as i18nPropTypes  from '../../i18n/prop-types';


const IntlComponent = ({ count, t: _ }) => (
  <div>
    <header>{_('feature1:Welcome to react')}</header>
    <main>
      <Trans i18nKey="feature1:hello_message" count={count}>
        Hello <strong>World</strong>, you have {{count}} unread message.
      </Trans>
    </main>
    <footer>{_('This is translated footer')}</footer>
  </div>
);

IntlComponent.propTypes = {
  count: PropTypes.number.isRequired,
  t: i18nPropTypes.t.isRequired,
};


export default withTranslation(['translation', 'feature1'])(IntlComponent);
