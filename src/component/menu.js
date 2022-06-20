import React from 'react'
import Items from "./component/box";


const menu = () => {
  return (
    <>
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
    </>
  );
}

export default menu