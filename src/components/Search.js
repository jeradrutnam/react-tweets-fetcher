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
                    <input type="text" className="form-control" placeholder="Enter Account Name" name={this.props.name} onChange={this.props.onChangeName} />
                </div>
            </div>
            <div className="form-group bmd-form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="material-icons">list</i>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Tweets Count" count={this.props.count} onChange={this.props.onChangeCount} />
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary btn-round" checked={this.props.searched} onClick={this.props.onSearch}>Fetch<div className="ripple-container"></div></button>
            </div>
        </form>
      </div>
    );
  }
}

export default Search;
