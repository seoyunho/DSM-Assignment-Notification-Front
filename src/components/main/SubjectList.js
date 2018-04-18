import React, { Component } from 'react';
import Subject from './Subject';
import '../../css/subjectList.css';

class SubjectList extends Component{
  state = { SubjectList: ['과목이 없습니다.'] }

  subjectRender = () => {
    const { state } = this.props;
    return this.state.SubjectList.map((subject, index) => {
      return <Subject 
                key = {index}
                name = {subject}
                clickEvnt = {this.handleClick} 
                styles = {state.selectedSubject === subject ? 'selected-subject' : ''}
              />
    })
  }

  componentDidMount= () => {
    this.setState({
      SubjectList: this.props.state.subjects
    });
  }

  handleClick = (subject) => {
    this.props.actions.selectSubject(subject);
  }

  render() {
    return(
      <div id="subject-section">
        <div id="subject-list">
          {this.subjectRender()}
        </div>
      </div>
    )
  }
}

export default SubjectList;