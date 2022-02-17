import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }
  var history = useHistory()
  const handleLogin = () => {
    // console.log('The user is', user)
    axios
      .post('http://localhost:3333/login', user)
      .then((res) => {
        history.push('./')
        console.log('Done post,user', user)
        alert(res.data.message)
      })
      .catch((err) => {
        alert('Invalid Credentials')
        console.log('The error is', err)
      })
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
      </form>
      <button onClick={handleLogin}>Submit</button>
      <button>Register</button>
    </div>
  )
}

export default Login
