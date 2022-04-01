import { Button, TextField } from '@material-ui/core'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'



const Home = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  function handleClick() {
    if (!name) {
      setErrorMessage("Please enter your Full name first!")
    }
    else {
      navigate("/quiz")
    }

  }

  return (

    <div className='contents'>

      <h1>Join  Quiz </h1>
      <h2>Let's Play!</h2>
      <h5>Play now & Level up</h5> <br />
      <div className='error'> {errorMessage}</div>

      <div className='settings'>

        <TextField className="textfield"
          fullWidth label="Your Full Name" required value={name} onChange={(e) => { setName(e.target.value)(setErrorMessage("")) }} />
        <br />
        <br />

        <Button onClick={handleClick}>Start Quiz</Button>







      </div>
    </div>

  )
}


export default Home

