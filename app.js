const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
// const { MongoMemoryServer } = require('mongodb-memory-server-core'
require('dotenv').config();

const housesRoutes = require('./routes/housesRoutes')
const usersRoutes = require('./routes/usersRoutes')
const himagesRoutes = require('./routes/himagesRoutes')
const homeSettingRoutes = require('./routes/PagesRoutes/homeSettingRouter')
// const galleryRoutes = require('./routes/PagesRoutes/galleryRoute')
const ourClientRoutes = require('./routes/PagesRoutes/ourClientRoute')
// const aboutRoutes = require('./routes/PagesRoutes/aboutRoute')
// const contactRoutes = require('./routes/PagesRoutes/contactRout')
const servicesRoutes = require('./routes/PagesRoutes/ourServicesRoute')


const app = express()

app.use(express.json())
// app.use(cors({origin:['http://localhost:5173/']}));

const Port = process.env.PORT
  app.listen(Port);
  // console.log("welocme",Port);


  
mongoose.set('strictQuery', false)
// mongoose.connect('mongodb://127.0.0.1:27017/BetaHouse')
mongoose.connect('mongodb+srv://generator:HkAXEuNAexSC358T@cluster0.fonguby.mongodb.net/invoicegenerator')
  .then(() => console.log('Connected!'));

  app.get('/',(req, res) => {
    res.send("wuu tijaaboo")
  })
app.use('/houses', housesRoutes)
app.use('/users', usersRoutes)
app.use('/himages', himagesRoutes)
app.use('/homesetting', homeSettingRoutes)
// app.use('/gallery', galleryRoutes)
app.use('/ourclient', ourClientRoutes)
// app.use('/about', aboutRoutes)
// app.use('/contact', contactRoutes)
app.use('/services', servicesRoutes)


  
// const connectiondb = async () => {
//   const createServer = await MongoMemoryServer.create()
//   await mongoose.connect(createServer.getUri(), { dbName: 'Betahouse' })
//     .then(() => console.log('Connected!')).catch((err) => {
//       console.log(err)
//     }
//     )
// }
// connectiondb()

module.exports = app
