import React, { Component } from 'react';

import style from '../css/Nav.module.css'; 

export class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        menuItems: [
          { id: 1, label: 'Home', link: '/' },
          { id: 2, label: 'About', link: '/about' },
          { id: 3, label: 'Services', link: '/services' },
          { id: 4, label: 'Contact', link: '/contact' },
        ],
        activeMenuItem: null,
      };
    }
    handleMenuItemClick = (itemId) => {
        this.setState({ activeMenuItem: itemId });
      };

    render() {
      return (
        <div>
          <h2>Navbar</h2>
          <menu>
            {this.state.menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => this.handleMenuItemClick(item.id)}
              className={`${style.menuItem} ${item.id === this.state.activeMenuItem ? style.active : ''}`}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
          </menu>
        </div>
      );
    }
  }
  