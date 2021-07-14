import React, { useState } from "react";
import "./styles.css";

var color = "blue";
var border = "2px solid black";
var color1 = "";
const nickName = {
  "☺️": "Smiling Face",
  "💕": "Two Hearts",
  "💘": "Heart with Arrow",
  "👊": " Oncoming Fist",
  "😍": "Smiling Face with Heart-Eyes"
};
var emojiWeknow = Object.keys(nickName);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function nickNameHandler(event) {
    var userInput = event.target.value;
    var meaning = nickName[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our DB";
    }
    setMeaning(meaning);
  }
  function emojiHandler(emoji) {
    var meaning = nickName[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2>
        <span
          style={{
            color: color1,
            borderRadius: "6px",
            border,
            padding: "0.5rem"
          }}
        >
          Funny game
        </span>
      </h2>
      <input style={{ border: border }} onChange={nickNameHandler} />
      <h2>
        <span style={{ color: color }}> {meaning} </span>
      </h2>
      <h3>emojis we have</h3>
      {emojiWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
