import React from 'react';

import './ConclusionCard.scss';

class ConclusionCard extends React.Component {
  render() {
    return (
      <div className="ConclusionCard col-3 d-flex">
        <h6>{this.props.title}</h6>
          <a href={this.props.url} target="_blank" rel="noreferrer" className=" mt-auto">
            <button className="btn btn-small">{this.props.btnText}</button>
          </a>
      </div>
    );
  }
}

export default ConclusionCard;
