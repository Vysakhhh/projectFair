import React, { use, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../contexts/ContextAPI';



function Header() {

  const{setIsAuthorized}=useContext(tokenAuthContext)

  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.clear()
    navigate('/')
    setIsAuthorized(false)

  }
  return (
    <>

      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand> <Link className='text-decoration-none text-white fw-bold' to={'/'}><i class="fa-brands fa-docker text-warning  fa-lg  me-1"></i>  &nbsp; Project Fair</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <button onClick={logout} className='btn text-white    fw-semibold '>logout</button>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
















    </>
  )
}

export default Header