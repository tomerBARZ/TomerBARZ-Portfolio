import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { OrbitSpace } from 'orbit-space'
import { Typewriter } from 'react-simple-typewriter'
import Vignette from './components/vignette'
import HorizontalLine from './components/horizontalLine'
import './App.css'
import SectionDiv from './components/sectionDiv'
import LargeButton from './components/largeButton'


function App() {
  const [letterCounter, setLetterCounter] = useState(0);
  const [enableScroll, setEnableScroll] = useState(false);

  useEffect(() => {
    if (letterCounter >= 14) {
      const timer = setTimeout(() => {
        setEnableScroll(true);
      }, 5800);

      return () => clearTimeout(timer);
    } else {
      setEnableScroll(false);
    }
  }, [letterCounter]);

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
          <div style={{ overflowY: "auto", width: "100%", height: "75vh", marginTop: "3vh", overflowY: enableScroll ? 'auto' : 'hidden' }}>
            <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={1800}> {/*GAME AND GRAPHICS*/}
              <LargeButton> {/*BLOOM*/}
                <img src='bloom.png'></img>
              </LargeButton>
              <LargeButton>{/*COPY PASTE*/}
              </LargeButton>
              <LargeButton> {/*DUNGEON GAME*/}
              </LargeButton>
              <LargeButton> {/*UNREAL GRAPPLER*/}
              </LargeButton>
            </SectionDiv>
            <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={2800}> {/*WEB DEV*/}
              <LargeButton> {/*POINTS*/}
              </LargeButton>
              <LargeButton> {/*PRACTICAL MEDIA*/}
              </LargeButton>
              <LargeButton> {/*ACES*/}
              </LargeButton>
            </SectionDiv>
            <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={3800}> {/*VISION*/}
              <LargeButton> {/*AUTO ALIGN TOOL*/}
              </LargeButton>
              <LargeButton> {/*SkyVision*/}
              </LargeButton>
              <LargeButton> {/*Antivision*/}
              </LargeButton>
            </SectionDiv>
            <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={4800}> {/*CONTROL AND SIMULATIONS*/}
              <LargeButton> {/*CRESCENDO MPC*/}
              </LargeButton>
              <LargeButton> {/*CHARGED UP VISUALIZER*/}
              </LargeButton>
              <LargeButton>{/*4416 AUTO*/}
              </LargeButton> 
            </SectionDiv>
          </div>
        </div>
      </div>
      <label className='glow' style={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center", zIndex:"999", position:"relative" }}>Call me +972-528408878  (｡•̀ᴗ-)✧</label>
    </>
  )
}

export default App
