import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';


export default class NavigBar extends React.Component {


render(){
    return(
<Navbar bg="info" variant="dark">
    <Navbar.Brand href="#home">Covid Simulator</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Test</Nav.Link>
      <Nav.Link href="#features">Global Results</Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
);
}
}