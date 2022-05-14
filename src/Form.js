import React, { useState } from "react";

export default function Form(props) {
  const [movieTitle, setMovieTitle] = useState("");

  function handleChange(e) {
    setMovieTitle(e.target.value);
    // console.log(movieTitle);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    props.handleSubmit(movieTitle);
  }

  return (
    <>
      <h1>Search Movies</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="movieTitle"
          placeholder="Movie Title"
          value={movieTitle}
          //to be able to type:
          onChange={handleChange}
        />
        <button> Search Movie </button>
      </form>
    </>
  );
}