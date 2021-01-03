import React from 'react';

import { Link } from 'react-router-dom';

import './Sticker.scss';

class Sticker extends React.Component {
  componentDidMount() {
    setTimeout(this.props.ChangeStickerCompletedStatus, 500);
  }

  render() {
    let nextButton;
    if (this.props.stickerComplete === true) {
      nextButton = <Link to='./conclusion' className="btn active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn disabled-next-button">Next</button>;
    }
    return (
      <main className="Sticker">
        <div className="sticker-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./votingMachine' className="btn previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[7].slideTitle}</h2>
          <article>
            <h5>{this.props.slides[7].slideBodyText}</h5>
            <img src={this.props.slides[7].imageUrl} className="sticker-img" alt="I Voted Stickers"/>
          </article>
        </div>
      </main>
    );
  }
}

export default Sticker;
