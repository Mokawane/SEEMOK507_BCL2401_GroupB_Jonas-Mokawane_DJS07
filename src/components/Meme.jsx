import React from "react"
import memesData from "../memesData"

export default function Meme() {
    let url
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }

  return (
    <main>
        <p>{url}</p>
      <div className="form">
        <label> Top Text <br />
        <input id="top-text" type="text" placeholder="Shut up" className="form--input" /></label>
        <label> Bottom Text <br />
        <input id="bottom-text" type="text" placeholder="and take my money" className="form--input" /></label>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </div>
    </main>
  );
}
