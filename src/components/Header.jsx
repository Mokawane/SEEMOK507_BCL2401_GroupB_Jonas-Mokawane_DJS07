import React from "react"

/**
 * Header component for the Meme Generator application.
 * Displays the application's logo, title, and project information.
 */
export default function Header() {
    return (
        <header className="header">
            <img src="troll-face.png" alt="troll face meme" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project - DJS07</h4>
        </header>
    )
}