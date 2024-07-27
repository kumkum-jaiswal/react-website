import Container from 'react-bootstrap/Container';

const Footer = () => {
    return ( 
        <>
        <Container>
            
            
            
            
            <footer>
    <div class="f1">
    <ul class="footer1">
      <h1>About</h1>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Press Release</li>
      <li>Blog</li>
    </ul>
    <ul class="footer2">
      <h1>Coffee Links</h1>
      <li>Coffee Reality</li>
      <li>Coffee Affiliate</li>
      <li>partner with us</li>
      <li>Coffee order</li>
    </ul>
    <ul class="footer3">
      <h1>Newsletter</h1>
      <li>subscribe now for regular update</li>
      <input type="name"placeholder="Enter Your Email"/><button className="button">submit</button>
      <li>Follow Us</li>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-square-instagram"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-pinterest"></i>
    </ul>

  </div>
  <div class="f2">
    <hr/>
    <h1>Download our App</h1>
    <ol class="footer4">
      <li>privacy policy</li>
      <li>Terms & Condition</li>
      <li>Refund & Replacement</li>
      <li>Warranty</li>
      <li>product care</li>
    </ol>
  </div>

  </footer>
  </Container>
        </>
     )
}

export default Footer;