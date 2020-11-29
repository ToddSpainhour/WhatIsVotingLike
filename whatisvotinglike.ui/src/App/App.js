import React from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

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
import Footer from '../components/shared/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/intro' component={Intro}/>
            <Route path='/disclaimer' component={Disclaimer}/>
            <Route path='/register' component={Register}/>
            <Route path='/outsidePollingPlace' component={OutsidePollingPlace}/>
            <Route path='/insidePollingPlace' component={InsidePollingPlace}/>
            <Route path='/checkIn' component={CheckIn}/>
            <Route path='/votingMachine' component={VotingMachine}/>
            <Route path='/sticker' component={Sticker}/>
            <Route path='/conclusion' component={Conclusion}/>
            <Redirect from="*" to="/home" />
          </Switch>
        </React.Fragment>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
