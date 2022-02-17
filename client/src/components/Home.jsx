import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button>Add Product</button>
      <button>View Product</button>
    </div>
  )
}

export default Home
