import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';


import App from './containers/App';
import FriendListApp from './containers/FriendListApp';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it( 'App component should contain FriendListApp component', () =>
{
    const wrapper = shallow( <App /> );
    expect( wrapper.contains( <FriendListApp /> ) );
});
