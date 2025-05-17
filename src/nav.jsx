import './nav.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './home.jsx'
import About from './about.jsx'
function nav() {
  return (
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light">
      <h2 class='col ms-5 text-info nav-h2'>React Developer</h2>
  <div class="container-fluid col justify-content-end me-4">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul class="navbar-nav gap-5 fs-4 d-flex align-items-center me-3">
       
      <Link to='/' class='list'>
        Home
        </Link>
        <Link to='/About' class='list'>
        About
        </Link>
        <Link to='/' class='list'>
        Contact
        </Link>
        <Link to='/home' class='list'>
        Gallery
        </Link>
        <Link to='/home' class='list'>
        Page
        </Link>
        <li class="nav-item p-0" >
        <button type="button" class="px-3 rounded-pill fs-5 bg-info text-dark border-3 border-dark">Join class</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/' element={<Home/>}></Route>

</Routes>
{/* <Home/> */}
</Router>
  )
}

export default nav