import Container from 'react-bootstrap/Container';


const Slider=()=> {
    return ( 

<>
<Container>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{backgroundColor:"black", color:"white"}}>

  <div class="carousel-inner" style={{textAlign:"center"}}>
    <div class="carousel-item active">
    <h3>Get upto 10% off on your first purchase</h3>
    </div>
    <div class="carousel-item ">
    <h3>Buy now and get free delivery</h3>
    </div>
    <div class="carousel-item ">
    <h3>Buy the the </h3>
    </div>
  </div>

</div>

</Container>


</>


     );
}

export default Slider;