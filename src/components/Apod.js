
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import NASA from "./Card";
//import Form from "./Form";
import styled from "styled-components";

export default function Apod(props) {

    const [url, setUrl] = useState("");
    const [urlType, seturlType] = useState("image");
    const [date, setDate] = useState("");
    const [explanation, setExplanation] = useState("");
    const [title, setTitle] = useState("");
    const [copyright, setCopyright] = useState("");

    const div = styled.section `

    width: 100%;
    border-radius: 10px;
    
    `;

    useEffect(() => {

      axios

        .get(

          `https://api.nasa.gov/planetary/apod?api_key=fXmhweTsDzm9oUGF871RBrvT5VT7Ib23X0Ero9sd`
        
        )

        .then(res => {

            console.log(res);
            setUrl(res.data.url);
            seturlType(res.data.media_type);
            setDate(res.data.date);
            setExplanation(res.data.explanation);
            setTitle(res.data.title);

            if(res.data.hasOwnProperty("copyright")){

              setCopyright(res.data.copyright);

            }

          })

      }, [props.date]);

    return (

      <div>

        <NASA
          title={title}
          date={date}
          url={url}
          urlType={urlType}
          copyright={copyright}
          explanation={explanation}
        />
        <Form />
      </div>

    );
    
  }

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
        <form style={{opacity:'60%'}} onSubmit={this.mySubmitHandler}>
        <h3>Try Another Date: {this.state.username} {this.state.age} {this.state.day}</h3>
        <p>Year:</p>
        <input
          style={{width:50}}
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Month:</p>
        <input
          style={{width:30}}
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        <p>Day:</p>
        <input
          style={{width:30}}
          type='text'
          name='day'
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
  