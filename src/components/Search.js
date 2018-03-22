import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <div>
        <form className="form mt-5 mb-5" method="" action="">
            <div className="form-group bmd-form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="material-icons">face</i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Account Name"/>
                </div>
            </div>
            <div className="form-group bmd-form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="material-icons">list</i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Tweets Count"/>
                </div>
            </div>
            <div className="text-center">
                <a href="#pablo" className="btn btn-primary btn-round">Fetch<div className="ripple-container"></div></a>
            </div>
        </form>
      </div>
    );
  }
}

export default Search;
