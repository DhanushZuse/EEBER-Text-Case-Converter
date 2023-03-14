import React , {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';

function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

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

  const toggleMode = () => {
    if(mode==="light"){
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode is Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode is Diabled", "success")
    }
  }

  return (
    <>
      <Navbar title = 'EEBER' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Form heading = 'Box' mode={mode} alert={showAlert}/>
      {/*<About/>*/}

    </>
  );
}

export default App;
