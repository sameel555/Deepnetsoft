const { response } = require('express')
const express = require('express')
const bcrypt = require('bcrypt')
const Register = require('../models/register.model')
const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const user = request.body
    let isExist = false
    const check = await Register.find().lean().exec()
    check.forEach((el) => {
      if (user.email == el.email) isExist = true
    })
    if (isExist) {
      request.flash('message', 'User already exist')
      return response.redirect('/register')
    } else {
      const data = await Register.create(request.body)
      console.log('The data is ', data)
      return response.status(200).send(data)
    }
  } catch (err) {
    console.log('Error')
    return response.status(400).send(err.message)
  }
})

module.exports = router
