import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ... prevMeme,
            randomImage: url
        }))
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
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
