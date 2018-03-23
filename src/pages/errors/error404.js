import React, { Component } from 'react';

class error404 extends Component {
  render() {
    return(
      <div>
        <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                    <h2 className="card-title text-center">404</h2>
                    <div className="card-body text-center">
                        <h3>Page not found.</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default error404;
