var movies = [
{
  name: "La La Land",
  watched: true,
  rating: 4.2
},
{
  name: "Dunkrik",
  watched: true,
  rating: 4.5
},
{
  name: "Darkest Hour",
  watched: false,
  rating: 4
},
{
  name: "Inception",
  watched: true,
  rating: 4.7
},
{
  name: "Interstellar",
  watched: true,
  rating: 4.6
}
];

function movieDB(){
  movies.forEach(function(movie){
    if(movie.watched){
      console.log("You have watched \""+movie.name+"\" - "+movie.rating+" stars");
    }
    else
      console.log("You have not seen \""+movie.name+"\" - "+movie.rating+" stars");
  });
}