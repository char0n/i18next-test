import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';


const IntlComponent = ({ count, t: _ }) => (
  <div>
    <header>{_('feature1:Welcome to react')}</header>
    <main>
      <Trans count={count} ns="feature1">
        Hello <strong>World</strong>, you have {{count}} unread message.
      </Trans>
    </main>
  </div>
);

IntlComponent.propTypes = {
  count: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
};


export default withTranslation(['feature1', 'translation'])(IntlComponent);
