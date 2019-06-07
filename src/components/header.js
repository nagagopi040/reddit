import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Common } from "./../utils"

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let subredditParam = location.pathname;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img className="img-fluid pr-2" height="54" width="54" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIIOJzEQXZIMmwjNBsCY12kmol7dVm_tF3tKsuypsbuwFOfZz" />Reddit</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" active={subredditParam === "/" ? true : false}>All</NavLink>
              </NavItem>
              {
                Common.subreddits.map( subreddit => {
                  return(
                    <NavItem key={subreddit.subreddit}>
                      <NavLink href={`/${subreddit.subreddit}`} active={subredditParam === `/${subreddit.subreddit}` ? true : false}>{subreddit.title}</NavLink>
                    </NavItem>
                  )
                })
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}