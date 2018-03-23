import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Post from './pages/Post';
import error404 from './pages/errors/error404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <div className="page-header header-filter" filter-color="purple">
              <div className="container">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/post" component={Post} />
                    <Route exact path='*' component={error404} />
                  </Switch>
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
        </Router>
      </div>
    );
  }
}

export default App;
