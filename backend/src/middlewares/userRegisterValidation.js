const path = require('path')
const { body } = require('express-validator')

module.exports = [
  body('username')
    .notEmpty().withMessage('no puede estar vacio'),
  body('email')
    .notEmpty().withMessage('no puede estar vacio')
    .isEmail().withMessage('debe ser email'),
  body('password')
    .isStrongPassword().withMessage('contraseña no segura'),
  body('image')
    .custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".jpeg", ".gif", ".png"];
      if (file) {
        if (acceptedExtensions.includes(path.extname(file.originalname)) === false) {
          throw new Error(`Formatos válidos: ${acceptedExtensions.join(", ")}`);
        }
      }
      return true;
    }),
]