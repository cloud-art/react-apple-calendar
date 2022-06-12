const express = require('express')
const calendarRouter = require('./calendar.routes')

require("dotenv").config()

const app = express()
app.use(express.json())
app.use('/api', calendarRouter)

const PORT =  process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))