import React , {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';

function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

  const toggleMode = () => {
    if(mode==="light"){
      setmode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title = 'EEBER' mode={mode} toggleMode={toggleMode}/>
      <Alert alert='This is alert' />
      <Form heading = 'Box' mode={mode}/>
      {/*<About/>*/}

    </>
  );
}

export default App;
