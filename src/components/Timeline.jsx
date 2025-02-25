import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Timeline = () => {
  // State pentru a controla vizibilitatea evenimentelor
  const [activeEvent, setActiveEvent] = useState(null);

  // Functia care controleaza deschiderea evenimentelor la click
  const handleClick = (index) => {
    setActiveEvent(index === activeEvent ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-400 uppercase tracking-wide mb-16">
          Desfășurarea evenimentelor istorice
        </h1>
        <div className="relative flex justify-center items-center">
          {/* Linia orizontală */}
          <div className="absolute inset-0 h-1 bg-gray-600"></div>
          {/* Evenimente */}
          <div className="flex space-x-12 items-center z-10">
            {/* Eveniment 1 */}
            <div
              className="relative group"
              onClick={() => handleClick(1)}
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white mb-4 hover:bg-yellow-500 transition-all duration-300">
                <FaCalendarAlt />
              </div>
              <div
                className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-lg p-4 rounded-md shadow-lg transition-opacity duration-300 ${
                  activeEvent === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-bold text-xl">101 - 106 d.Hr. – Războaiele Daco-Romane</p>
                <p className="mt-2">Conflictul între daci și romani pentru supremație în regiune.</p>
              </div>
            </div>

            {/* Eveniment 2 */}
            <div
              className="relative group"
              onClick={() => handleClick(2)}
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white mb-4 hover:bg-yellow-500 transition-all duration-300">
                <FaCalendarAlt />
              </div>
              <div
                className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-lg p-4 rounded-md shadow-lg transition-opacity duration-300 ${
                  activeEvent === 2 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-bold text-xl">271 d.Hr. – Retragerea romanilor</p>
                <p className="mt-2">Imperiul Roman se retrage din Dacia, lăsând în urmă o influență culturală puternică.</p>
              </div>
            </div>

            {/* Eveniment 3 */}
            <div
              className="relative group"
              onClick={() => handleClick(3)}
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white mb-4 hover:bg-yellow-500 transition-all duration-300">
                <FaCalendarAlt />
              </div>
              <div
                className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-lg p-4 rounded-md shadow-lg transition-opacity duration-300 ${
                  activeEvent === 3 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-bold text-xl">VII - XIII – Marea migrație a popoarelor</p>
                <p className="mt-2">Slavii, hunii și altele triburi migratoare se stabilesc în regiune.</p>
              </div>
            </div>

            {/* Eveniment 4 */}
            <div
              className="relative group"
              onClick={() => handleClick(4)}
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white mb-4 hover:bg-yellow-500 transition-all duration-300">
                <FaCalendarAlt />
              </div>
              <div
                className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-lg p-4 rounded-md shadow-lg transition-opacity duration-300 ${
                  activeEvent === 4 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-bold text-xl">XIV - XVI – Formarea Țărilor Române</p>
                <p className="mt-2">Se formează principatele Țara Românească, Moldova și Transilvania.</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
