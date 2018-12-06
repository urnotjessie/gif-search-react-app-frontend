import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Gif-Search</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/search">Search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/trending">Trending</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar;

// return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-light">
//         <div className="container-fluid">
//             <div className="navbar-header">
//                 <a href="/">Gif-Search</a>
//             </div>
//             <div className="nav navbar-nav navbar-right">
//                 <div className="row justify-content-end">
//                   <div className="col-4">
//                     <a class="nav-link nav-item" href="/search">Search</a>
//                   </div>
//                   <div className="col-4">
//                       <a class="nav-link" href="/trending">Trending</a>
//                   </div>
//                   <div className="col-4">
//
//                   </div>
//                 </div>
//             </div>
//         </div>
//     </nav>
// );
