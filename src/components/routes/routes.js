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
        path="/domasfurs"
      />
      <Route
        component={AboutUs}
        exact
        path="/domasfurs/aboutus"
      />
      <Route
        component={Gallery}
        exact
        path="/domasfurs/gallery"
      />
      <Route
        component={ContactUs}
        exact
        path="/domasfurs/contact"
      />
      <Route component={NoMatch} />
    </Switch>
  )
}
