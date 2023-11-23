const express = require('express')
const { register, login, changePassword, sendMail, resetPassword, get } = require('../controllers/userController')
const { checkUserAuth } = require('../middleware/middleware')

const userRouter = express.Router()
userRouter.get('/resetemailsend/:id/:token', get)
userRouter.use("/changePassword/:id", checkUserAuth)
userRouter.patch('/changePassword/:id', changePassword)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/resetpassword/:id/:token', resetPassword)
userRouter.post('/resetemailsend', sendMail)
module.exports = userRouter
