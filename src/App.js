import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header header-filter" filter-color="purple">
          <div className="container">
            <HomePage />
          </div>
          <footer className="footer ">
              <div className="container">
                  <nav className="pull-left">
                      <ul>
                          <li>
                              <a href="https://github.com/jeradrutnam/" target="_blank" rel="noopener noreferrer">
                                  About Me
                              </a>
                          </li>
                          <li>
                              <a href="https://github.com/jeradrutnam/react-read-twitter/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
                                  License
                              </a>
                          </li>
                      </ul>
                  </nav>
                  <div className="copyright pull-right">
                      &copy;
                      <script>
                          document.write(new Date().getFullYear())
                      </script> Made with <i className="material-icons">favorite</i> by
                      <a href="https://jeradrutnam.com" target="_blank" rel="noopener noreferrer"> Jerad Rutnam</a>
                  </div>
              </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
