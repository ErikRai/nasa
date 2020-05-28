import React, { Component } from 'react';
import "./App.css";
import Apod from "./components/Apod";
import styled from "styled-components";
import Loader from 'react-loader-spinner'


class App extends Component {
  state = {
    ApodData: {}
  }

  componentDidMount() {
    setTimeout(() => this.getCharacters(), 3000);
  }

  getCharacters = (url = 'https://swapi.dev/api/people/') => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ ApodData: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  
  render() {  
    const {results} = this.state.ApodData;

    const InnerContainer = styled.div `

    width: 800px;
    
    `
    const OuterContainer = styled.div `
    
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #7b8993;
    color: white;
    background: url(space.gif);
    background-size: fill;
    
    img{
    
      border: 15px solid transparent;
      width: 90%;
      padding: 15px;
      border-radius: 5px;
      border: 1px outset white;
    }

    img:hover {
      border: 1px outset gold;
    }

    copyright {
    
      text-decoration: underline;
      word-spacing: length;
    
    }

    #NASA {
        transition: all 2s;
      }
      #NASA {
          opacity: 1;
      }
      #NASA:hover {
          opacity: 0;
      }
      #NASA:hover {
        margin-left: 100px;
      }
      p, div span { color: white; }
    }
    
    `

    return (

      <OuterContainer>
        
        <InnerContainer>
          <div className="header">
              <div className="App">
                
                <h1 id="NASA">
                  NASA's Photo of the Day<span role="img" aria-label='go!'>🚀</span>!
                </h1>
                {results
                  ? <Apod chars={results} />
                  : <Loader type="Audio" color="cyan" secondaryColor="#ffffff " height={500} width={500} timeout={0}/>
                }

                <br/>

                <footer>
                  <a href="http://erikrai.codes">@Supreme.Ciento</a> | Cloud Bots™
                </footer>
                
                <br />

              </div>
          </div>

        </InnerContainer>

      </OuterContainer>

    );
  }
}

export default App;
