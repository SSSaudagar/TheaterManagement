var movieModel = require('../models/Movies');
exports.getMovieById=function(req,res){
    movieModel.findById(req.params.id,function(err,movie){
        if(err) res.send(err);
        res.render('filename',{
            title: "Movie Details",
            movie: movie
        });
    });
}
