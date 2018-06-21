/*
  Q1:

  Implement a radio group form control with the API found in <CompoundComponents> (Line 69).

  - Clicking a <RadioOption> should update the value of <RadioGroup>
  - The selected <RadioOption> should pass the correct value to its <RadioIcon>
  - The `defaultValue` should be set on first render.

  - Implement an `onChange` prop that communicates the <RadioGroup>'s state
    back to the parent so it can use it to render
  - Implement keyboard controls on the <RadioGroup>
    - Hint: Use tabIndex='0' on the <RadioOption>s so the keyboard will work
    - Enter and space bar should select the option
    - Arrow right, arrow down should select the next option
    - Arrow left, arrow up should select the previous option
*/


/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    children: PropTypes.shape().isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    defaultValue: 'fm',
  }
  render() {
    return (
      <div>
        {this.props.children.map((element) => {
          return React.cloneElement(element, {
            isSelected: this.props.defaultValue,
            onSelectCallback: value => this.props.onChange(value),
          });
        })}
      </div>
    );
  }
}

// RadioGroup.defaultProps = { defaultValue: 'fm' };

class RadioOption extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.shape().isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelectCallback: PropTypes.func.isRequired,
  };

  iconCallbackHandler = () => {
    this.props.onSelectCallback(this.props.value);
  }

  render() {
    return (
      <div>
        <RadioIcon isSelected={this.props.isSelected === this.props.value} iconCallback={this.iconCallbackHandler} />
        {this.props.children}
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    iconCallback: PropTypes.func.isRequired,
  };

  onClickHandler = () => {
    this.props.iconCallback();
  }

  render() {
    return (
      <div
        onClick = {this.onClickHandler}
        style={{
          borderColor: '#ccc',
          borderWidth: 3,
          borderStyle: this.props.isSelected ? 'inset' : 'outset',
          height: 16,
          width: 16,
          display: 'inline-block',
          cursor: 'pointer',
          background: this.props.isSelected ? 'rgba(0, 0, 0)' : '',
        }}
      />
    );
  }
}

class CompoundComponents extends React.Component {
  state = {
    value: 'fm',
  }

  onChangeHandler = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <h1>♬ It is about time that we all turned off the radio ♫</h1>

        <RadioGroup defaultValue={this.state.value} onChange={this.onChangeHandler}>
          <RadioOption value="am">AM</RadioOption>
          <RadioOption value="fm">FM</RadioOption>
          <RadioOption value="tape">Tape</RadioOption>
          <RadioOption value="aux">Aux</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
