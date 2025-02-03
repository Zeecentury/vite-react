import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navlink">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contactus">Contactus</NavLink>
      <NavLink to="experience">Experience</NavLink>
      <NavLink to="resume">Resume</NavLink>
      <NavLink to="services">Services</NavLink>
    </div>
  );
};

export default Navbar;
