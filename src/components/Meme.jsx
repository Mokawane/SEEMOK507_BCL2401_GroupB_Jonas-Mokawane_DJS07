import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="form">
        <label> Top Text <br />
        <input id="top-text" type="text" placeholder="Shut up" className="form--input" /></label>
        <label> Bottom Text <br />
        <input id="bottom-text" type="text" placeholder="and take my money" className="form--input" /></label>
        <button className="form--button">Get a new meme image 🖼️</button>
      </form>
    </main>
  );
}
