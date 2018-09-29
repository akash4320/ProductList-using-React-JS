import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,NavbarBrand} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Product Details</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}