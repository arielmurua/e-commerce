const path = require('path')
const { body } = require('express-validator')

module.exports = [
  body('username')
    .notEmpty().withMessage('username is empty'),
  body('email')
    .notEmpty().withMessage('email is empty')
    .isEmail().withMessage('email is invalid'),
  body('password')
    .isStrongPassword().withMessage('password is not secure'),
  body('rePassword')
    .notEmpty().withMessage('repeat password')
    .custom((value, { req }) => {
      let data = {...req.body}
      if (data.password !== data.rePassword) {
        throw new Error('passwords dont match')
      }
      return true;
    }),
  body('image')
    .custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".jpeg", ".gif", ".png"];
      if (file) {
        if (acceptedExtensions.includes(path.extname(file.originalname)) === false) {
          throw new Error(`Accepted file formats: ${acceptedExtensions.join(", ")}`);
        }
      }
      return true;
    }),
]