import './App.css';
import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import LeftDiv from './leftDiv';





class App extends Component {
  state = {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0,
  }
  refreshPage = () => {
    window.location.reload();
  }

  handleInc1 = () => {
    const temp = this.state.num1;
    this.setState({
      num1: temp + 1
    });
    if (this.state.num1 > 49) {
      this.setState({
        num1: 50
      })
    }
  };
  handleInc3 = () => {
    const temp3 = this.state.num3;
    this.setState({
      num3: temp3 + 1
    });
    if (this.state.num3 > 19) {
      this.setState({
        num3: 20
      })
    }
  };
  handleDec1 = () => {
    const temp11 = this.state.num1;
    this.setState({
      num1: temp11 - 1
    });
  };
  handleDec3 = () => {
    const temp33 = this.state.num3;
    this.setState({
      num3: temp33 - 1
    });
  };
  results = () => {
    console.log('yes')
    this.setState({
      num6: this.state.num3 + this.state.num1
    });
  };


  render() {
    return (
      <React.Fragment>
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
                  " className="hbtn hb-fill-middle2-bg" style={{ fontWeight: 'bolder' }}>View Code</li>
              </ul>
            </div>
          </nav>
          <LeftDiv num1={this.state.num1} num3={this.state.num3} num6={this.state.num6} handleInc1={this.handleInc1} handleInc3={this.handleInc3} handleDec1={this.handleDec1} handleDec3={this.handleDec3} results={this.results} />
          <div style={{ float: 'right', width: '79.75%', height: '90vh', marginTop: '5px' }}>
            <GoogleMap style={{ width: '79.75%' }} x={this.state.num1} y={this.state.num3} z={this.state.num6} />
          </div>

        </div>
      </React.Fragment >
    );
  }
}


export default App;
