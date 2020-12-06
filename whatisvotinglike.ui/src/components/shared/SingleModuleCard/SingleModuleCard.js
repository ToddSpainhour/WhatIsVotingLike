import React from 'react';

import './SingleModuleCard.scss';

class SingleModuleCard extends React.Component {
  render() {
    return (
      <div className="SingleModuleCard">
        <p>SingleModuleCard</p>
        <p>Module Title: {this.props.module.title}</p>
        <p>{this.props.module.description}</p>
      </div>
    );
  }
}

export default SingleModuleCard;
