// src/App.js

import React, { Component } from 'react';

import RegistrationFormContainer from './containers/registration-form-container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="columns is-mobile">
          <div className="column">
            <div className="box">
              <RegistrationFormContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;