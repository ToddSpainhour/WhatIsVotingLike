import React from 'react';

import { Link, Redirect } from 'react-router-dom';

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
    if (this.props.slides.length === 0) {
      return <Redirect to="/home" />;
    }

    let nextButton;
    if (this.props.introComplete === true) {
      nextButton = <Link to='./register' className="btn active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn disabled-next-button">Next</button>;
    }

    let answerResponse;
    if (this.state.submittedAnswer === true && this.state.sliderValue >= 99) {
      answerResponse = <div>
                         <h5>You picked {this.state.sliderValue}%. That's too high.</h5>
                         <h5>As of September 2020, 98% of Tennesseans chose to cast their ballot in person.</h5>
                       </div>;
    } else if (this.state.submittedAnswer === true && this.state.sliderValue <= 97) {
      answerResponse = <div>
                          <h5>You picked {this.state.sliderValue}%, but that's too low!</h5>
                          <h5>As of September 2020, 98% of Tennesseans chose to cast their ballot in person.</h5>
                        </div>;
    } else if (this.state.submittedAnswer === true && this.state.sliderValue == 98) {
      answerResponse = <div>
                        <h5>You're exactly right!</h5>
                        <h5>As of September 2020, 98% of Tennesseans chose to cast their ballot in person.</h5>
                       </div>;
    } else if (this.state.submittedAnswer === false) {
      answerResponse = '';
    }

    return (
      <main className="Intro">
        <div className="intro-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./disclaimer' className="btn previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[0].slideTitle}</h2>
          <div className="intro-content-container">
            <article className="col-12">
              <h5>{this.props.slides[0].slideBodyText}</h5>
              <Slider sliderValue={this.state.sliderValue} changeSliderValue={this.changeSliderValue} submitAnswer={this.submitAnswer}/>
              { answerResponse }
            <img src={this.props.slides[0].imageUrl} className="col-md-3 col-sm-12" alt="Voter holding a sign that says Vote."/>
            </article>

          </div>
      </div>
    </main>
    );
  }
}
export default Intro;
