import React from 'react'
// import {Link} from 'react-router-dom'

export const Navbar = (props) => {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.switchMode} bg-${props.switchMode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-a active" aria-current="page" href="#">Home</a> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="#">{props.aboutText}</a>
        </li>
      </ul>
      
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleDark}/>
  <label className={`form-check-label text-${props.switchMode === 'light'?'dark':'light'} mx-2`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>


{/* blue mode */}
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBlue}/>
  <label className={`form-check-label text-${props.switchMode === 'light'?'Dark':'light'} mx-2`} htmlFor="flexSwitchCheckDefault">Blue Mode</label>
</div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


    </div>
  </div>
</nav>


</>
  )
}
