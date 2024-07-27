import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Photo = () => {
    return (  
        <>
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
        </>
    );
}
 
export default Photo ;