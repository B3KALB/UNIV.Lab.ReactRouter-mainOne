import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Red = (props) => {
  return (
    <div className='red'>
      <h1>RED</h1>
    </div>
  )
}

const ImageOne = (props) => {
  return (
    <div className='imageOne'>
      <h1>Death Star</h1>
    </div>
  )
}

const Blue = (props) => {
  return (
    <div className='blue'>
      <h1>BLUE</h1>
    </div>
  )
}

const LimeGreen = (props) => {
  return (
    <div className='limeGreen'>
      <h1>LIME GREEN</h1>
    </div>
  )
}

const Silver = (props) => {
  return (
    <div className='silver'>
      <h1>SILVER</h1>
    </div>
  )
}

const Main = (props) => {
  return (
    <BrowserRouter>
    <div id='container'>

      <div id='navbar'>
        {/* navigation here */}
        <Link to="/blue">Go to Blue</Link>
        <Link to="/imageOne">Go to Death Star</Link>
        <Link to="/red">Go to Red</Link>
        <Link to="/limeGreen">Go to Lime Green</Link>
        <Link to="/silver">Go to Silver</Link>
      </div>

      <div id='main-section'>
        {/* routes here */}
      
        <Route path="/blue">
          <Blue />
        </Route>

        <Route path="/imageOne">
          <ImageOne />
        </Route>

        <Route path="/red">
          <Red />
        </Route>

        <Route path="/limeGreen">
          <LimeGreen />
        </Route>

        <Route path="/silver">
          <Silver />
        </Route>

        {/* exact - switch */}
        <Route exact path="/">
          <Red />
        </Route>
  
      </div>
    </div>
    </BrowserRouter>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)