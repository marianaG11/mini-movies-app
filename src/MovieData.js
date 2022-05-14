import React from "react";

export default function MovieData({ data }) {
  return (
    <>
      <ul>
        <li>{data.Title}</li>
        <li>{data.Year}</li>
        <li>{data.Director}</li>
      </ul>
    </>
  );
}
