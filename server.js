const express = require('express')
const router = require('./routers/routes')

const app = express()
// const cors = require("cors");
const  port = 3001

const appRouter = require('./routers/routes')
app.use(appRouter)

app.get('/', (req, res) => {
    res.send("welcome to doctor-patient api")
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`)
});