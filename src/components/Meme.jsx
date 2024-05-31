import React from "react"

/**
 * Meme component allows users to create memes by adding custom text to random images.
 * The component fetches images from the Imgflip API and allows users to change the image
 * and add top and bottom text to the image.
 */
export default function Meme() {
    /**
     * meme data state store.
     */
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        /**
         * This is a default image, it is loaded in every visit, or
         * when the page is refreshed.
         */
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    /**
     * State store for all memes fetched from the API.
     */
    const [allMemes, setAllMemes] = React.useState([])

    /**
     * fetch meme data from the imgflip API on component mount with the
     * use of, useEffect hook.
     */
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },
    
    /**
     * empty dependancy array to ensure that this run only once.
     */
    [])

    /**
     * function to get a new meme image URL from the fetched memes and update the state.
     */
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ... prevMeme,
            randomImage: url
        }))
    }

    /**
     * function to update the meme text when the user types in the input fields.
     * @param {Object} event 
     */
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
        <input type="text" placeholder="Top Text" className="form--input" name="topText" value={meme.topText} onChange={handleChange} />
        <input id="bottom-text" type="text" placeholder="Bottom Text" className="form--input" name="bottomText" value={meme.bottomText} onChange={handleChange} />
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
