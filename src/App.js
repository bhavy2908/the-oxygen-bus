import './App.css';
import React, { Component, useState, useEffect } from 'react';
import GoogleMap from './GoogleMap';
import LeftDiv from './leftDiv';
import MyModal from './modal';




class App extends Component {
  state = {
    num1: 6,
    num2: 10,
    num3: 4,
    num4: 10,
    num5: 20,
    num6: 0,
    bool: false
  }
  refreshPage = () => {
    window.location.reload();
  }

  handleInc1 = () => {
    const temp = this.state.num1;
    this.setState({
      num1: temp + 1
    });
    if (this.state.num1 > 8) {
      this.setState({
        num1: 9
      })
    }
  };
  handleInc2 = () => {
    const temp = this.state.num2;
    this.setState({
      num2: temp + 1
    });
    if (this.state.num2 > 98) {
      this.setState({
        num2: 99
      })
    }
  };
  handleInc3 = () => {
    const temp3 = this.state.num3;
    this.setState({
      num3: temp3 + 1
    });
    if (this.state.num3 > 8) {
      this.setState({
        num3: 9
      })
    }
  };
  handleInc4 = () => {
    const temp = this.state.num4;
    this.setState({
      num4: temp + 1
    });
    if (this.state.num4 > 98) {
      this.setState({
        num4: 99
      })
    }
  };
  handleInc5 = () => {
    const temp = this.state.num5;
    this.setState({
      num5: temp + 1
    });
    if (this.state.num5 > 98) {
      this.setState({
        num5: 99
      })
    }
  };
  handleDec1 = () => {
    const temp11 = this.state.num1;
    this.setState({
      num1: temp11 - 1
    });
    if (this.state.num1 < 1) {
      this.setState({
        num1: 0
      })
    }
  };
  handleDec2 = () => {
    const temp11 = this.state.num2;
    this.setState({
      num2: temp11 - 1
    });
    if (this.state.num2 < 1) {
      this.setState({
        num2: 0
      })
    }
  };
  handleDec3 = () => {
    const temp33 = this.state.num3;
    this.setState({
      num3: temp33 - 1
    });
    if (this.state.num3 < 1) {
      this.setState({
        num3: 0
      })
    }
  };
  handleDec4 = () => {
    const temp11 = this.state.num4;
    this.setState({
      num4: temp11 - 1
    });
    if (this.state.num4 < 1) {
      this.setState({
        num4: 0
      })
    }
  };
  handleDec5 = () => {
    const temp11 = this.state.num5;
    this.setState({
      num5: temp11 - 1
    });
    if (this.state.num5 < 1) {
      this.setState({
        num5: 0
      })
    }
  };


  results = () => {
    if ((this.state.num1 * this.state.num2) > (this.state.num3 * this.state.num4) + this.state.num5) {
      this.setState({
        bool: true
      });
    }
    else {

      this.setState({
        num6: this.state.num3 + this.state.num1
      });
    }
    console.log("bool : " + this.state.bool)
  };

  revertBool = () => {
    this.setState({
      bool: false
    });
  }


  render() {



    return (

      <React.Fragment>
        <MyModal bool={this.state.bool} rb={this.revertBool} />
        <div>
          <style dangerouslySetInnerHTML={{ __html: "\n    #map {\n      height: 100%;\n    }\n  " }} />
          <nav className="navbar navbar-light" style={{ backgroundColor: 'white', paddingLeft: '50px' }}>
            <div className="container-fluid mr-auto">
              <a className="navbar-brand" href="#">
                <img src="./logo.jpg" alt="" width={130} className="d-inline-block align-text-top" />
                <img src="./logo.gif" alt="" width={120} className="d-inline-block align-text-top" />
              </a>
              <ul style={{ marginBottom: '0px', marginTop: 'auto' }}>
                <li onClick={this.refreshPage} className="hbtn hb-fill-middle2-bg" style={{ marginRight: '10px', fontWeight: 'bolder' }}>Reset Markers</li>
                <li href="https://github.com/bhavy2908/the-oxygen-bus" target="blank
                  " className="hbtn hb-fill-middle2-bg" style={{ fontWeight: 'bolder', marginRight: '10px' }}>View Code</li>
              </ul>
            </div>
          </nav>
          <LeftDiv num1={this.state.num1} num2={this.state.num2} num3={this.state.num3} num4={this.state.num4} num5={this.state.num5} num6={this.state.num6} handleInc1={this.handleInc1} handleInc2={this.handleInc2} handleInc3={this.handleInc3} handleInc4={this.handleInc4} handleInc5={this.handleInc5} handleDec1={this.handleDec1} handleDec2={this.handleDec2} handleDec3={this.handleDec3} handleDec3={this.handleDec3} handleDec4={this.handleDec4} handleDec5={this.handleDec5} results={this.results} />
          <div style={{ float: 'right', width: '79.75%', height: '90vh', marginTop: '5px' }}>
            <GoogleMap style={{ width: '79.75%' }} num1={this.state.num1} num2={this.state.num2} num3={this.state.num3} num4={this.state.num4} num5={this.state.num5} num6={this.state.num6} />
          </div>




        </div>
      </React.Fragment >
    );
  }
}



export default App;
