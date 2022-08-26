import React, {useState} from 'react'
import "../styles/Navbar.css"
import logo from "../assets/logo.png";




const Navbar = () => {

  const [nav, setNav] = useState(false);
const [toggle, setToggle] = useState(false);

 const handleClick = ()=>{
setToggle(!toggle)
 } 
  const addShadow = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", addShadow);

  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <div>
          <a href="#hom">
            <img src={logo} alt="" className="logo" />
          </a>
          <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item"><a href='#home' className="nav-links">Home</a></li>

            <li className="nav-item"><a href='#about' className="nav-links">About</a></li>

            <li className="nav-item"><a href='#product' className="nav-links">Product</a></li>

            <li className="nav-item"><a href='#roadmaps' className="nav-links">Roadmaps</a></li>
            <li className="nav-item"><a href='#contact' className="nav-links">Contact</a></li>
          </ul>
         
        </div>
        <div className="menu-icon" onClick={handleClick}>
              <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;