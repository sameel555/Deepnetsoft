const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const Signup = require('../models/register.model')
const Login = require('../models/login.model')
router.get('/login', async (req, res) => {
  try {
    return res.status(200).render('login', { message: req.flash('message') })
  } catch (err) {
    res.status(400).send(err.message)
  }
})

// router.get('/logout', async (req, res) => {
//   try {
//     const currentUser = await Login.find().lean().exec()
//     const userProduct = await Signup.findById(currentUser[0]._id)
//     let sum1 = 0

//     await Login.deleteMany()
//     let checkLogin1 = 'Please Login'
//     res.status(200).render('index', { checkLogin1, sum1 })
//   } catch (err) {
//     res.status(400).send(err.message)
//   }
// })

router.post('/', urlencodedParser, async (req, res) => {
  const { email, password } = req.body
  //console.log('The check is', email, password)
  Signup.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: 'Login Successfull', user: user })
      } else {
        res.send({ message: "Password didn't match" })
      }
    } else {
      res.send({ message: 'User not registered' })
    }
  })
})

module.exports = router
