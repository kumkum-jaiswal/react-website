import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './slider';

// import { IoMdContact } from "react-icons/io";

const Home=()=>{
  return(
    <>
<Slider/>
<Carousel/>


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
            {/* <IoMdContact /> */}
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
      <Carousel.Item>
       <img src="public/image/coff1.jpg" width="100%" height="400px"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src="public/image/coff2.jpg" width="100%" height="400px"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src="public/image/coff3.jpg" width="100%" height="400px"/>
      </Carousel.Item>
    </Carousel>
      
      <div style={{backgroundColor:"aliceblue", margin:"20px" }}>
    <Row  style={{marginLeft:"80px" ,gap:"40px"}} >
      <Col md={2}>
        <img src="public/image/r4.webp"  width="200px"  />
      </Col>
      <Col md={2}>
        <img src="public/image/r5.webp"  width="200px"  />
      </Col>
      
      <Col md={2}>
        <img src="public/image/r6.webp"  width="200px"/>
      </Col>
      
      <Col md={2}>
        <img src="public/image/r7.webp"  width="200px"/>
      </Col>
      
      <Col md={2}>
        <img src="public/image/r8.webp"  width="200px"/>
      </Col>

    </Row>
    </div>

    <img src="public/image/r9.webp" width="100%"/>
    <br/><br/>

    <Container>
    <div className='cl1'>
    <div className='c'>
      <img src="public/image/r10.jpg"/>
    </div>

    <div className='cl2'>
      <p className='cl3'>How To Repurpose Used <br/> Coffee Grounds into a <br/>
       Nourishing Scrub</p>
       <button backgroundColor="skyblue">SEE MORE</button>
       <br/>
    </div>

    </div>

    <br/><br/>
    <Row>
    
      <Col md={6} p-5>
       <img src="public/image/coff10.webp" style={{width:"100%",height:"300px"}}/>
      </Col>
      <Col md={6} p-5>
      <img src="public/image/coff9.jpeg"  style={{width:"100%",height:"300px"}}/>
      </Col>
    </Row>
    <br/>

    <Row>
      <Col md={6} p-5>
       <img src="public/image/coff8.jpg" style={{width:"100%",height:"300px"}}/>
      </Col>
      <Col md={6} p-5>
      <img src="public/image/coff7.jpeg"  style={{width:"100%",height:"300px"}}/>
      </Col>
    </Row>


             <div className='cl5'  >    
         <Row style={{gap:"30px" , padding:"30px"}}>
    
      <Col md={2}>
        <img src="public/image/r12.avif"  width="150px"  />
        <h3>Number</h3>
      </Col>

      
      <Col md={2}>
        <img src="public/image/r13.webp"  width="150px" height="150px" />
        <h3>Pack Size</h3>
      </Col>
      
      
      <Col md={2}>
        <img src="public/image/r14.avif"   width="150px"/>
        <h3>Coffees</h3>
      </Col>
      
      <Col md={2}>
        <img src="public/image/r15.avif"   width="150px" height="150px"/>
        <h3>Grind Size</h3>
      </Col>
      
      <Col md={2}>
        <img src="public/image/r16.avif"   width="150px" height="150px"/>
        <h3>packed</h3>
      </Col>

    </Row>
    </div>
    
    </Container>

      </Container>

    </>
  )
}
export default Home;