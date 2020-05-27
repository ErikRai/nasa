import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    let day = this.state.day;
    if (!Number(age)) {
      alert("Your Month must be a number. ie: '12'");
    }
    if (!Number(day)) {
      alert("Your Day must be a number. ie: '31'");
    }
    document.location='&date='+this.state.username+'-'+this.state.age+'-'+this.state.day;
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h3>Try Another Date: {this.state.username} {this.state.age} {this.state.day}</h3>
      <p>Month:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>day:</p>
      <input
        type='text'
        name='day'
        onChange={this.myChangeHandler}
      />
      <p>Year:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));
export default Form;