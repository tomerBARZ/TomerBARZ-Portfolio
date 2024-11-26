import { useState, useEffect } from 'react'
import { OrbitSpace } from 'orbit-space'
import { Typewriter } from 'react-simple-typewriter'
import Vignette from './components/vignette'
import HorizontalLine from './components/horizontalLine'
import './App.css'
import SectionDiv from './components/sectionDiv'
import LargeButton from './components/largeButton'
import BloomPage from './pages/bloomPage'
import CopyPastePage from './pages/copyPastePage'
import DungeonGamePage from './pages/dungeonGame'
import GrapplingHookPage from './pages/grapplingHookPage'
import PointsPage from './pages/pointsPage'
import PracticalMediaPage from './pages/practicalmediaPage'
import AcesPage from './pages/acesPage'
import AutoAlignPage from './pages/autoAlignPage'
import SkyvisionPage from './pages/skyvisionPage'
import AntivisionPage from './pages/antivisionPage'
import MPCPage from './pages/mpcPage'
import VisualizerPage from './pages/visualizerPage'
import SkynetPage from './pages/skynetPage'


function App() {
  const [letterCounter, setLetterCounter] = useState(0);
  const [enableScroll, setEnableScroll] = useState(false);
  const [CurrPage, setCurrPage] = useState(undefined);
  const [loadQuick, setLoadQuick] = useState(false);

  useEffect(() => {
    if (letterCounter >= 14) {
      const timer = setTimeout(() => {
        setEnableScroll(true);
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setEnableScroll(false);
    }
  }, [letterCounter, CurrPage]);

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
          {CurrPage ?
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              {CurrPage}
              <button onClick={() => { setCurrPage(undefined); setLoadQuick(true); }} style={{ color: "white", backgroundColor: "transparent", border: "1px solid white", width: "10vw" }}>
                ⇐ Return Home
              </button>
            </div> :
            <div style={{ overflowY: "auto", width: "100%", height: "75vh", marginTop: "3vh", overflowY: enableScroll ? 'auto' : 'hidden' }}>
              <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={loadQuick ? 0 : 1800} title='- GAMES AND GRAPHICS -'> {/*GAME AND GRAPHICS*/}
                <LargeButton onClick={() => { setCurrPage(<BloomPage />) }} startColor='#590d22' endColor='#a4133c'> {/*BLOOM*/}
                  <img src='bloom_button.png'></img>
                </LargeButton >
                <LargeButton onClick={() => { setCurrPage(<CopyPastePage />) }} startColor='#a4133c' endColor='#ff4d6d'>{/*COPY PASTE*/}
                  <img src='copy_paste_button.png'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<DungeonGamePage />) }} startColor='#ff4d6d' endColor='#ff8fa3'> {/*DUNGEON GAME*/}
                  <img src='dungeon_game_button.png'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<GrapplingHookPage />) }} startColor='#ff8fa3' endColor='#ffb3c1'> {/*UNREAL GRAPPLER*/}
                  <img src='unreal_button.png'></img>
                </LargeButton>
              </SectionDiv>
              <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={loadQuick ? 0 : 2400} title='- WEB DEVELOPMENT -'> {/*WEB DEV*/}
                <LargeButton onClick={() => { setCurrPage(<AcesPage />) }} startColor='#f7b267' endColor='#f4845f'> {/*ACES*/}
                  <img src='acesonline_button.png'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<PointsPage />) }} startColor='#f4845f' endColor='#f27059'> {/*POINTS*/}
                  <img src='practicalanalytics_button.png'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<PracticalMediaPage />) }} startColor='#f27059' endColor='#f25c54'> {/*PRACTICAL MEDIA*/}
                  <img src='practicalmedia_button.png'></img>
                </LargeButton>
              </SectionDiv>
              <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={loadQuick ? 0 : 3200} title='- VISION AND IMAGE PROCESSING -'> {/*VISION*/}
                <LargeButton onClick={() => { setCurrPage(<AutoAlignPage />) }} startColor='#22577a' endColor='#38a3a5'> {/*AUTO ALIGN TOOL*/}
                  <img src='autoalign_button.png'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<SkyvisionPage />) }} startColor='#38a3a5' endColor='#57cc99'> {/*SkyVision*/}
                  <img src='skyvision_button.jpg'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<AntivisionPage />) }} startColor='#57cc99' endColor='#80ed99'> {/*Antivision*/}
                  <img src='antivision_button.jpg'></img>
                </LargeButton>
              </SectionDiv>
              <SectionDiv duration={'0.8s'} startAnimation={letterCounter >= 14} delayms={loadQuick ? 0 : 4000} title='- CONTROL AND SIMULATIONS -'> {/*CONTROL AND SIMULATIONS*/}
                <LargeButton onClick={() => { setCurrPage(<MPCPage />) }} startColor='#f72585' endColor='#7209b7'> {/*CRESCENDO MPC*/}
                  <img src='mpc_button.png'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<VisualizerPage />) }} startColor='#7209b7' endColor='#3a0ca3'> {/*CHARGED UP VISUALIZER*/}
                  <img src='visualizer_button.png'></img>
                </LargeButton>
                <LargeButton onClick={() => { setCurrPage(<SkynetPage />) }} startColor='#3a0ca3' endColor='#4361ee'>{/*4416 AUTO*/}
                  <img src='skynet_button.png'></img>
                </LargeButton>
              </SectionDiv>
            </div>
          }
        </div>
      </div>
      <label className='glow' style={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center", zIndex: "999", position: "relative" }}>Call me +972-528408878  (｡•̀ᴗ-)✧</label>
    </>
  )
}

export default App
