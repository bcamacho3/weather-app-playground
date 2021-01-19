const path = require('path')
const express = require('express')



const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()

app.use(express.static(publicDirectoryPath)) //look up use in express docs

//root url
// app.get('', (req, res) => {
//     res.send("hello express!")
// })

// app.get('/help', (req, res) =>{
//     res.send({
//         name: 'bryan',
//         age: 32
//     })
// })

// app.get('/about', (req, res) =>{
//     res.send('About page')
// })
//weather route
app.get('/weather', (req, res) =>{
    res.send('Weather page')
})

//app.com
//app.com/help
//app.com/about


app.listen(3000, () => {
    console.log('Server is up on port 3000')
}) //using developer port