import React from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import trainingModulesData from '../helpers/data/TrainingmodulesData';

import './App.scss';

import Home from '../components/commonComponents/Home/Home';
import Intro from '../components/whatIsVotingLikeComponents/Intro/Intro';
import Disclaimer from '../components/whatIsVotingLikeComponents/Disclaimer/Disclaimer';
import Register from '../components/whatIsVotingLikeComponents/Register/Register';
import OutsidePollingPlace from '../components/whatIsVotingLikeComponents/OutsidePollingPlace/OutsidePollingPlace';
import InsidePollingPlace from '../components/whatIsVotingLikeComponents/InsidePollingPlace/InsidePollingPlace';
import CheckIn from '../components/whatIsVotingLikeComponents/CheckIn/CheckIn';
import VotingMachine from '../components/whatIsVotingLikeComponents/VotingMachine/VotingMachine';
import Sticker from '../components/whatIsVotingLikeComponents/Sticker/Sticker';
import Conclusion from '../components/whatIsVotingLikeComponents/Conclusion/Conclusion';
// import Footer from '../components/shared/Footer/Footer';

class App extends React.Component {
state = {
  trainingModules: [],
  slides: [],
  introComplete: false,
  disclaimerComplete: false,
  registerComplete: false,
  outsideComplete: false,
  insideComplete: false,
  checkInComplete: false,
  votingMachineComplete: false,
  stickerComplete: false,
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

ChangeDisclaimerCompletedStatus = () => {
  this.setState({ disclaimerComplete: true });
}

ChangeIntroCompletedStatus = () => {
  this.setState({ introComplete: true });
}

ChangeRegisterCompletedStatus = () => {
  this.setState({ registerComplete: true });
}

ChangeOutsideCompletedStatus = () => {
  this.setState({ outsideComplete: true });
}

ChangeInsideCompletedStatus = () => {
  this.setState({ insideComplete: true });
}

ChangeCheckInCompletedStatus = () => {
  this.setState({ checkInComplete: true });
}

ChangeVotingMachineCompletedStatus = () => {
  this.setState({ votingMachineComplete: true });
}

ChangeStickerCompletedStatus = () => {
  this.setState({ stickerComplete: true });
}

render() {
  return (
    <div className="App">
      <BrowserRouter>
      <React.Fragment>
        <Switch>

          <Route exact path='/home' render={(props) => <Home {...props} getSlides={this.getSlides} trainingModules={this.state.trainingModules} slides={this.state.slides}/>} />

          <Route path='/disclaimer'
            render={(props) => <Disclaimer {...props}
            slides={this.state.slides}
            ChangeDisclaimerCompletedStatus={this.ChangeDisclaimerCompletedStatus}
            disclaimerComplete={this.state.disclaimerComplete}
            />}
          />

          <Route path='/intro'
            render={(props) => <Intro {...props}
            slides={this.state.slides}
            ChangeIntroCompletedStatus={this.ChangeIntroCompletedStatus}
            introComplete={this.state.introComplete}
            />}
          />

          <Route path='/register'
            render={(props) => <Register {...props}
            slides={this.state.slides}
            ChangeRegisterCompletedStatus={this.ChangeRegisterCompletedStatus}
            registerComplete={this.state.registerComplete}
            />}
          />

          <Route path='/outsidePollingPlace'
            render={(props) => <OutsidePollingPlace {...props}
            slides={this.state.slides}
            ChangeOutsideCompletedStatus={this.ChangeOutsideCompletedStatus}
            outsideComplete={this.state.outsideComplete}
            />}
          />

          <Route path='/insidePollingPlace'
            render={(props) => <InsidePollingPlace {...props}
            slides={this.state.slides}
            ChangeInsideCompletedStatus={this.ChangeInsideCompletedStatus}
            insideComplete={this.state.insideComplete}
            />}
          />

          <Route path='/checkIn'
            render={(props) => <CheckIn {...props}
            slides={this.state.slides}
            ChangeCheckInCompletedStatus={this.ChangeCheckInCompletedStatus}
            checkInComplete={this.state.checkInComplete}
            />}
          />

          <Route path='/votingMachine'
            render={(props) => <VotingMachine {...props}
            slides={this.state.slides}
            ChangeVotingMachineCompletedStatus={this.ChangeVotingMachineCompletedStatus}
            votingMachineComplete={this.state.votingMachineComplete}
            />}
          />

          <Route path='/sticker'
            render={(props) => <Sticker {...props}
            slides={this.state.slides}
            ChangeStickerCompletedStatus={this.ChangeStickerCompletedStatus}
            stickerComplete={this.state.stickerComplete}
            />}
          />

          <Route path='/conclusion' render={(props) => <Conclusion {...props} slides={this.state.slides}/>} />

          <Redirect from="*" to="/home" />

        </Switch>
      </React.Fragment>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}
}

export default App;
