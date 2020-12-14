import React from 'react';

import { Link } from 'react-router-dom';

import Slider from '../../commonComponents/Slider/Slider';

import './Intro.scss';

class Intro extends React.Component {
  state = {
    sliderValue: 50,
  }

  changeSliderValue = (e) => {
    this.setState({ sliderValue: e.target.value });
  }

  submitAnswer = () => {
    console.log('this.state.sliderValue: ', this.state.sliderValue);
    this.setState({ sliderValue: this.state.sliderValue });
  }

  render() {
    let nextButton;
    if (this.props.introComplete === true) {
      nextButton = <Link to='./register' className="btn btn-success m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-warning m-3 disabled-next-button">Disabled Next</button>;
    }

    return (
      <main className="Intro">
        <h2>{this.props.slides[0].slideTitle}</h2>
        <div className="intro-content-container">
          <article>
            <h5>{this.props.slides[0].slideBodyText}</h5>
            <Slider sliderValue={this.state.sliderValue} changeSliderValue={this.changeSliderValue} submitAnswer={this.submitAnswer}/>
          <button onClick={this.props.ChangeIntroCompletedStatus} className='btn btn-light'>Let's Get Started</button>
          </article>

          <img src={this.props.slides[0].imageUrl} alt="Voter holding a sign that says Vote."/>
        </div>

        <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./disclaimer' className="btn btn-light m-3 previous-button">Previous</Link>
          {nextButton}
        </nav>
      </main>
    );
  }
}

export default Intro;
