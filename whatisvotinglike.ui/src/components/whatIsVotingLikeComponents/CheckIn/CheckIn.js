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
    selectedAnswerId: '',
  }

  onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  }

  onDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
    this.setState({ selectedAnswerId: data });
    this.props.ChangeCheckInCompletedStatus();
  }

  render() {
    const idToShow = this.state.photoIdOptions.map((typeOfPhotoId) => <p
          draggable="true"
          key={typeOfPhotoId.type}
          className="photo-id-types draggable"
          id={typeOfPhotoId.type.split(' ').join('').toLocaleLowerCase()}
          onDragStart={(e) => this.onDragStart(e, typeOfPhotoId.id)}> {typeOfPhotoId.type}
          </p>);

    let AnswerResponse;
    if (this.state.selectedAnswerId !== '' && this.state.selectedAnswerId === 'collegestudentidwithyourphoto') {
      AnswerResponse = <div>
                          <h6>That's Correct.</h6>
                          <h6>A driver’s license or photo ID issued by the Tennessee Department of Safety and Homeland Security as well as photo IDs issued by
                              Tennessee state government or the federal government are acceptable even if they are expired. But college student IDs are not.
                          </h6>
                      </div>;
    } else if (this.state.selectedAnswerId === '') {
      AnswerResponse = '';
    } else {
      AnswerResponse = <div>
                        <h6>That's incorrect.</h6>
                        <h6>A driver’s license or photo ID issued by the Tennessee Department of Safety and Homeland Security as well as photo IDs issued by
                            Tennessee state government or the federal government are acceptable even if they are expired. But college student IDs are not.
                        </h6>
                       </div>;
    }

    let nextButton;
    if (this.props.checkInComplete === true) {
      nextButton = <Link to='./votingMachine' className="btn active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn disabled-next-button">Next</button>;
    }

    return (
      <main className="CheckIn">
        <div className="checkin-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./insidePollingPlace' className="btn previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[5].slideTitle}</h2>
          <article className="col-12">
            <h5>{this.props.slides[5].slideBodyText}</h5>
            <div className="checkin-content-container">
              <div>
                <h4>Out of the options below, which is NOT a valid photo ID when voting in Tennessee?</h4>
                <p>Drag and drop your answer to the empty rectangle below.</p>
              </div>
              <div>
              </div>
            </div>
          </article>

          <div className="drag-and-drop-container">
            <div draggable className="draggable col-6">{idToShow}</div>
            <div id="drop-zone" className="droppable col-6" onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.onDrop(e)}></div>
          </div>
          <div>{AnswerResponse}</div>
        </div>
      </main>
    );
  }
}

export default CheckIn;
