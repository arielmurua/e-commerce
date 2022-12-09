const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const db = require('../../database/models')

module.exports = {
  index: (req, res) => {
    res.send('User index')
  },
  register: async (req, res) => {
    let errors = validationResult(req)
    let response
    if (!errors.isEmpty()) {
      response = {
        meta: { 
          status: 400,
          errors: errors.mapped() 
        },
      }
    } else {
      let formData = {...req.body}
      delete formData.rePassword
      let hashedPwd = bcryptjs.hashSync(formData.password, 10)
      let newUser 
      if (req.file) {
        newUser = {
          username: formData.username,
          email: formData.email,
          password: hashedPwd,
          avatar: req.file,
          role_id: 1,
        }
      } else {
        newUser = {
          username: formData.username,
          email: formData.email,
          password: hashedPwd,
          role_id: 1,
        }
      }
      let createdUser = await db.User.create({...newUser, raw: true})
      if (createdUser) {
        delete createdUser.dataValues.password
        delete createdUser.dataValues.id
        delete createdUser.dataValues.role_id
        response = {
          meta: {
            status: 200,
            msg: "success"
          },
          data: createdUser
        }
      } else {
        response = {
          meta: {
            status: 400,
            msg: "fail"
          },
          data: null
        }
      }
    return res.json(response)
    }
  },
  login: async (req, res) => {
    let errors = validationResult(req)
    let response
    if (!errors.isEmpty()) {
      response = {
        errors: errors.mapped(),
      }
    } else {
      let data = req.body
      let userFound = 
        await db.User.findOne({
          where: { email: data.emailUser }, 
          raw: true
        })
      if (!userFound) {
        userFound = 
          await db.User.findOne({
            where: { username: data.emailUser }, 
            raw: true 
          })
        if(!userFound) {
          response = {
            meta: {
              status: 400,
              msg: "user not found"
            }
          }
          return res.json(response)
        }
      }
      if(!bcryptjs.compareSync(data.password, userFound.password)) {
        response = {
          meta: {
            status: 400,
            msg: "incorrect password"
          }
        }
      } else {
        delete userFound.password
        response = {
          meta: {
            status: 200,
            msg: "user logged"
          },
          data: userFound
        }
      }
    }
    return res.json(response)
  }
}