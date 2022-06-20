import React from 'react'
import "./index.scss"
import Footer from "./component/footer"
import Navbar from "./component/navbar"
import Section from "./component/section"
import Menu from "./component/menu"
const App = () => {
  return (
    <>
      <div class="container">
       <Navbar/>
        <div class="section">
        <Section/>
         <Menu/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;