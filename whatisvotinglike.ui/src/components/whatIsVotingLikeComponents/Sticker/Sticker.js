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
      <main className="Sticker">
        <h2>{this.props.slides[7].slideTitle}</h2>
        <article>
        <h6>{this.props.slides[7].slideBodyText}</h6>
        <img src={this.props.slides[7].imageUrl} className="sticker-img" alt="I Voted Stickers"/>
        </article>

        <button onClick={this.props.ChangeStickerCompletedStatus} >Click to fulfill slide requirements</button>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./votingMachine' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default Sticker;
