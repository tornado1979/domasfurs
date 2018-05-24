import React from 'react'
import {
  NavLink,
} from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <NavLink className="logo" to="/domasfurs">
          <div className="logo" />
        </NavLink>
        <input id="menu-toggle" type="checkbox" />
        <label className="label-toggle" htmlFor="menu-toggle" />
        <div className="menu" role="navigation">
          <NavLink
            activeStyle={
              { color: '#959E05' }
            }
            to="/domasfurs"
          >Home
          </NavLink>
          <NavLink
            activeStyle={
              { color: '#959E05' }
            }
            to="/domasfurs/aboutus"
          >About us
          </NavLink>
          <NavLink
            activeStyle={
              { color: '#959E05' }
            }
            to="/domasfurs/gallery"
          >Gallery
          </NavLink>
          <NavLink
            activeStyle={
              { color: '#959E05' }
            }
            to="/domasfurs/contact"
          >Contact us
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
