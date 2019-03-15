import React from 'react';
import { withTranslation } from 'react-i18next';

import * as i18nPropTypes from '../prop-types';


class LanguageSwitch extends React.Component {
  static propTypes = {
    i18n: i18nPropTypes.i18n.isRequired,
  };

  switchToLanguage = (language) => {
    this.props.i18n.changeLanguage(language);
  };

  switchToCzech = () => {
    this.switchToLanguage('cs');
  };

  switchToEnglish = () => {
    this.switchToLanguage('en');
  };

  render() {
    return (
      <div>
        <button onClick={this.switchToEnglish}>English language</button>
        <button onClick={this.switchToCzech}>Czech language</button>
      </div>
    );
  }
}


export default withTranslation()(LanguageSwitch);

