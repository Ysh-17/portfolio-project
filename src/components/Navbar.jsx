import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="company-name">Rescollect</h1>
      <div className="user-profile" title="User Profile">
        <FaUserCircle className="user-icon" />
        <span>User</span>
      </div>
    </div>
  );
};

export default Navbar;
