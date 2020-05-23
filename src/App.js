import React from "react";
import "./App.css";
import Apod from "./components/Apod";
import styled from "styled-components";


function App() {
  
  const InnerContainer = styled.div `

    width: 800px;

  `
  const OuterContainer = styled.div `

    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #7b8993;
    color: white;

    img{
      border: 10px solid transparent;
      padding: 15px;
      border-image: url(https://www.w3schools.com/cssref/border.png) 50 round;
    }

    copyright {
      text-decoration: underline;
      word-spacing: length;
    }

  `
  
  return (
    <OuterContainer>
      <InnerContainer>
        <div className="App">
          <h1>
            NASA's Photo of the Day<span role="img" aria-label='go!'>🚀</span>!
          </h1>
          <Apod />
          <br></br>
          <footer>
            <a href="http://erikrai.com">@Supreme.Ciento</a> | Cloud Bots™
          </footer><br />
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}

export default App;
