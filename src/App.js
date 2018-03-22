import React, { Component } from 'react';
import Titles from './components/Titles';
import './App.css';

const API = 'http://localhost:3001/twitter?screen_name=jeradrutnam';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {}
    };
  }

  componentWillMount(){
     fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {

        console.log(typeof responseJson);

        this.setState({
          dataSource: responseJson,
        }, function(){
          console.log(this.state.dataSource);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Titles />
        </header>
        <div>
          {
              Object.keys(this.state.dataSource).map(key => {
                  return <div key={key}>{this.state.dataSource[key].text}<br /><br /></div>;
              })
          }
        </div>
      </div>
    );
  }
}

export default App;
