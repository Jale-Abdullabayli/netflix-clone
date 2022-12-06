import './style.js';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { StyledApp } from "./style";
import { useState } from 'react';


function App() {
  const [youtubeShow, setYoutubeShow] = useState([0,0,0,0,0,0]);


  return (
    <StyledApp className="App">
      <Nav />
      <Banner setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow}/>
      <Main setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow}/>
      <Footer/>
    </StyledApp>
  );
}

export default App;
