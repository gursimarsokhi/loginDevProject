import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from 'react-bootstrap';

const Seeda = () => (
  <>
    <Navbar>
       <Navbar.Brand href="#home">
        <img
        style={{marginRight:'90%'}}
        alt=""
        src="https://pixy.org/src/138/thumbs350/1382507.jpg"
        width="50"
        height="50"
        className="d-inline-block align-top"
        />{' '}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        <Nav  activeKey="/home">
    <Nav.Item>
        <Nav.Link href="/home">
          Features
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          About
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
          Roadmap
        </Nav.Link>
    </Nav.Item><Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
          Pricing
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
        <Button variant="outline-primary">SIGN UP</Button>
      </Nav.Link>
    </Nav.Item>
  </Nav>
        </Navbar.Collapse>
                
    </Navbar>
  </>
)
export default Seeda