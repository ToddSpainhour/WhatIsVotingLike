import React from 'react';

import './Slider.scss';

class Slider extends React.Component {
  // state = {
  //   sliderValue: 50,
  // }

  // changeSliderValue = (e) => {
  //   this.setState({ sliderValue: e.target.value });
  // }
  // grab sliderValue when submitAnswer is clicked, send it back up to Intro, conditionally render the response;

  // submitAnswer = () => {
  //   console.log('You clicked the submitAnswer func in Intro');
  //   // this.setState({ submittedSliderValue: this.state.sliderValue });
  //   this.setState({ sliderValue: this.state.sliderValue });
  //   console.log(this.state.sliderValue);
  // }

  render() {
    return (
      <div className="Slider">
        <h3>What percentage of voters in Tennessee choose to vote in person?</h3>
        <div className="slidecontainer">
          {/* <input type="range" min="1" max="100" defaultValue="50" className="slider-input" id="slider" onChange={this.changeSliderValue}/> */}
          {/* <input type="range" min="1" max="100" defaultValue={this.state.value} className="slider" onInput={this.props.changeSliderValue}/> */}
          <input type="range" min="1" max="100" defaultValue={this.props.value} className="slider" onInput={this.props.changeSliderValue}/>
          <output id="output"></output>
          <div className="slider-result">{this.props.sliderValue}%</div>
          </div>
          {/* <button onClick={this.submitAnswer}className="btn btn-light">Submit Answer</button> */}
          <button onClick={this.props.submitAnswer}className="btn btn-light">Submit Answer</button>
      </div>
    );
  }
}

export default Slider;
