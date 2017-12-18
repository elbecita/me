'use strict';

import React, { Component } from 'react';
import ScrollSpy from './scroll-spy';

const navClass = {
  init: 'navbar navbar-expand-lg navbar-light ' +
  'fixed-top navbar-toggleable-md',
  scrolled: 'navbar-scrolled'
}

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClass: navClass.init
    };

    this.items = ['Home', 'About', 'My projects'];

    // Binding
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
     const scrolled = window.scrollY;
     const navBarHeight = document.querySelector('nav').offsetHeight;
     if (scrolled >= navBarHeight + 20) {
      this.setState({ navClass: `${navClass.init} ${navClass.scrolled}` });
     } else {
      this.setState({ navClass: navClass.init });
     }
  }

  render() {
    const socialLinks = [
      {
        id: 'github',
        link: 'https://github.com/elbecita'
      },
      {
        id: 'stack-overflow',
        link: 'https://stackoverflow.com/users/4067893/elbecita'
      },
      {
        id: 'linkedin',
        link: 'https://www.linkedin.com/in/elbecita/'
      }
    ];

    return (
        <nav className={this.state.navClass}>
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-content">
              <ScrollSpy items={this.items} />
              <ul className="navbar-nav">
                {
                  socialLinks.map((sl) => {
                    return (
                      <li className="nav-item" key={sl.id}>
                        <a className="nav-link" href={sl.link} target="_blank"><i className={`fa fa-${sl.id}`}></i></a>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavBar;