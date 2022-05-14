import React, { useEffect, useState } from "react";
import "./index.css";
import Form from "./Form";
import MovieData from "./MovieData";

export default function App() {
  const [movieData, setMovieData] = useState({});
  const [movieTitle, setMovieTitle] = useState("");
  //make our api call in our container component
  //bc the response to the api call will have the data we are looking for
  //for the movie, so now when we get the data we can pass sit to the moviedata
  //component whose job is to render it

  useEffect(() => {
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=532992ff`; //replace starwars with ${movieTitle}
    //to get more movie titles
    function makeApiCall() {
      fetch(movieUrl)
        .then((res) => res.json()) //this changes the reponse from JSON into a js object
        .then((data) => {
          console.log(data);
          setMovieData(data);
        });
    }
    makeApiCall();
  }, [movieTitle]);

  function handleSubmit(movieTitle) {
    setMovieTitle(movieTitle);
    console.log(movieTitle, "app component movieTitle from handleSubmit");
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Form handleSubmit={handleSubmit} />
      <MovieData data={movieData} />
    </div>
  );
}
//pass down data to movie data
