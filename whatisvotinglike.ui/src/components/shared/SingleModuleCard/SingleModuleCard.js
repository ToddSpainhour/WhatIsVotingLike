import React from 'react';

import { Link } from 'react-router-dom';

import './SingleModuleCard.scss';

class SingleModuleCard extends React.Component {
  render() {
    const loadSelectedModule = () => {
      const selectedTrainingModuleId = this.props.module.trainingModuleId;
      this.props.getSlides(selectedTrainingModuleId);
    };

    return (
      <div className="SingleModuleCard col-md-3 col-sm-12">
        <h5 className="module-title">{this.props.module.title}</h5>
        <p>{this.props.module.description}</p>
        <Link to='./disclaimer' onClick={loadSelectedModule} className="btn btn-small start-training-btn">Start Training</Link>
      </div>
    );
  }
}

export default SingleModuleCard;
