import React from 'react';

import './Slider.scss';

class Slider extends React.Component {
  render() {
    let dynamicSubmitButton;
    if (this.props.submittedAnswer === false) {
      dynamicSubmitButton = <button onClick={this.props.submitAnswer}className="btn btn-light">Submit Answer</button>;
    } else {
      dynamicSubmitButton = <button disabled className="btn btn-light">Submitted</button>;
    }

    return (
      <div className="Slider">
        <h5>What percentage of voters in Tennessee choose to vote in person?</h5>
        <div className="slidecontainer">
          <input type="range" min="1" max="100" defaultValue={this.props.value} className="slider" onInput={this.props.changeSliderValue}/>
          <output id="output"></output>
          <div className="slider-result">{this.props.sliderValue}%</div>
          </div>
          { dynamicSubmitButton }
      </div>
    );
  }
}

export default Slider;
