import React, { Component } from 'react';
import Tweets from '../components/Tweets';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                    <h2 className="card-title text-center">Grab some tweets!</h2>
                    <div className="card-body">
                        <Tweets />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
