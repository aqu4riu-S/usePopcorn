import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";
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
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Meh", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} />
    <StarRating maxRating={8} color="#1db954" size={40} defaultRating={3} />

    <ShowRating />
  </React.StrictMode>
);
