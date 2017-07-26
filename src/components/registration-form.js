// src/component/registration-form.js

import React from 'react';

export default function RegistrationForm({onSubmit, submitted, submitting}) {
  const buttonClassNames = submitting  ? ['button', 'is-primary', 'is-loading'] : ['button', 'is-primary'];
  return (
    <form name='registration-form' className="content" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      {
        submitted ?
        <div className="notification is-success">
          Your registration is done thanks.
					Now you can sign in :-)
        </div>
        : null
      }
      <label className="label" htmlFor="name">Name</label>
      <p className="control">
        <input
          className="input"
          disabled={submitting}
          id="name"
          type="text"
          placeholder="Name"
        />
      </p>
      <label className="label" htmlFor="email">E-mail</label>
      <p className="control">
        <input
          className="input"
          disabled={submitting}
          id="email"
          type="email"
          placeholder="E-mail"
        />
      </p>
      <p>
      </p>
      <p className="control">
        <button className={buttonClassNames.join(' ')}>Submit</button>
      </p>
    </form>
  );
}