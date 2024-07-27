import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    return ( 
        <>
            <Carousel>
      <Carousel.Item>
       <img src="public/image/coff1.jpg" width="100%" height="400px"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src="public/image/coff2.jpg" width="100%" height="400px"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src="public/image/coff12.webp" width="100%" height="400px"/>
      </Carousel.Item>
    </Carousel>

        </>
     );
}
 
export default Slide
;