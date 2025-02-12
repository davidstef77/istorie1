import React from 'react';
import { FaHome } from 'react-icons/fa'; // Importăm doar pictograma Home
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between items-center space-x-4 text-orange-400 font-semibold">
        <li className="flex items-center">
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate('/'); // Navighează pe pagina principală
            }}
            className="hover:text-lg transition-all duration-75 flex items-center justify-center cursor-pointer"
          >
            <FaHome className="text-2xl" />
            <span className="hidden md:inline ml-2">Acasă</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
