import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  handleClick = (event) => {
    this.setState({
      currentPage: event.target.id
    });
  }

  renderPages = () => {
    const friendsPerPage = 2;
    const friendsTotal = this.props.friends;

    const pages = [];
    for (let i = 1; i <= Math.ceil(friendsTotal.length / friendsPerPage); i++) {
      pages.push(i);
    }

    return pages.map(number => {
      return (
        <span
          key={number}
          id={number}
          onClick={this.handleClick}
          className={`btn btn-default ${styles.btnAction} `}>
          {number}
        </span>
      );
    });

  }

  renderFriends = () => {
    // maximum number of friends per page
    const friendsPerPage = 2;
    const friendsTotal = this.props.friends;
    const currentPage = this.state.currentPage;

    // last friend show on a page, -1 with slice()
    const lastFriend = currentPage * friendsPerPage;
    // first friend show on a page
    const firstFriend = lastFriend - friendsPerPage;
    // friends that will be show per page
    const currentFriends = friendsTotal.slice(firstFriend, lastFriend);

    return currentFriends.map((friend) => {
      return (
        <FriendListItem
          key={friendsTotal.indexOf(friend)}
          id={friendsTotal.indexOf(friend)}
          sex={friend.sex}
          name={friend.name}
          starred={friend.starred}
          {...this.props.actions} />
      );
    })
  }

  render () {
    const displayPages = this.renderPages();
    const displayFriends = this.renderFriends();

    return (
      <div>
        <ul className={styles.friendList}>
          { displayFriends }
        </ul>
        { displayPages }
      </div>

    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
