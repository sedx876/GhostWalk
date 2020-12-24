import React from 'react';
import { Route, Switch} from 'react-router-dom'
import "bootswatch/dist/cyborg/bootstrap.min.css"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import News from './components/News'
import BehindTheScenes from './components/BehindTheScenes'
import Development from './components/Development'
import Films from './components/Films'
import Contact from './components/Contact'
import More from './components/More'
import Press from './components/Press'
import Trailers from './components/Trailers'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/bts' component={BehindTheScenes}/>
        <Route exact path='/press' component={Press}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/more' component={More}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/development' component={Development}/>
        <Route exact path='/films' component={Films}/>
        <Route exact path='/trailers' component={Trailers}/>
      </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
