import React, { Component } from 'react';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };

    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  /**
   * input text change handler
   */
  handleChangeMessage = e => this.setState({ status: e.target.value });

  /**
   * function to post status
   */
  post(e){
     e.preventDefault();
     fetch('http://localhost:3001/twitter/post?status=' + this.state.status)
      .then((response) => response.json())
      .then((responseJson) => {})
      .catch((error) => {
        this.setState({
          status: ''
        });
        console.error(error);
      });
  }

  render() {
    return(
      <div>
        <form className="form mt-5 mb-5" method="" action="">
            <div className="form-group bmd-form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="material-icons">message</i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Your Status"  value={this.state.value} onChange={this.handleChangeMessage} />
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary btn-round" onClick={e => this.post(e)}>Post<div className="ripple-container"></div></button>
            </div>
        </form>
      </div>
    );
  }
}

export default Tweet;
