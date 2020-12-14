import React from 'react';

import './Slider.scss';

class Slider extends React.Component {
  state = {
    sliderValue: 50,
  }

  changeSliderValue = (e) => {
    this.setState({ sliderValue: e.target.value });
  }
  // grab sliderValue when submitAnswer is clicked, send it back up to Intro, conditionally render the response;

  render() {
    return (
      <div className="Slider">
        <h3>What percentage of voters in Tennessee choose to vote in person?</h3>
        <div className="slidecontainer">
          {/* <input type="range" min="1" max="100" defaultValue="50" className="slider-input" id="slider" onChange={this.changeSliderValue}/> */}
          <input type="range" min="1" max="100" defaultValue={this.state.value} className="slider" onInput={this.changeSliderValue}/>
          <output id="output"></output>
          <div className="slider-result">{this.state.sliderValue}%</div>
          </div>
          <button onClick={this.props.submitAnswer}className="btn btn-light">Submit Answer</button>
      </div>
    );
  }
}

export default Slider;
