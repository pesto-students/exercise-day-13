
/*
  Q2:

  Using context, implement the <Form>, <SubmitButton>, and <TextInput>
  components such that:

  - Clicking the <SubmitButton> calls <Form onSubmit>
  - Hitting "Enter" while in a <TextInput> submits the form
  - Don't use a <form> element, we're intentionally recreating the
    browser's built-in behavior

  - Send the values of all the <TextInput>s to the <Form onSubmit> handler
    without using DOM traversal APIs
  - Implement a <ResetButton> that resets the <TextInput>s in the form
*/

import React from 'react';
import PropTypes from 'prop-types';

const FormContext = React.createContext({
  handleSubmit: () => {},
  firstName: '',
  lastName: '',
  updateInput: () => {},
});

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired,
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

class SubmitButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired,
  }
  render() {
    return (
      <FormContext.Consumer>
        {formActions => (
          <button onClick={formActions.handleSubmit}>{this.props.children}</button>
        )}

      </FormContext.Consumer>
    );
  }
}

class TextInput extends React.Component {
  render() {
    return (
      <FormContext.Consumer>
        {formActions => (
          <input
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={formActions[this.props.name]}
            onChange={formActions.updateInput}
            onKeyPress={formActions.handleSubmit}
          />
        )}
      </FormContext.Consumer>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

class Context extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  }

  handleSubmit = (event) => {
    if (event.type === 'click' || (event.type === 'keypress' && event.key.toLowerCase() === 'enter')) {
      alert(`YOU WIN!\nFirstName: ${this.state.firstName}\nLastName: ${this.state.lastName}`);
    }
  };

  updateInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>
          This isn&#39;t even my final <code>&lt;Form/&gt;</code>!
        </h1>

        <FormContext.Provider
          value={{ ...this.state, updateInput: this.updateInput, handleSubmit: this.handleSubmit }}
        >
          <Form>
            <p>
              <TextInput name="firstName" placeholder="First Name" />{' '}
              <TextInput name="lastName" placeholder="Last Name" />
            </p>
            <p>
              <SubmitButton>Submit</SubmitButton>
            </p>
          </Form>
        </FormContext.Provider>
      </div>
    );
  }
}

export default Context;
