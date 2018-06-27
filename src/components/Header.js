import React, {Component} from 'react'
import {Navbar, NavbarGroup, Button, NavbarDivider, Alignment} from '@blueprintjs/core'
import {Link} from 'react-router-dom'


import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '../css/Header.css'

class Header extends Component {
  render() {
    return (
        <Navbar className="pt-dark navbar-container pt-darken">
          <NavbarGroup align={Alignment.LEFT}>
              <Link className="pt-button pt-navbar-heading pt-darken" to="/">⚡️⚡️NRG Energy Exchange ⚡️⚡️</Link>
              <NavbarDivider />
              <Link className="pt-button pt-minimal pt-icon-grid-view" to="/marketplace"> Marketplace </Link>
              <Link className="pt-button pt-minimal pt-icon-alignment-bottom" to="/dashboard"> Dashboard </Link>
              <Link className="pt-button pt-minimal pt-icon-bookmark" to="/whitepaper"> Whitepaper </Link>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
              <input className="pt-input" placeholder="Search NRG..." type="text" />
              <NavbarDivider />
              <Button className="pt-minimal" icon="user" />
              <Button className="pt-minimal" icon="notifications" />
              <Button className="pt-minimal" icon="cog" />
          </NavbarGroup>
      </Navbar>
    );
  }
}

export default Header;
