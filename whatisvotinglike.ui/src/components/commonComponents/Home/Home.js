import React from 'react';

import { Link } from 'react-router-dom';

import SingleModuleCard from '../../shared/SingleModuleCard/SingleModuleCard';

import './Home.scss';

class Home extends React.Component {
  render() {
    const { trainingModules } = this.props;

    const buildModuleCards = trainingModules.map((module) => <SingleModuleCard module={module} getSlides={this.props.getSlides} key={module.trainingModuleId}/>);

    return (
      <div className="Home">
        <h5>Home</h5>
        <div className="module-cards-container">
        {buildModuleCards}
        </div>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <h6>---These buttons will be removed from this component later. The "Start Training" button above will push user to next component---</h6>
          <Link to='./conclusion' className="btn btn-light m-3">Previous</Link>
          <Link to='./intro' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default Home;
