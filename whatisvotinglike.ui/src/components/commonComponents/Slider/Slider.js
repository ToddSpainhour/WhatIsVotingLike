import React from 'react';

import './Slider.scss';

class Slider extends React.Component {
  render() {
    return (
      <div className="Slider">
        <h5>What percentage of voters in Tennessee choose to vote in person?</h5>
        <div className="slidecontainer">
          <input type="range" min="1" max="100" defaultValue={this.props.value} className="slider" onInput={this.props.changeSliderValue}/>
          <output id="output"></output>
          <div className="slider-result">{this.props.sliderValue}%</div>
          </div>
          <button onClick={this.props.submitAnswer}className="btn btn-light">Submit Answer</button>
      </div>
    );
  }
}

export default Slider;
