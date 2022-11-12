const express = require('express')
const app = express()
const port = 3000



app.listen(process.env.PORT || port, (err) => {
    if(err){
        console.log(`Error: ${err}`)     
    }

   console.log(`Example app listening on port ${port}`)
})