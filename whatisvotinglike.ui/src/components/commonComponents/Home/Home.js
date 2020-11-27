import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h5>Home</h5>
        <Link to='/intro' className="btn btn-info">To Intro</Link>
      </div>
    );
  }
}

export default Home;
