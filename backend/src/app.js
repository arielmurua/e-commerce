const express = require('express');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const mainRouterAPI = require('./router/API/mainAPI')
app.use('/api/main', mainRouterAPI)

app.listen(port, () => {
  console.log(`Server running\nPort: ${port}`)
})

