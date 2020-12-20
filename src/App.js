import React from 'react';

import "bootswatch/dist/cyborg/bootstrap.min.css"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import News from './components/News'
import BehindTheScenes from './components/BehindTheScenes'
import Development from './components/Development'
import Films from './components/Films'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <About /> */}
      {/* <News /> */}
      {/* <BehindTheScenes/> */}
      {/* <Development /> */}
      {/* <Films /> */}
      <Footer />
    </div>
  );
}

export default App;
