const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const xlsx = require('node-xlsx')
const multer  = require('multer')

const util = require('./util')


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const upload = multer({dest: 'uploads/'})

app.post('/api/updatedb', upload.single('db'), (req, res, next) => {
  console.log(req.file)
  let sheet = xlsx.parse(req.file.path)
  console.log(sheet[0])
  util.updatedb(sheet[0], (ok) => {
    if (ok == 'ok') {
      res.send(sheet)
    }
  })
})

app.post('/api/classify', upload.single('classify'), (req, res, next) => {
  console.log(req.file)
  // console.log(req.files[0].buffer)
  let sheet = xlsx.parse(req.file.path)
  console.log(sheet[0])
  let data = util.classify(sheet[0], (ok) => {

  })
  console.log('data: ', data)
  res.send(data)
})

app.listen(process.env.PORT || 8080)
