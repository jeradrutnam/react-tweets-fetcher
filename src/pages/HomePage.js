import React, { Component } from 'react';
import Tweets from '../components/Tweets';
import Title from '../components/Title';

class HomePage extends Component {
  render() {
    return(
      <div>
        <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                    <Title />
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

export default HomePage;
