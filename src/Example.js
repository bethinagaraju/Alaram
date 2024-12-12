import React from "react";
import "./Example.css";

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      h: 0,
      m: 0,
      s: 0,
    };
  }

  // Timer functions
  hour = () => {
    let hh =this.state.h + 1
    this.setState({
      h: hh,
    });

    if(hh>23){
        this.setState({
            h:0
        })
    }
  };

  minute = () => {
    let mm = this.state.m + 1;
    this.setState({
      m: mm,
    });

    if (mm > 59) {
      this.setState({ m: 0 });
      this.hour();
    }
  };

  second = () => {
    let ss = this.state.s + 1;
    this.setState({
      s: ss,
    });

    if (ss > 59) {
      this.setState({ s: 0 });
      this.minute();
    }
  };

  // Audio functions
  stopSong = () => {
    const audio = document.getElementById("audioElement");
    audio.pause();

    const button = document.querySelector('.audioControls button');

    // Set the display of the button to block
    if (button) {
      button.style.display = 'none';
    }
    
  };

  playSong = () => {
    const audio = document.getElementById("audioElement");
    audio.play();
    audio.loop = true;
  };

  // Real-Time Clock Update
  updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    if (
      this.state.h === hours &&
      this.state.m === minutes &&
      this.state.s === seconds
    ) {
      this.playSong();
      const button = document.querySelector('.audioControls button');

      // Set the display of the button to block
      if (button) {
        button.style.display = 'block';
      }
    }
  };

  // Start the interval when the component renders
  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

  formatTime = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  render() {
    return (
      <div className="container">
        <div className="timer">
          <h1>
            ALARM {this.formatTime(this.state.h)}:{this.formatTime(this.state.m)}:{this.formatTime(this.state.s)}
          </h1>
        </div>

        <div className="btns">
          <button onClick={this.hour}>HOUR</button>
          <button onClick={this.minute}>MINUTE</button>
          <button onClick={this.second}>SECOND</button>
        </div>

        <div className="audioControls">
          <audio
            id="audioElement"
            src="/pushpa.mp3"
          />
          <button id="btnAlaram" onClick={this.stopSong}>STOP ALARM</button>
        </div>
      </div>
    );
  }
}

export default Example;
