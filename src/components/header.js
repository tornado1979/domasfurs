import React from 'react'

const Header = () => {
  return(
    <header>
      <nav className="navBar">
        <div className="logo"></div>
        <input id="menu-toggle" type="checkbox" />
        <label className="label-toggle" htmlFor="menu-toggle" />
        <ul className="twitter" role="navigation">
          <li >Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
