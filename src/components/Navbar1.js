import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navbar1.css'

function Navbar1() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" id="main-nav" bg="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>
                  <Link className = "link2" to={"/"}>
                    მთავარი
                  </Link>
                </Nav.Link>
              <NavDropdown title="ბაღი" id="basic-nav-dropdown" className='link'>
                <Nav.Link id='basic-nav-dropdown'>
                  <Link className = "link" to={"/Struct"}>
                    სტრუქტურა
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className = "link" to={"/Rules"}>
                    შინაგანწესი
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className = "link" to={"/OneYear"}>
                    ერთწლიანი გეგმა
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className = "link" to={"/SixYear"}>
                    6 წლიანი გეგმა
                  </Link>
                </Nav.Link>
              </NavDropdown>
              <Nav.Link>
                <Link className='link2' to={"/Personnel"}>
                  პერსონალი
                </Link>
              </Nav.Link>
              <NavDropdown title="სააღმზრდელო ჯგუფი" id="basic-nav-dropdown" className='link'>
                <Nav.Link>
                  <Link className = "link" to={"/2Years"}>
                    2-3 წლიანი ასაკობრივი ჯგუფი
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className = "link" to={"/4Years"}>
                    4-5 წლიანი ასაკობრივიჯგუფი
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className = "link" to={"/Prepare"}>
                    მოსამზადებელი ჯგუფი
                  </Link>
                </Nav.Link>
              </NavDropdown>
              <Nav.Link>
                  <Link className = "link2" to={"/Gallery"}>
                    გალერეა
                  </Link>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1

