
import './App.css';
import PropTypes from 'prop-types'

import { Navbar } from "./myComponents/Navbar";
import { TextForm } from './myComponents/TextForm';
import About from './myComponents/About';
import Alert from './myComponents/Alert';
import React, { useState } from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  // let name = "Jaggi";
  // let num = 78/4;



  // For setting the darkmode
  const [mode, setMode] = useState('light');



  //For setting the alerts
  const [alert, setAlert] = useState(null);



  //Function to show the alerts
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const togleDark = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';

      //Showing the alert
      showAlert("Dark mode has been enables", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }





  //Toggle blue mode
  const togleBlue = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0000FF';

      //Showing the alert
      showAlert("Blue mode has been enables", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (



    <Router>
    <>




      <Navbar title="Dgitools" aboutText="About Us" switchMode={mode} toggleDark={togleDark} toggleBlue={togleBlue} />
      <Alert alert={alert} switchMode={mode} />
     




      <Routes>
        <Route path='/' element={ <TextForm heading="Case Converters" switchMode={mode} showAlert={showAlert} /> }>

        </Route>
        <Route path='/about' element={<About mode ={mode} />}>
        </Route>

      </Routes>





    </>

    </Router>
  );
}

export default App;




//component name first
Navbar.propTypes = {
  title: PropTypes.string,

}