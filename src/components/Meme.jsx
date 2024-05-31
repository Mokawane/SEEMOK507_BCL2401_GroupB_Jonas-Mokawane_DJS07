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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }    

  return (
    <main>
      <div className="form">
        <label> Top Text <br />
        <input id="top-text" type="text" placeholder="Shut up" className="form--input" name="topText" value={meme.topText} onChange={handleChange} /></label>
        <label> Bottom Text <br />
        <input id="bottom-text" type="text" placeholder="and take my money" className="form--input" name="bottomText" value={meme.bottomText} onChange={handleChange} /></label>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
