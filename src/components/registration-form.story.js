import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import RegistrationForm from './registration-form';

export default function formRegistrationStory() {
  const mockSubmit = (e) => {
    e.preventDefault();
    const submitAction = action('submitted');
    submitAction(e);
  };

  storiesOf('Registration Form', module)
    .add('default', () => (
      <RegistrationForm
        onSubmit={mockSubmit}
        submitting={false}
        submitted={false}
      />
    ))
    .add('submitting', () => (
      <RegistrationForm
        onSubmit={mockSubmit}
        submitting
        submitted={false}
      />  ))
    .add('submitted', () => (
      <RegistrationForm
        onSubmit={mockSubmit}
        submitting={false}
        submitted
      />
    ));
}