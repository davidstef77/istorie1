import React, { useState } from 'react';
import { FaHome, FaBars, FaMap, FaLandmark, FaBook, FaPuzzlePiece, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-center flex flex-col items-center">
      <div className="flex items-center space-x-6">
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="hover:text-lg transition-all duration-75 flex items-center justify-center cursor-pointer text-orange-400 text-2xl"
        >
          <FaHome />
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="text-orange-400 text-2xl">
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <ul className="mt-4 bg-gray-700 p-2 rounded-md text-center">
          <li onClick={() => navigate('/start')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaFileAlt className="mr-2" /> Start Page
          </li>
          <li onClick={() => navigate('/razboaiele_daco-romane')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaMap className="mr-2" /> Războaiele Daco-Romane
          </li>
          <li onClick={() => navigate('/romanizarea')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaLandmark className="mr-2" /> Romanizarea
          </li>
          <li onClick={() => navigate('/mostenirea')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaBook className="mr-2" /> Moștenirea
          </li>
          <li onClick={() => navigate('/elemente_etnogeneza')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaPuzzlePiece className="mr-2" /> Elemente Etnogeneza
          </li>
          <li onClick={() => navigate('/test-romanizarea')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaFileAlt className="mr-2" /> Test Romanizarea
          </li>
          <li onClick={() => navigate('/test-razboi')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaFileAlt className="mr-2" /> Test Război
          </li>
          <li onClick={() => navigate('/test-mostenirea')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaFileAlt className="mr-2" /> Test Moștenirea
          </li>
          <li onClick={() => navigate('/rebus')} className="cursor-pointer hover:text-orange-400 flex items-center justify-center">
            <FaPuzzlePiece className="mr-2" /> Rebus
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
