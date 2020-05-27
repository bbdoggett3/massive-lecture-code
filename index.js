require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      crtl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,    //it needs the conenction string
    ssl: {rejectUnauthorized: false}        //and the secured socket layer
}).then(db => {
    app.set('db', db);
    console.log('db connected')

})

//endpoints
app.post('/api/movie', crtl.addMovie);
app.get('/api/movies', crtl.getMovies);
app.put('/api/movie/:id', crtl.updateMovie);
app.delete('/api.movie/:id', crtl.deleteMovie);

app.listen(port, () => console.log(`Server running on ${port}`));