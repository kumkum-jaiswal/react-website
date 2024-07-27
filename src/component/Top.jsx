import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Top = () => {
    return ( 
        <>
             <Container>

<Navbar  className='nav'>
   <Container>
     <Navbar.Brand> <img src="public/image/logo.avif"/></Navbar.Brand>
     <Nav className="m-auto" style={{gap:"10px"}}>
       <Nav.Link href="#home">Home</Nav.Link>
       {/* <Nav.Link href="#about">About</Nav.Link> */}
       <NavDropdown title="About" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Who We Are</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Our Packing</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Partnerships</NavDropdown.Item>

         <NavDropdown.Item href="#action/3.4">Press</NavDropdown.Item>
         </NavDropdown>

       {/* <Nav.Link href="#shop">Shop</Nav.Link> */}
       <NavDropdown title="Shop" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Pure Coffee</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Instant Coffee</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Coffee with chicory</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.4">Coffee Equipment</NavDropdown.Item>
       </NavDropdown>
       <Nav.Link href="#blog">Blog</Nav.Link>
       <Nav.Link href="#contact">Contact</Nav.Link>

       
     </Nav>
   </Container>
 </Navbar>
 </Container>
        </>
     )
}
 
export default Top;