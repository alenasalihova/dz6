import React, { Component } from 'react';

import { Users } from './Users';

export class Content1 extends Component {
state = (users: users);
isShowUser = (user) => {
    user.isShow = !user.isShow;
    this.setState((st) => ({users: st.users.map(userL => {
        if (userL.id == user.id) return user
    })}))
}
  render() {

    return (
      <div>
        <h2>Content1 </h2>
        <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
        
      </div>
    );
  }
};

