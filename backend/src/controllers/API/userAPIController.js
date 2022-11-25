const { validationResult } = require('express-validator')
const User = require('../../models/User')
const bcryptjs = require('bcryptjs')

module.exports = {
  index: (req, res) => {
    res.send('User index')
  },
  register: (req, res) => {
    let errors = validationResult(req)
    let response
    if (!errors.isEmpty()) {
      response = {
        errors: errors.mapped(),
      }
    } else {
      let hashedPwd = bcryptjs.hashSync(req.body.password, 10)
      let newUser = {
        ...req.body,
        password: hashedPwd,
        rePassword: undefined
      }
      let modelReponse = User.create(newUser)
      if (modelReponse.status === 0) {
        response = {
          msg: 'success',
        }
      } else {
        response = {
          msg: 'fail',
        }
      }
    }
    return res.json(response)
  },
  
}