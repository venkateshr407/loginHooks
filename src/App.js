import './App.css';
import React, {useState} from 'react'
import Login from './Components/Login';
import FormSucces from './FormSucces';



function App() {
  const [isSubmitted, setSubmitted] = useState(false);

  function submitForm(){
    setSubmitted(true)
  }
  return (
    <>
      {!isSubmitted ?<Login submitForm=
        {submitForm}/> : (<FormSucces/>)}
    </>
  );
}

export default App;
