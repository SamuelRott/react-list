import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
        <div id="formValidation"
             className={classnames('validation', styles.notValid)}>
          <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.onNameChange}
            onKeyDown={this.handleSubmit} />
          <p className="error-message">please add a name</p>
        </div>
        <input
          type="radio"
          name="chooseSex"
          value="female"
          onChange={this.onSexChange}/> female
        <input
          type="radio"
          name="chooseSex"
          value="male"
          onChange={this.onSexChange}/> male
      </div>

    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  onSexChange = (e) => {
    this.setState({ sex: e.target.value });
  }

  handleSubmit = (e) => {
    // use state set by onNameChange() instead or target.value
    const name = this.state.name.trim();
    const validationContainer = document.getElementById('formValidation');

    // avoid spamming friends without name
    if (e.which === 13 && this.state.name === '') {
      validationContainer.classList.add('notValid');
    }
    else if (e.which === 13) {
      validationContainer.classList.remove('notValid');
      this.props.addFriend(name);
      this.setState({ name: '' });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
