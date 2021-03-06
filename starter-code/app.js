const express = require( "express" );

const app = express();

app.use( express.static( "public" ));


app.get( "/", ( request, response, next ) => {
    response.sendfile( __dirname + "/views/home-page.html" );
});

app.get( "/gallery", ( request, response, next ) => {
    response.sendfile( __dirname + "/views/gallery.html" );
});

app.get( "/about", ( request, response, next ) => {
    response.sendfile( __dirname + "/views/about.html" );
})

app.listen( 3000, () => {
    console.log( "server ready!" );
})