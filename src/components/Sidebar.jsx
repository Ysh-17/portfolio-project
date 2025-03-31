import { useState } from "react";
import { FaTachometerAlt, FaBriefcase, FaBell, FaExclamationCircle, FaGavel, FaUpload, FaCogs, FaUsers, FaKey } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ setActivePage }) => {
  const [active, setActive] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Portfolio", icon: <FaBriefcase /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Notices", icon: <FaExclamationCircle /> },
    { name: "Auction", icon: <FaGavel /> },
    { name: "Data Upload", icon: <FaUpload /> },
    { name: "Control Panel", icon: <FaCogs /> },
    { name: "User Management", icon: <FaUsers /> },
    { name: "Permission", icon: <FaKey /> },
  ];

  const handleSelect = (name) => {
    setActive(name);
    setActivePage(name); // Update the selected feature in App.js
  };

  return (
    <div className="sidebar">
      <h2 className="admin-panel"> </h2>
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${active === item.name ? "active" : ""}`}
            onClick={() => handleSelect(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
