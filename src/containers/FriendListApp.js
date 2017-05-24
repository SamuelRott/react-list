import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

class FriendListApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  currentFriends = () => {
    const friendsPerPage = 2;
    const currentPage = this.state.currentPage;
    const friendsTotal = this.props.friendlist.friendsById;

    // last friend show on a page, -1 with slice()
    const lastFriend = currentPage * friendsPerPage;
    // first friend show on a page
    const firstFriend = lastFriend - friendsPerPage;
    // friends that will be show per page
    const currentFriends = friendsTotal.slice(firstFriend, lastFriend);
    return currentFriends;
  }

  handlePageClick = (currentPage) => {
    this.setState({currentPage});
  };

  render () {
    const { friendlist: { friendsById }} = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList currentFriends={this.currentFriends()}
                    allFriends={friendsById}
                    actions={actions}
                    currentPage={this.state.currentPage}
                    handlePageClick={this.handlePageClick} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)
