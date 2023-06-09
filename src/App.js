import React , {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

  const [color, setcolor] = useState('white');

  const showAlert = (message, type) => {

    setalert({
      msg: message,
      type: type,
    })
    
    if(type==="warning"){
      setTimeout(() => {
        setalert(null);
        },3000)
    }
    else{
      setTimeout(() => {
        setalert(null);
      },1500)
    }
      
  }

  const setBg = (color) => {
      document.body.style.backgroundColor = color;
      setcolor(color)
      showAlert("To reset Enable or Diabled Dark mode", "warning")

  
  }

  const toggleMode = () => {
    if(mode==="light"){
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      setcolor('black')
      showAlert("Dark Mode is Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      setcolor('white')
      showAlert("Dark Mode is Diabled", "success")
    }
  }

  return (
    <>
      <Navbar title = 'EEBER' mode={mode} toggleMode={toggleMode} setBg={setBg}/>
      <div className="container my-2" style={{height: 60}}>
        <Alert alert={alert} />
      </div>
      
        <Routes>
            <Route path="/EEBER-Text-Case-Converter/about/" element ={ <About mode={mode} color={color}/> }/>
            <Route path="/EEBER-Text-Case-Converter/" element ={ <Form heading = 'Try EEBER - Text Case Converter - word count, character count, etc' mode={mode} alert={showAlert} /> }/>
        </Routes>
      
      

    </>
  );
}

export default App;
