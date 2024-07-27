import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import Slider from './slider';
import Top from './Top';
import Card from './Card';
import Photo from './Photo';
import Contain from './contain';
import Sideimage from './Sideimage';
import Lastcard from './Lastcard';
import Slide from './slide';

const Home=()=>{
  return(
    <>
<Carousel/>
     <Container>
     <Slider/>
     <Top/>
    <Slide/>
      <Card/>

    <img src="public/image/r9.webp" width="100%"/>
    <br/><br/>
    
    <Sideimage/>
    <br/><br/>
    <Photo/>
    <br/>
    <br/>
 
    <Contain/> 
    <Lastcard/>      

    </Container>
    </>
  )
}
export default Home;