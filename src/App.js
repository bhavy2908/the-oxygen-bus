import './App.css';
import { Component} from 'react';
import GoogleMap from './GoogleMap';
import LeftDiv from './leftDiv';



function App() {


  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n    #map {\n      height: 100%;\n    }\n  " }} />
      <nav className="navbar navbar-light" style={{ backgroundColor: 'white', paddingLeft: '50px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./logo.jpg" alt="" width={130} className="d-inline-block align-text-top" />
            <img src="./logo.gif" alt="" width={120} className="d-inline-block align-text-top" />
          </a><a>
          </a><a href="https://github.com/bhavy2908/the-oxygen-bus" target="blank
          " className="hbtn hb-fill-middle2-bg" style={{ fontWeight: 'bolder' }}>View Code</a>
        </div>
      </nav>
      <LeftDiv />
      <div style={{ float: 'right', width: '79.75%', height: '90vh', marginTop: '5px' }}>
        <GoogleMap style={{ width: '79.75%' }} />
      </div>

    </div>
  );
}


export default App;
