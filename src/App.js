import React, { Component } from 'react';

import './App.css';
import './i18n';
import IntlComponent from './feature1/components/IntlComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <IntlComponent count={3} />
          <IntlComponent count={1} />
        </main>
      </div>
    );
  }
}

export default App;
