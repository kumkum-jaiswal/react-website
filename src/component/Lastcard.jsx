import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Lastcard = () => {
    return ( 
        <>
            <CardGroup>
      <Card >
        
        <div className='c1'>
        
        </div>
        
        <Card.Footer>
         <button style={{AlignItem:"center"}}>SHOP</button>
        </Card.Footer>
      </Card>

      <Card>
       <div className='c2'>

       </div>
       
        <Card.Footer>
        <button style={{AlignItem:"center"}}>SHOP</button>
        </Card.Footer>
      </Card>
      <Card>
        <div className='c3'>

        </div>
        
        <Card.Footer>
        <button style={{AlignItem:"center"}}>SHOP</button>
        </Card.Footer>
      </Card>
    </CardGroup>
        </>
     );
}
 
export default Lastcard;