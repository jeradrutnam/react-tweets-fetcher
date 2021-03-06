import React, { Component } from 'react';
import Tweet from '../components/Tweet';

class Post extends Component {
  render() {
    return(
      <div>
        <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                    <h2 className="card-title text-center">Let&#39;s post something</h2>
                    <div className="card-body">
                      <Tweet />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Post;
