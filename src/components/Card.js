import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Card() {
  return (
   <>
    <div className="d-flex">
      <div class="card ms-5 ms-5 mt-5" style={{width: "18rem",color:"-moz-initial"}}>
  <img src="./img/images (7).jfif.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      <div class="card ms-5 ms-5 mt-5" style={{width: "18rem"}}>
  <img src="./img/images (3).jfif.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      <div class="card ms-5 ms-5 mt-5" style={{width: "18rem"}}>
  <img src="./img/images (5).jfif.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
   </>
  )
}

export default Card
