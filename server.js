const express = require('express')
const app = express()
const {resolve} = require('path')


const port = 3000


app.use('/',
    express.static(
        resolve(__dirname, './build')
    )
)

app.listen(process.env.PORT || port, (err) => {
    if(err){
        console.log(`Error: ${err}`)     
    }

   console.log(`Precatorio app listening on port ${port}`)
})
