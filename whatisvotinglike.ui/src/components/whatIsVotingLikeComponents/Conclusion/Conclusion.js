import React from 'react';

// import { Link } from 'react-router-dom';

import SingleConclusionCard from '../../shared/ConclusionCard/ConclusionCard';

import './Conclusion.scss';

class Conclusion extends React.Component {
  state = {
    conclusionCards: [
      {
        id: 1,
        title: 'Need to register to vote in Tennessee?',
        btnText: 'Visit Tennessee\'s Online Voter Registration Portal',
        url: 'https://ovr.govote.tn.gov/',
      },
      {
        id: 2,
        title: 'Already registered? Confirm your registration by clicking the button below.',
        btnText: 'Confirm Your Registration in Tennessee',
        url: 'https://tnmap.tn.gov/voterlookup/',
      },
      {
        id: 3,
        title: 'Learn everything you need to know about elections in Tennessee by visiting GoVoteTN.com',
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
          { buildConclusionCards }
      </div>
    );
  }
}

export default Conclusion;
