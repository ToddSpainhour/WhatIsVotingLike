import React from 'react';

import { Link } from 'react-router-dom';

import trainingModulesData from '../../../helpers/data/TrainingmodulesData';
import SingleModuleCard from '../../shared/SingleModuleCard/SingleModuleCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    trainingModules: [],
    slides: [],
  };

  componentDidMount() {
    trainingModulesData.getAllTrainingModules()
      .then((trainingModules) => this.setState({ trainingModules }))
      .catch((err) => console.error('unable to get modules: ', err));
  }

  getSlides = (selectedTrainingModuleId) => {
    trainingModulesData.getAllSlidesForSelectedTrainingModule(selectedTrainingModuleId)
      .then((slides) => {
        this.setState({ slides });
      });
  }

  render() {
    const { trainingModules } = this.state;
    const buildModuleCards = trainingModules.map((module) => <SingleModuleCard module={module} getSlides={this.getSlides} key={module.trainingModuleId}/>);

    return (
      <div className="Home">
        <h5>Home</h5>
        <div className="module-cards-container">
        {buildModuleCards}
        </div>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./conclusion' className="btn btn-light m-3">Previous</Link>
          <Link to='./intro' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default Home;
