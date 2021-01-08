import React from 'react';

import './ConclusionCard.scss';

class ConclusionCard extends React.Component {
  render() {
    return (
      <div className="ConclusionCard">
        <h6>{this.props.title}</h6>
        <button href={this.props.url}>{this.props.btnText}</button>
      </div>
    );
  }
}

export default ConclusionCard;
