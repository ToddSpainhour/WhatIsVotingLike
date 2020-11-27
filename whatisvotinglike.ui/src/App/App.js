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
