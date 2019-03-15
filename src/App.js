import React, { Component } from 'react';

import './App.css';
import './i18n';
import IntlComponent from './feature1/components/IntlComponent';
import LanguageSwitch from './i18n/components/LanguageSwitch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <LanguageSwitch />
          <IntlComponent count={3} />
          <IntlComponent count={1} />
        </main>
      </div>
    );
  }
}

export default App;
