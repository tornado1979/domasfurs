import React from 'react'
import {
  NavLink,
} from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <div className="logo" />
        <input id="menu-toggle" type="checkbox" />
        <label className="label-toggle" htmlFor="menu-toggle" />
        <div className="menu" role="navigation">
          <NavLink
            activeStyle={
              { color: '#959E05' }
            }
            exact
            to="/"
          >Home
          </NavLink>
          <NavLink
            activeStyle={
              { color: '#959E05' }
            }
            to="/aboutus"
          >About us
          </NavLink>
          <NavLink
            activeStyle={
              { color: '#959E05' }
            }
            to="/contact"
          >Contact us
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
