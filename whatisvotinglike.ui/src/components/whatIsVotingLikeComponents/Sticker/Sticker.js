import React from 'react';

import { Link } from 'react-router-dom';

import './Sticker.scss';

class Sticker extends React.Component {
  render() {
    let nextButton;
    if (this.props.stickerComplete === true) {
      nextButton = <Link to='./conclusion' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <div className="Sticker">
        <h5>Sticker</h5>
        <h6>Some slides will disable the next button until the user performs some action.</h6>
        <p>Current StickerComplete status: {this.props.stickerComplete.toString()}</p>

        <button onClick={this.props.ChangeStickerCompletedStatus} >Click to fulfill slide requirements</button>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./votingMachine' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default Sticker;
