import React, { Component } from 'react';

import { Navbar, Content1 } from './';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      showContent1: true,
    };
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      showNavbar: !prevState.showNavbar,
    }));
  };

  toggleContent1 = () => {
    this.setState((prevState) => ({
      showContent1: !prevState.showContent1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleNavbar}>Navbar</button>
        <button onClick={this.toggleContent1}>Content1</button>

        {this.state.showNavbar && <Navbar />}

        {this.state.showContent1 && <Content1 />}



      </div>
    );
  }
};

export default Wrapper;
