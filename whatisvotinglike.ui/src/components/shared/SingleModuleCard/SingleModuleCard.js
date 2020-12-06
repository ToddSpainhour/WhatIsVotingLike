import React from 'react';

import './SingleModuleCard.scss';

class SingleModuleCard extends React.Component {
  render() {
    return (
      <div className="SingleModuleCard col-md-5 col-sm-12">
        <h5>Module Title: {this.props.module.title}</h5>
        <p>{this.props.module.description}</p>
        <button className="btn btn-small start-training-btn">Start Training</button>
      </div>
    );
  }
}

export default SingleModuleCard;
