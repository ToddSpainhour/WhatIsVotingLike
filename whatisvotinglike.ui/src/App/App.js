import React from 'react';
import './App.scss';

import Home from '../components/commonComponents/Home/Home';
import Intro from '../components/whatIsVotingLikeComponents/Intro/Intro';
import Conclusion from '../components/whatIsVotingLikeComponents/Conclusion/Conclusion';
import Footer from '../components/shared/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-danger">Test button</button>
        <Home />
        <Intro />
        <Conclusion />
        <Footer />
      </div>
    );
  }
}

export default App;
