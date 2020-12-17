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
      { type: 'College student ID', accepted: false },
      { type: 'Tennessee handgun carry permit with your photo', accepted: true },
    ],
  }

  onDragOver = (e) => {
    e.preventDefualt();
  }

  onDragStart = (e, monkeyButt) => {
    e.preventDefault();
    // const type = this.state.photoIdOptions.type;
    e.dataTransfer.setData('text/plain', monkeyButt);
    console.log('onDragStart', monkeyButt);
    console.log('type', monkeyButt);
    console.log('e.dataTransfer.setData', e.dataTransfer.setData);
  }

  // handleDragStart(e, order) {
  //   e.dataTransfer.setData('text/plain', order);
  // }

  onDrop = (e) => {

  }

  render() {
    // eslint-disable-next-line max-len
    const idToShow = this.state.photoIdOptions.map((typeOfPhotoId) => <p
          key={typeOfPhotoId.type}
          className="photo-id-types draggable"
          id={typeOfPhotoId.type}
          onDragStart={(e) => this.onDragStart(e, typeOfPhotoId.id)}> {typeOfPhotoId.type}</p>);

    // const idToShow = this.state.photoIdOptions.map((typeOfPhotoId) => <div key={typeOfPhotoId.type} className="photo-id-types draggable" onDragStart={(e) => this.onDragStart(e, typeOfPhotoId.type)}> <p>{typeOfPhotoId.type}</p></div>);

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
            {/* <div className="photo-id-container">
              <h3>What IDs are acceptable?</h3>
              <h6>Tennessee driver license with your photo</h6>
              <h6>United States Passport</h6>
              <h6>Photo ID issued by the Tennessee Department of Safety and Homeland Security</h6>
              <h6>Photo ID issued by the federal or Tennessee state government</h6>
              <h6>United States Military photo ID</h6>
              <h6>Tennessee handgun carry permit with your photo</h6>
              <h3>What IDs are not acceptable?</h3>
              <h6>College student IDs and photo IDs not issued by the federal or Tennessee state government are NOT acceptable.</h6>
              <h6> This includes county or city issued photo IDs, such as library cards, and photo IDs issued by other states.</h6>
            </div> */}
          </div>
        </article>
        <button onClick={this.props.ChangeCheckInCompletedStatus} >Click to fulfill slide requirements</button>
        {/* <div className="drag-and-drop-container">
          <h5>Let's try some drag and drop down here</h5>
          <div className="drop-area">
            <h6>Drop Area</h6>
          </div>
          <div>
          {idToShow}
          </div>
        </div> */}

        <div className="drag-and-drop-container">
        <div className="droppable col-6" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop}>Drop stuff here</div>
        <div draggable className="draggable col-6" onDragStart={(e) => this.onDragStart(e)}>{idToShow}</div>
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
