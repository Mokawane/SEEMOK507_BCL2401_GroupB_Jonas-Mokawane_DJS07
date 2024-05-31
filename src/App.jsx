import { } from 'react'
import './App.css'
import Header from '../src/components/Header'
import Meme from '../src/components/Meme'

/**
 * App component is the root component of the Meme Generator application.
 * It renders the Header and Meme components.
 */
export default function App() {
  
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

