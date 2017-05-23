import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
        <input type="radio" name="chooseSex" value="female"/> female
        <input type="radio" name="chooseSex" value="male"/> male
      </div>

    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend(name);
      this.setState({ name: '' });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
