import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { OrbitSpace } from 'orbit-space'
import { Typewriter } from 'react-simple-typewriter'
import Vignette from './components/vignette'
import HorizontalLine from './components/horizontalLine'
import './App.css'


function App() {
  const [letterCounter, setLetterCounter] = useState(0);
  const [count, setCount] = useState(0)

  return (
    <>
      <Vignette />
      <OrbitSpace />
      <div style={{ width: "50vw", height: "90vh", zIndex: 999, position: "relative", overflow: "hidden" }}>
        <div style={{ width: "100%", textAlign: "left" }}>
          <h1 style={{ fontSize: "8vh", marginBottom: "1vh", marginTop: "0vh" }} className="glow">
            <Typewriter
              words={['Tomer Barzilay']}
              loop={1}
              cursor={letterCounter < 14}
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onType={() => setLetterCounter((counter) => counter + 1)}
            />
          </h1>
          <HorizontalLine startAnimation={letterCounter >= 14} maxWidth="70%" height="4px" color="hsl(0, 100%, 97%)" duration="2s" />
          <div style={{ overflowY: "scroll", height:"75vh", marginTop:"3vh" }}>
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
            <label>line</label><br />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
