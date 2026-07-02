import React , {useState} from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const[isProfileDropdownSelected, setisProfileDropdownSelected]= useState(false);

  const handleMenuClick = (index) =>{
    setSelectMenu(index);
  }
  const handleProfileClick = (index) =>{
    setisProfileDropdownSelected(!isProfileDropdownSelected);
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="kite-logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link onClick={() => handleMenuClick(0)}
            to="/"
            style={{textDecoration:"none"}}>
            <p className={selectMenu === 0? activeMenuClass: menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(1)}
            to="/orders"
            style={{textDecoration:"none"}}>
            <p className={selectMenu === 1? activeMenuClass: menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(1)}
            to="/holdings"
            style={{textDecoration:"none"}}>
            <p className={selectMenu === 1? activeMenuClass: menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(2)}
            to="/positions"
            style={{textDecoration:"none"}}>
            <p className={selectMenu === 2? activeMenuClass: menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(3)}
            to="/funds"
            style={{textDecoration:"none"}}>
            <p className={selectMenu === 3? activeMenuClass: menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(4)}
            to="/apps"
            style={{textDecoration:"none"}}>
            <p className={selectMenu === 4? activeMenuClass: menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
           <p className="username">USERID</p>
         </div>
         
      </div>
    </div>
  );
};

export default Menu;
