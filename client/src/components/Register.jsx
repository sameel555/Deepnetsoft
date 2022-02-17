import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [place, setPlace] = useState('')
  const [registered, setRegistered] = useState({
    name: '',
    email: '',
    password: '',
    place: '',
  })
  useEffect(() => {
    // console.log('UseEffect register is', registered)
    setRegistered({
      name: name,
      email: email,
      password: password,
      place: place,
    })
  }, [name, email, password, place])

  const handleName = (e) => {
    setName(e.target.value)
    setRegistered({ ...registered, name: name })
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setRegistered({ ...registered, email: email })
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setRegistered({ ...registered, password: password })
  }
  const handlePlace = (e) => {
    setPlace(e.target.value)
    setRegistered({ ...registered, place: place })
  }
  const handleRegister = (e) => {
    // console.log('The name is ', name)
    // e.preventDefault()
    setRegistered({
      name: name,
      email: email,
      password: password,
      place: place,
    })
    handleSubmit()
    // console.log('Data posted is', registered)

    // axios
    //   .post('http://localhost:3333/register', registered)
    //   .then((response) => console.log('Data posted is', response.data))
    //   .catch((err) => {
    //     console.log('The error is:', err)
    //   })
    // handleClear()
    // console.log('Data is', registered)
  }
  // console.log('Data posted is', registered)
  var history = useHistory()
  const handleSubmit = () => {
    //  console.log('The registration is not updating:', registered)
    axios
      .post('http://localhost:3333/register', registered)
      .then((response) => {
        console.log('Data posted is', response.data)
        handleClear()
        history.push('./')
      })
      .catch((err) => {
        alert('Email is already in use ')
        console.log('The error is ', err)
      })
    // handleClear()
  }
  const handleClear = () => {
    setName('')
    setEmail('')
    setPassword('')
    setPlace('')
    setRegistered({
      name: '',
      email: '',
      password: '',
      place: '',
    })
  }

  return (
    <div>
      <h1>Registration</h1>
      <form action="/register" method="post">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={handleName}
          value={name}
        />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={handleEmail}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handlePassword}
          value={password}
        />
        <input
          type="text"
          placeholder="Enter Place"
          onChange={handlePlace}
          value={place}
        />
      </form>
      <button onClick={handleRegister}>Submit</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Register
