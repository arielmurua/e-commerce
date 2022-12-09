const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const mainRouter = require('./router/main')
app.use('/', mainRouter)
const mainRouterAPI = require('./router/API/mainAPI')
app.use('/api/main', mainRouterAPI)
const userRouterAPI = require('./router/API/userAPI')
app.use('/api/user', userRouterAPI)

app.listen(port, () => {
  console.log(`Server running\nPort: ${port}`)
})

