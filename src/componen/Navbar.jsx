import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Campus Club Finder</h1>
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/clubs" 
                className={({ isActive }) => 
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                Clubs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `hover:underline ${isActive ? 'font-bold underline' : ''}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}