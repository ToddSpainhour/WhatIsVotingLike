import React from 'react';

import { Link } from 'react-router-dom';

import './Sticker.scss';

class Sticker extends React.Component {
  render() {
    let nextButton;
    if (this.props.stickerComplete === true) {
      nextButton = <Link to='./conclusion' className="btn m-3 active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn m-3 disabled-next-button">Next</button>;
    }
    return (
      <main className="Sticker">
        <h2>{this.props.slides[7].slideTitle}</h2>
        <article>
        <h5>{this.props.slides[7].slideBodyText}</h5>
        <img src={this.props.slides[7].imageUrl} className="sticker-img" alt="I Voted Stickers"/>
        </article>

        <button onClick={this.props.ChangeStickerCompletedStatus} >Click to fulfill slide requirements</button>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./votingMachine' className="btn m-3 previous-button">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default Sticker;
