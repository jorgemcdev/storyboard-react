import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './registration-form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegistrationForm />, div);
});
