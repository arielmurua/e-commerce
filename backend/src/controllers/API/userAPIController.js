const { validationResult } = require('express-validator')

module.exports = {
  index: (req, res) => {
    res.send('User index')
  },
  register: (req, res) => {
    let errors = validationResult(req)
    let data
    if (!errors.isEmpty()) {
      data = {
        errors: errors.mapped(),
      }
    } else {
      data = {
        data: {...req.body}
      }
    }
    return res.send(data)
  }
}