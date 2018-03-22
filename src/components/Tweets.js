import React, { Component } from 'react';

const API = 'http://localhost:3001/twitter?screen_name=jeradrutnam';

class Tweets extends Component {
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
        this.setState({
          dataSource: responseJson,
        }, function(){
          console.log(this.state.dataSource);
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return(
      <div>
          {
              Object.keys(this.state.dataSource).map(key => {
                  var tweet = this.state.dataSource[key],
                      tweet_name = (tweet.retweeted_status) ? tweet.retweeted_status.user.name : tweet.user.name;

                  return <div className="info info-horizontal" key={key}>
                      <div className="description">
                          <h4 className="info-title"><i className="fa fa-twitter"></i> {tweet_name}</h4>
                          <p className="description">
                              {tweet.text}
                          </p>
                      </div>
                  </div>;
              })
          }
      </div>
    );
  }
}

export default Tweets;
