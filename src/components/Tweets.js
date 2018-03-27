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

  /**
   * function to like
   */
  like(e){
     e.preventDefault();
     fetch('http://localhost:3001/twitter/like?id=' + e.currentTarget.value)
      .then((response) => response.json())
      .then((responseJson) => {})
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * function to retweet
   */
  retweet(e, tweet){
     e.preventDefault();
     fetch('http://localhost:3001/twitter/retweet?id=' + e.currentTarget.value)
      .then((response) => response.json())
      .then((responseJson) => {

      })
      .catch((error) => {
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
                              tweet_name = (tweet.retweeted_status) ? tweet.retweeted_status.user.name : tweet.user.name,
                              tweet_retweet_css = (tweet.retweeted) ? 'btn btn-link text-primary' : 'btn btn-link',
                              tweet_like_css = (tweet.favorited) ? 'btn btn-link text-danger' : 'btn btn-link';

                          return <div className="info info-horizontal" key={key}>
                              <div className="description">
                                  <h4 className="info-title"><i className="fa fa-twitter"></i> {tweet_name}</h4>
                                  <p className="description">
                                      {tweet.text}
                                  </p>
                                  <div className="actions">
                                      <button value={tweet.id_str} onClick={e => this.like(e)} className={tweet_like_css}><i className="fa fa-heart"></i> {tweet.favorite_count}</button>
                                      <button value={tweet.id_str} onClick={e => this.retweet(e)} className={tweet_retweet_css}><i className="fa fa-retweet"></i> {tweet.retweet_count}</button>
                                  </div>
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
