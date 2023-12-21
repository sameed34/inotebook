import React from 'react'

const crousal = () => {
  return (
    <div>
      {/* <div className="crohead my-5"> */}
      {/* <div id="carouselExample" className="carousel slide">
  <div  className="carousel-inner">
    <div className="carousel-item active">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://tse1.mm.bing.net/th?id=OIP.CziZue8gPegaXna4A3UT1wHaHa&pid=Api&P=0&h=220" style={{ height: "200px", objectFit: "contain", padding: "1px", borderRadius: "25px" }} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://tse3.mm.bing.net/th?id=OIP.-MmfmXB6f7SD_t1tHxj1-AHaEK&pid=Api&P=0&h=220" style={{ height: "200px", objectFit: "contain", padding: "1px", borderRadius: "25px" }} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://tse1.mm.bing.net/th?id=OIP.rxVdLKI3wQkY5eqU8__I2gHaEC&pid=Api&P=0&h=220" style={{ height: "200px", objectFit: "contain", padding: "1px", borderRadius: "25px" }} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
</div> 
         <div className="innercro">
        <p className="crousal">CAROUSEL</p>
        <p className="sli">SLIDES</p>
    </div> 
    </div>
*/}
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://tse1.mm.bing.net/th?id=OIP.rxVdLKI3wQkY5eqU8__I2gHaEC&pid=Api&P=0&h=220" style={{ height: "200px", objectFit: "contain", padding: "1px", borderRadius: "25px" }} alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color:'white'}}>
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://tse1.mm.bing.net/th?id=OIP.rxVdLKI3wQkY5eqU8__I2gHaEC&pid=Api&P=0&h=220" style={{ height: "200px", objectFit: "contain", padding: "1px", borderRadius: "25px" }} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://tse1.mm.bing.net/th?id=OIP.rxVdLKI3wQkY5eqU8__I2gHaEC&pid=Api&P=0&h=220" style={{ height: "200px", objectFit: "contain", padding: "1px", borderRadius: "25px" }} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default crousal
