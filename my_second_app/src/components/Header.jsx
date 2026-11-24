const Header =()=>{
    return(
<nav className="navbar md:navbar-expand bg-1">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My First Site</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body mb-2 md:mb-0">
        <ul className="nav navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          
        </ul>
        
      </div>
    </dialog>
  </div>
</nav>
    );
};

export default Header