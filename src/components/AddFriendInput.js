import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
        <form className='Form'
              onSubmit={this.handleSubmit}>
          <div id="formValidation"
               className={classnames('validation', styles.notValid)}>
            <input
             type="text"
             autoFocus="true"
             className={classnames('form-control', styles.addFriendInput)}
             placeholder="Type the name of a friend"
             value={this.state.name}
             onChange={this.onNameChange}/>
            <p className="error-message">only a name is required</p>
          </div>
          <div className={'u-flex u-paddingS'}>
            <select value={this.state.value}
                    onChange={this.onSexChange}
                    className={`btn btn-default ${styles.btnAction}`}>
              <option value="">select a sex</option>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
            <button
              type="submit"
              value="Submit"
              onSubmit={this.handleSubmit}
              className={`btn btn-default u-marginLeft-auto ${styles.btnAction}`}>Submit</button>
          </div>
        </form>
      </div>

    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: this.props.sex || '',
      value: 'select a sex'
    };
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  onSexChange = (e) => {
    // target the <select> element
    const selectBox = e.currentTarget;
    // target the selected <option>
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    // set the state with the new selected value
    this.setState({
      sex: selectedValue,
      value: selectedValue
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // use state set by onNameChange() instead or target.value
    const name = this.state.name.trim();
    const sex = this.state.sex;
    const validationContainer = document.getElementById('formValidation');

    // avoid spamming friends without name
    if (this.state.name === '') {
      validationContainer.classList.add('notValid');
    }
    else {
      validationContainer.classList.remove('notValid');
      this.props.addFriend(name, sex);
      this.setState({
        name: '',
        sex: '',
        value: ''
      });
    }
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
