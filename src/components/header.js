import React from 'react'

const Header = () => {
  return(
    <header>
      <nav className="navBar">
        <div className="logo"></div>
        <input id="menu-toggle" type="checkbox" />
        <label className="label-toggle" htmlFor="menu-toggle" />
        <div className="menu" role="navigation">
          <a href="/a">Menu 1</a>
          <a href="/a">Menu 2</a>
          <a href="/a">Menu 3</a>
          <a href="/a">Menu 4</a>
          <a href="/a">Menu 5</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
