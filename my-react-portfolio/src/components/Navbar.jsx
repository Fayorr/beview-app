import React, {useState} from 'react'
import "../styles/Navbar.css"




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
          <h2>Oluwafayokunmi</h2>
          <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item"><a href='#articles' className="nav-links" target='_blank'>Articles</a></li>

            <li className="nav-item"><a href='#chats' className="nav-links" target='_blank'>Chats</a></li>

            <li className="nav-item"><a href='#awards' className="nav-links" target='_blank'>Awards</a></li>

            <li className="nav-item"><a href='#about' className="nav-links" target='_blank'>About</a></li>
          </ul>
          <button className='btn'>Get in touch</button>
        </div>
          <div className="menu-icon" onClick={handleClick}>
              <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
          </div>
      </nav>
  
</div>
  )
}

export default Navbar;