import { Link } from "react-scroll";
import logo1 from "../../assets/logo1.jpg";
import { MenuList } from "../../variables/lists";
import { useState } from "react";
export function Navbar() {
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link>
        <img src={logo1} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        {MenuList.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.section}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
