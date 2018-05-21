import React from 'react'

// import routing components
import {
  Route,
  Switch,
} from 'react-router-dom'

import Main from '../../pages/main/main'
import AboutUs from '../../pages/aboutus/aboutus'
import Gallery from '../../pages/gallery/gallery'
import ContactUs from '../../pages/contactus/contactus'
import NoMatch from '../../pages/notFound/notFound'

export const Routes = () => {
  return (
    <Switch>
      <Route
        component={Main}
        exact
        path="/"
      />
      <Route
        component={AboutUs}
        path="/aboutus"
      />
      <Route
        component={Gallery}
        path="/gallery"
      />
      <Route
        component={ContactUs}
        path="/contact"
      />
      <Route component={NoMatch} />
    </Switch>
  )
}
