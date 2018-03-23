import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import Title from '../components/Title';

class Nav extends Component {
  render() {
    return(
      <div>
        <nav className="navbar  navbar-transparent    navbar-absolute  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                    <Title />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={{pathname: '/'}} className="nav-link"><i className="material-icons">chrome_reader_mode</i> Tweets</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={{pathname: '/post'}} className="nav-link"><i className="material-icons">send</i> Post</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip noopener noreferrer" title="" data-placement="bottom" href="https://twitter.com/jeradrutnam" target="_blank" data-original-title="Follow me on Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>

                </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
