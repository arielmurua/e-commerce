const path = require('path')
const { body } = require('express-validator')
const db = require('../database/models')

module.exports = [
  body('emailUser')
    .notEmpty().withMessage('type your username'),
  body('password')
    .notEmpty().withMessage('type your password')
]