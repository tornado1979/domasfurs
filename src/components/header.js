import React from 'react'

const Header = () => {
  return(
    <header>
      <nav className="navBar">
        <div className="logo"></div>
        <input id="menu-toggle" type="checkbox" />
        <label className="label-toggle" htmlFor="menu-toggle" />
        <ul className="twitter" role="navigation">
          <li >e-Planner</li>
          <li>e-GuestList app</li>
          <li>e-Map</li>
          <li>Συχνές ερωτήσεις</li>
          <li>Επικοινωνία</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
