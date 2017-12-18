'use strict';

import React, { Component } from 'react';

class ScrollSpy extends Component {
  constructor(props) {
    super(props);
    this.items = props.items || [];
  }

  onClick(event) {
    event.stopPropagation();
    const target = document.getElementById(event.target.getAttribute('data-scrollto'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  render() {
    return(
      <ul className="navbar-nav mr-auto">
        {this.items.map((item) => {
          const key = item.toLowerCase().replace(/ /g,"-");
          return (
            <li className="nav-item" key={key}>
              <a className="nav-link" data-scrollto={key} onClick={this.onClick}>{item}</a>
            </li>
          );
        }
        )}
      </ul>)
    }
}

export default ScrollSpy;