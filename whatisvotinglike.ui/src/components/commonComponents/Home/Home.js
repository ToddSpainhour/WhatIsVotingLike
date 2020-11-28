import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h5>Home</h5>
        <div className="module-navigation">
          <Link to='./conclusion' className="btn btn-light">Previous</Link>
          <Link to='./intro' className="btn btn-light">Next</Link>
        </div>
      </div>
    );
  }
}

export default Home;
