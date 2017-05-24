import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as types from './constants/ActionTypes';
import * as actions from './actions/FriendsActions';

import App from './containers/App';
import FriendListApp from './containers/FriendListApp';

import AddFriendInput from './components/AddFriendInput';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// test the presence of needed component and element
it( 'App component should contain FriendListApp component', () =>
{
    const wrapper = shallow( <App /> );
    expect( wrapper.contains( <FriendListApp /> ) );
});

it( 'AddFriendInput component should contain only one form', () =>
{
    const wrapper = shallow( <AddFriendInput />  );
    expect( wrapper.find('.Form').length).toEqual(1);
});

it( 'AddFriendInput component should contain at least one error-message', () =>
{
    const wrapper = shallow( <AddFriendInput /> );
    expect(wrapper.find('.error-message').length).toBeGreaterThan(0);
});

// Test the state before any actions
it('AddFriendInput State.value should be an palceholder string select a sex', () => {
  	var wrapper = shallow(<AddFriendInput />);
  	expect(wrapper.state().value).toEqual("select a sex");
});

it('AddFriendInput State.name should be empty string', () => {
  	var wrapper = shallow(<AddFriendInput />);
  	expect(wrapper.state().name).toEqual("");
});

it('AddFriendInput State.sex should be empty string', () => {
  	var wrapper = shallow(<AddFriendInput />);
  	expect(wrapper.state().sex).toEqual("");
});
