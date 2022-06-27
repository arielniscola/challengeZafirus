const express = require('express');
const app = express();
const PORT = process.env.port || 3800;
const routes = require('./routes/index');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:fernando362191629@cluster0.z1fv8.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
  console.log("La conexión a la DB se ha realizado correctamente")
  //Crear servidor
  app.listen(PORT,  () => {
    console.log(`Server running port: ${PORT}`);
});

}).catch(err=>console.log(err));