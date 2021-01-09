import React from 'react';

import { Link } from 'react-router-dom';

import SingleConclusionCard from '../../shared/ConclusionCard/ConclusionCard';

import './Conclusion.scss';

class Conclusion extends React.Component {
  state = {
    conclusionCards: [
      {
        id: 1,
        title: 'Need to register to vote in Tennessee? You can do it online!',
        btnText: 'Register to Vote Online',
        url: 'https://ovr.govote.tn.gov/',
      },
      {
        id: 2,
        title: 'Already registered in Tennessee? Confirm your registration.',
        btnText: 'Confirm Your Registration in Tennessee',
        url: 'https://tnmap.tn.gov/voterlookup/',
      },
      {
        id: 3,
        title: 'GoVoteTN.com is the go-to resouce for accurate election information in Tennessee.',
        btnText: 'Visit GoVoteTN.com',
        url: 'https://govotetn.com/',
      },
    ],
  }

  render() {
    const buildConclusionCards = this.state.conclusionCards.map((singleCard) => <SingleConclusionCard
      title={singleCard.title}
      url={singleCard.url}
      btnText={singleCard.btnText}
      key={singleCard.id}
    />);

    return (
      <div className="Conclusion">
        <h2>One Last Thing</h2>
        <h5>For something as important and voting, you need to seek out accurate election information.
          In Tennessee, that source of information is your state and county election officials.
        </h5>
        <div className="conclusion-card-container">
          { buildConclusionCards }
        </div>
        <div>
          <Link to="/home" className="btn btn-small btn-light">Back to Home Page</Link>
        </div>
      </div>
    );
  }
}

export default Conclusion;
