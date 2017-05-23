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

    // maximum number of friends per page
    const friendsPerPage = 2;
    const friends = this.props.friends;
    const currentPage = this.state.currentPage;

    // last friend show on a page, -1 with slice()
    const lastFriend = currentPage * friendsPerPage;
    // first friend show on a page
    const firstFriend = lastFriend - friendsPerPage;
    // friends that will be show per page
    const currentFriends = friends.slice(firstFriend, lastFriend);
    console.log(currentFriends);

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
