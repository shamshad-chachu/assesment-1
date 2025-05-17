import './nav.css'
function nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <h2 class='col ms-5 text-info'>React Developer</h2>
  <div class="container-fluid col justify-content-end me-4">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul class="navbar-nav gap-5 fs-4 d-flex align-items-center me-3">
        <li class="nav-item ">
          <a class="list" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ">
          <a class="list" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item ">
          <a class="list" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="list" aria-current="page" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="list" aria-current="page" href="#">Page</a>
        </li>
        <li class="nav-item p-0" >
        <button type="button" class="px-3 rounded-pill fs-5 bg-info text-dark border-3 border-dark">Join class</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default nav