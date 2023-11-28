const express = require('express')
const { register, login, changePassword, sendMail, resetPassword, getResetPassword } = require('../controllers/userController')
const { checkUserAuth } = require('../middleware/middleware')

const userRouter = express.Router()
userRouter.get('/resetpassword/:id/:token', getResetPassword)
userRouter.use("/changePassword/:id", checkUserAuth)
userRouter.patch('/changePassword/:id', changePassword)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/resetpassword/:id/:token', resetPassword)
userRouter.post('/resetemailsend', sendMail)
module.exports = userRouter
