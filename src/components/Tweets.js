import React, { Component } from 'react';
import Search from './Search';

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      name: '',
      count: 10,
      dataSource: {},
      showEmpty: false,
    };
  }

  /**
   * input text change handlers
   */
  handleChangeName = e => this.setState({ name: e.target.value });
  handleChangeCount = e => this.setState({ count: e.target.value });

  /**
   * function to fetch tweets
   */
  fetch(e){
     e.preventDefault();
     fetch('http://localhost:3001/twitter/get?screen_name=' + this.state.name + '&count=' + this.state.count)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          searched: true,
          dataSource: responseJson,
          showEmpty: false,
        }, function(){});
      })
      .catch((error) => {
        this.setState({
          searched: true,
          dataSource: {},
          showEmpty: true,
        });
        console.error(error);
      });
  }

  render() {
    return(
      <div>
          <div className="row">
              <div className="col-md-12 mr-auto">
                  <Search checked={this.state.searched}
                        onSearch={e => this.fetch(e)}
                        name={this.state.name}
                        onChangeName={this.handleChangeName}
                        count={this.state.count}
                        onChangeCount={this.handleChangeCount} />
              </div>
              <div className="col-md-12 ml-auto text-center">
                  {
                      Object.keys(this.state.dataSource).map(key => {
                          if(!this.state.searched) return false;

                          let tweet = this.state.dataSource[key],
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
          </div>
      </div>
    );
  }
}

export default Tweets;
