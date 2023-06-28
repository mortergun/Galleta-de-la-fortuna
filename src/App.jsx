import './App.css'
import Fortuna from './components/fortuna'
import phrases from './data/phrases.json'
import { useState } from 'react'
import Button from './components/button'

function App() {

  const [ index, setIndex ] = useState(0)

  const backgrounds = [ "/fondo1.jpg", "/fondo2.jpg", "/fondo3.jpg", "/fondo4.jpg" ]

  const randomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * 15);
    setIndex(randomIndex)
  }

  if (index >= 0 && index <= 4) {
    document.body.style = `background-image: url(${ backgrounds[0]})`
  } if (index >= 5 && index <= 8) {
    document.body.style = `background-image: url(${ backgrounds[1]})`
  } if (index >= 9 && index <= 12) {
    document.body.style = `background-image: url(${ backgrounds[2]})`
  } if (index >= 13 && index <= 15) {
    document.body.style = `background-image: url(${ backgrounds[3]})`
  }

  return (
    <>
      <Fortuna
        data={ phrases[ index ] }
      />
      <button onClick={randomPhrase} className='buttonCoockie'> <Button></Button> </button>
      
    </>
  )
}

export default App