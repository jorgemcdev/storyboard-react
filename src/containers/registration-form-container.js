// src/components/registration-form-container.js
import React, {Component} from 'react';
import RegistrationForm from './../components/registration-form.js';

const HTTP_REQUEST_DELAY = 2000;
const HIDE_MESSAGE_DELAY = 2000;

class RegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted : false,
      submitting: false
    }
  }

  hideMessage() {
    //Hide After X secondes
    setTimeout(() => this.setState({submitting: false, submitted: false}), HIDE_MESSAGE_DELAY);
  }

  submitHttpRequest() {
    setTimeout(() => this.setState({submitting: false, submitted: true}, this.hideMessage), HTTP_REQUEST_DELAY);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
    this.setState({submitting: true});

    //Fake HTTP Request + Message
    this.submitHttpRequest();
  }

  render() {
    const {submitting, submitted} = this.state;
    return (
      <div className="box">
        <RegistrationForm
          submitted={submitted}
          submitting={submitting}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default RegistrationFormContainer;