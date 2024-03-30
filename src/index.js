import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";
import TextExpander from "./TextExpander";
import { useState } from "react";

function ShowRating() {
  const [rating, setRating] = useState(0);
  const maxRating = 6;

  return (
    <div>
      <StarRating
        color="black"
        size={20}
        maxRating={maxRating}
        onSetRating={setRating}
      />
      <p>
        You rated this movie {rating} out of {maxRating} stars.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Meh", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} />
    <StarRating maxRating={8} color="#1db954" size={40} defaultRating={3} />

    <ShowRating /> */}
    <TextExpander
      numWords={15}
      expandText="Expand"
      shrinkText="Show Less"
      text="Lana del Rey is my favourite artist. She is going to release her tenth studio album in 2024."
    />
  </React.StrictMode>
);
