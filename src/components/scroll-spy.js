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
      let targetPosition = target.offsetTop || target.clientTop;
      console.log('targetPosition: ', targetPosition);

      if (targetPosition >= 0) {
        targetPosition += (targetPosition !== 0) ? 5 : 0;
        const init = window.scrollY;
        const valueToAdd = (window.scrollY <= targetPosition) ? 10 : -10;
        let i = window.scrollY;
        const scrollInterval = setInterval(() => {
          window.scrollTo(init, i);
          i += valueToAdd;
          if ((valueToAdd === 10 && i >= targetPosition) ||
            (valueToAdd === -10 && i <= targetPosition)) clearInterval(scrollInterval);
        }, 7);
      }
    }
  }

  render() {
    return(
      <ul className="navbar-nav">
        {this.items.map((item) => {
          const key = item.toLowerCase();
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