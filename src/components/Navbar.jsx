import { NavLink } from "react-router-dom";
const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex space-x-4 justify-center gap-10 ">
    <NavLink activeClassName="active" exact to="/" className="hover:shadow-lg hover:shadow-white rounded-md pl-4 pr-4" >
      Dashboard
    </NavLink>
    <NavLink to="/users" activeClassName="active" className="hover:shadow-lg hover:shadow-white rounded-md pl-4 pr-4">
      Users
    </NavLink>
    <NavLink activeClassName="active"  to="/roles" className="hover:shadow-lg hover:shadow-white  rounded-md pl-4 pr-4">
      Roles
    </NavLink>
  </nav>
);

export default Navbar;
