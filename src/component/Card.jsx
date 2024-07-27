import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Card = () => {
    return ( 
        <>
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
        </>
     );
}
 
export default Card ;