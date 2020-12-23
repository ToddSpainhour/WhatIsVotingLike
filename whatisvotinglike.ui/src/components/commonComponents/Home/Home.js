import React from 'react';

import SingleModuleCard from '../../shared/SingleModuleCard/SingleModuleCard';

import './Home.scss';

class Home extends React.Component {
  render() {
    const { trainingModules } = this.props;

    const buildModuleCards = trainingModules.map((module) => <SingleModuleCard module={module} getSlides={this.props.getSlides} key={module.trainingModuleId}/>);

    return (
      <div className="Home">
        <h2>What is Voting Like?</h2>
        <h5>Welcome to the unauthorized "What is Voting Like?" web training experience, where you can see just how easy voting in Tennessee can be.
        </h5>
          <h5>Choose a module below to get started.</h5>
        <div className="module-cards-container">
        {buildModuleCards}
        </div>
          <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
        </div>
      </div>
    );
  }
}

export default Home;
