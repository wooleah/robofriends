import React, { Component } from 'react';
import CounterButton from './CounterButton';
// let Header = () => {
//   console.log('Header');
//   return <h1 className="f1">RoboFriends</h1>;
// }

// Header = React.memo(Header)

class Header extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Header should component update');
  //   return false;
  // }

  render() {
    console.log('Header');
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color="red"></CounterButton>
      </div>
    );
  }
}


export default Header;