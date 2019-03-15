import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';


const IntlComponent = ({ count, t: _ }) => (
  <div>
    <header>{_('feature1:Welcome to react')}</header>
    <main>
      <Trans i18nKey="feature1:hello_message" count={count}>
        Hello <strong>World</strong>, you have {{count}} unread message.
      </Trans>
    </main>
    <footer>{_('This if translated footer')}</footer>
  </div>
);

IntlComponent.propTypes = {
  count: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
};


export default withTranslation(['translation', 'feature1'])(IntlComponent);
