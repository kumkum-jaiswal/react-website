import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contain = () => {
    return (
        <>
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
        </>
    );
}
 
export default Contain;