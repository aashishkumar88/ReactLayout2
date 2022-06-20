import React from 'react'
import "./index.scss"
import Items from "./component/box"
const App = () => {
  return (
    <>
      <div class="container">
        <nav>
          <a href="#" class="layout">
            Layout2
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <div class="section">
          <div class="section__box">
            <span class="section__box__header">Sample Heading</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis eos culpa nobis architecto voluptas consequatur ab,
              cumque quis deserunt repudiandae quaerat excepturi consequuntur
              modi saepe sunt doloremque dolorum repellendus adipisci?
            </p>
            <button>Call to action!</button>
          </div>

          <div class="menu">
            <hr />
            <span class="menu__head">Latest Features</span>
            <div class="card">
              <Items />
              <Items />
              <Items />
              <Items />
            </div>
            <hr class="horizon" />
          </div>

          <footer>
            <p>Copyright &copy; Your Website 2014</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;