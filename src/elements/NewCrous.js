import React from 'react'

const NewCrous = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://tse3.mm.bing.net/th?id=OIP.-MmfmXB6f7SD_t1tHxj1-AHaEK&pid=Api&P=0&h=220" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://tse1.mm.bing.net/th?id=OIP.7RcR5X1__ZMxRcM-OvZrswHaEK&pid=Api&P=0&h=220" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://tse3.mm.bing.net/th?id=OIP.nkRHZO_MaI8xJlY9pEMlagAAAA&pid=Api&P=0&h=220" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default NewCrous
