import React from "react"
import ReactDOM from "react-dom"
import About from "./About"
import Interests from "./Interests"
import Button from "./Buttonemail"
import Linkedin from "./Linkedin"
import Info from "./Info"

function App() {
  return(
    <div>
    <Info />
    <Button />
    <Linkedin/>
      <About />
      <Interests />
    
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))


