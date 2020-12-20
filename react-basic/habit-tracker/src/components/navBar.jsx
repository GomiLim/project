import React, { PureComponent } from 'react';
import '../app.css';

class NavBar extends PureComponent {
  render() {
    console.log('nav bar');
    return (
      <div className='navebar'>
        <i className='fas fa-leaf'></i>
        <h1>Habit Tracker</h1>
        <span className='choose-habit'>{this.props.totalCount}</span>
      </div>
    );
  }
}

export default NavBar;
