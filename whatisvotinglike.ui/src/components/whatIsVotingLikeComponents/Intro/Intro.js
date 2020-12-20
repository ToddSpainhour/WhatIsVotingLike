import React from 'react';

import { Link } from 'react-router-dom';

import Slider from '../../commonComponents/Slider/Slider';

import './Intro.scss';

class Intro extends React.Component {
  state = {
    sliderValue: 50,
    submittedAnswer: false,
  }

  changeSliderValue = (e) => {
    this.setState({ sliderValue: e.target.value });
  }

  submitAnswer = () => {
    this.setState({ sliderValue: this.state.sliderValue });
    this.setState({ submittedAnswer: true });
    this.props.ChangeIntroCompletedStatus();
  }

  render() {
    let nextButton;
    if (this.props.introComplete === true) {
      nextButton = <Link to='./register' className="btn active-next-button m-3">Next</Link>;
    } else {
      nextButton = <button className="btn m-3 disabled-next-button">Next</button>;
    }

    let answerResponse;
    if (this.state.submittedAnswer === true && this.state.sliderValue > 75) {
      answerResponse = <h6>That's too high.</h6>;
    } else if (this.state.submittedAnswer === true && this.state.sliderValue < 75) {
      answerResponse = <h6>That's too low!</h6>;
    } else {
      answerResponse = '';
    }

    return (
      <main className="Intro">
      <h2>{this.props.slides[0].slideTitle}</h2>
      <div className="intro-content-container">
        <article>
          <h5>{this.props.slides[0].slideBodyText}</h5>
          <Slider sliderValue={this.state.sliderValue} changeSliderValue={this.changeSliderValue} submitAnswer={this.submitAnswer}/>
          { answerResponse }
        </article>

        <img src={this.props.slides[0].imageUrl} alt="Voter holding a sign that says Vote."/>
      </div>

      <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
        <Link to='./disclaimer' className="btn m-3 previous-button">Previous</Link>
        {nextButton}
      </nav>
    </main>
    );
  }
}
export default Intro;
