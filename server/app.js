const express = require('express')
const app = express()
const cors = require('cors');
let data = require("./data");

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/search", (req, res) => {
    res.send(data);
  })

  app.get('/search/:id', (req, res) => {

    const id = req.params.id;
  
    const filteredData = data.filter(f => f["id"] == id);
  
    if(filteredData.length == 1) {
        res.json({
          player: filteredData[0]
        })
    } else {
        res.status(404).json({
            error: "No such player"
        })
    }
  });

  module.exports = app;
