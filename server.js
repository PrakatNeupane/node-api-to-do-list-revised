import express from "express"
const app = express()
const PORT = 8000


// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// load routers
import taskRouter from './src/routers/taskRouter.js'

// app.get('/', (req, res) => {
//     // res.send('<h1> Hello there </h1>')
//     const person = {
//         sd: 'sdf',
//         sdf: 'sdfdsf'
//     }
//     res.json(person)
// })

// task api note; app.use is a middleware, cna use for get and post
app.use('/api/v1/task', taskRouter)


// mongo connection
import mongoClient from './src/config/db.js'
mongoClient()

app.listen(PORT, error => {
    if (error) {
        console.log(error)
    }
    console.log(`Your server is running at http://localhost:${PORT}`)
})