module.exports = {

    addMovie: (req, res) => {
        //bring in what you need for the function
        const {movieName} = req.body;

        //get the database
        const db = req.app.get('db');

        //run your sql query
        db.add_movie(movieName)    //here we are referencing the db folder, add_movie file.
        .then(movie => res.status(200).send(movie))
        .catch(error => res.status(500).send(error));
    },

    getMovies: (req, res) => {
        const db = req.app.get('db');

        db.get_movies()
        .then(movies => res.status(200).send(movies))
        .catch(error => res.status(500).send(error));
    },

    updateMovie: (req, res) => {
        const {id} = req.params;
        const {movieName} = req.body;
        const db = req.app.get('db');

        db.update_movie(movieName, id)
        .then(() => res.status(200))
        .catch(err => res.status(500).send(err));
    },

    deleteMovie: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.delete_movie(id)
        .then(() => status(200))
        .catch(error => res.status(500).send(error));
    }
}