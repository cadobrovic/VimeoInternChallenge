import React, { Component } from 'react';
import './App.css';
import data from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="monsoon-container">
          <div className="monsoon-content">
            <div className="monsoon-text">
              <h2 className="monsoon-head">MONSOON III</h2>
              <p className="monsoon-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ultrices dui sapien eget mi. Vulputate mi sit amet mauris. 
                Orci sagittis eu volutpat odio facilisis. Sapien nec sagittis 
                aliquam curabitur. Vulputate mi sit amet mauris. 
                Orci sagittis eu volutpat odio facilisis. Sapien nec 
                curabitur. 
              </p>
            </div>
            <img 
              className="monsoon-img"
              src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
            />
  
          </div>
          
        </div>
  
        <div className="bottom-container">
  
          <div className="beams-container">
  
            <div className="beams-content">
  
              <div className="beams-text">
                <h2 className="bottom-head">BEAMS</h2>
                <p className="bottom-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ultrices dui sapien eget mi. Vulputate mi sit amet mauris. 
                  Orci sagittis eu volutpat odio facilisis. Sapien nec sagittis 
                  aliquam malesuada bibendum arcu vitae elementum curabitur. 
                </p>
              </div>
              <img 
                className="beams-img"
                src="https://i.vimeocdn.com/video/589972810_530x315.jpg"
              />
  
            </div>
  
            
  
          </div>
  
          <div className="move2-container">
            
            <div className="move2-content">
  
              
              <div className="move2-text">
                <h2 className="bottom-head">Move 2</h2>
                <p className="bottom-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ultrices dui sapien eget mi. Vulputate mi sit amet mauris. 
                  Orci sagittis eu volutpat odio facilisis. Sapien nec sagittis 
                  aliquam malesuada bibendum arcu vitae elementum curabitur. 
                </p>
              </div>
              <img
                className="move2-img" 
                src="https://i.vimeocdn.com/video/590587169_530x315.jpg"
              />
  
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
