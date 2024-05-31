import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url)
    }

  return (
    <main>
      <div className="form">
        <label> Top Text <br />
        <input id="top-text" type="text" placeholder="Shut up" className="form--input" /></label>
        <label> Bottom Text <br />
        <input id="bottom-text" type="text" placeholder="and take my money" className="form--input" /></label>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
