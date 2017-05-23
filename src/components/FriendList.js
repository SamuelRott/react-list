import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }


  render () {

    const friendsPerPage = 2;
    const friends = this.props.friends;
    const currentPage = this.state.currentPage;

    const displayFriends = friends.map((friend, index) => {
      return (
        <FriendListItem
          key={index}
          id={index}
          name={friend.name}
          starred={friend.starred}
          {...this.props.actions} />
      );
    })

    return (
      <ul className={styles.friendList}>
        { displayFriends }
      </ul>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
