import React from 'react';

import { Link } from 'react-router-dom';

import './CheckIn.scss';

class CheckIn extends React.Component {
  state = {
    photoIdOptions: [
      { type: 'Tennessee driver license with your photo', accepted: true },
      { type: 'United States Passport', accepted: true },
      { type: 'Photo ID issued by the Tennessee Department of Safety and Homeland Security', accepted: true },
      { type: 'Photo ID issued by the federal or Tennessee state government', accepted: true },
      { type: 'United States Military photo ID', accepted: true },
      { type: 'College student ID with your photo', accepted: false },
      { type: 'Tennessee handgun carry permit with your photo', accepted: true },
    ],
    answerPicked: false,
    answerCorrect: false,
  }

  onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log('onDragStart e.target.id: ', e.target.id);
  }

  onDrop = (e) => {
    console.log('inside onDrop');
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
    this.setState({ answerPicked: true });
    this.checkAnswer(data);
  }

  checkAnswer = (data) => {
    if (data === 'collegestudentidwithyourphoto') {
      console.log('correct...id is:', data);
      this.setState({ answerCorrect: true });
    } else {
      console.log('wrong... id is:', data);
    }
  }

  render() {
    const idToShow = this.state.photoIdOptions.map((typeOfPhotoId) => <p
          draggable="true"
          key={typeOfPhotoId.type}
          className="photo-id-types draggable"
          // id={typeOfPhotoId.type}
          id={typeOfPhotoId.type.split(' ').join('').toLocaleLowerCase()}
          onDragStart={(e) => this.onDragStart(e, typeOfPhotoId.id)}> {typeOfPhotoId.type}</p>);

    let nextButton;
    if (this.props.checkInComplete === true) {
      nextButton = <Link to='./votingMachine' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <main className="CheckIn">
        <h2>{this.props.slides[5].slideTitle}</h2>
        <article>
          <h5>{this.props.slides[5].slideBodyText}</h5>
          <div className="checkin-content-container">
            <div>
              <img src={this.props.slides[4].imageUrl} alt="Poll Worker Checking ID"/>
            </div>
          </div>
        </article>
        <button onClick={this.props.ChangeCheckInCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="drag-and-drop-container">
        <div className="droppable col-6" onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.onDrop(e)}>Drop stuff here</div>
        {/* <div className="droppable col-6" onDragOver={(e) => e.onDragOver(e)} onDrop={(e) => this.onDrop}>Drop stuff here</div> */}
        <div draggable className="draggable col-6">{idToShow}</div>
        {/* <div draggable className="draggable col-6" onDragStart={(e) => this.onDragStart(e)}>{idToShow}</div> */}
        </div>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./insidePollingPlace' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default CheckIn;
