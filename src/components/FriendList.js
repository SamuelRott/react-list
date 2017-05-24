import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {

  renderPages = () => {
    const friendsPerPage = 2;
    const pages = [];

    const {currentPage, allFriends, handlePageClick} = this.props;

    for (let i = 1; i <= Math.ceil(allFriends.length / friendsPerPage); i++) {
      pages.push(i);
    }

    return pages.map((number) => {
      return (
        <span
          key={number}
          id={number}
          onClick={() => handlePageClick(number)}
          className={`btn btn-default ${styles.btnAction} ${currentPage === number ? "active" : ""}`}>
          {number}
        </span>
      );
    });
  }

  renderFriends = () => {

    const {currentFriends, allFriends} = this.props;

    return currentFriends.map((friend, index) => {
      return (
        <FriendListItem
          key={allFriends.indexOf(friend)}
          id={allFriends.indexOf(friend)}
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
        <div className="u-paddingS">
          { displayPages }
        </div>
      </div>

    );
  }

}

FriendList.propTypes = {
  currentFriends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default FriendList;
