import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = <>
    <li>
    <NavLink className={({ isActive }) => `font-bold text-lg ${isActive ? "rounded-md btn bg-blue-600" : "rounded-md btn btn-outline"}`} to="/">Home</NavLink>
    </li>
    <li> <NavLink className={({ isActive }) => `font-bold text-lg ${isActive ? "rounded-md btn bg-blue-600" : "rounded-md btn btn-outline"}`} to="/quiz-history">QuizHistory</NavLink></li>
  </>
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-4 bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>
        <a className="text-xl bg-gradient-to-tr">QuizSphere</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to='/rules' className='btn btn-sm border-blue-500  bg-blue-500 text-white font-semibold rounded-lg shadow'>Rules and Regulations</NavLink>
      </div>
    </div>
  );
};

export default Navbar;