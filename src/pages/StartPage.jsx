import React from "react";
import { FaLanguage, FaCrown, FaBook, FaTrophy } from "react-icons/fa";
import { GiBattleAxe } from "react-icons/gi";
import { Link } from "react-router-dom";
import myvideo1 from "../assets/My Video1.mp4";

// Componentă pentru fiecare link de capitol
const ChapterLink = ({ to, icon, label, iconColor }) => (
  <Link to={to}>
    <div className="flex items-center text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:bg-gray-700 p-4 rounded-lg hover:shadow-lg">
      {React.cloneElement(icon, { className: `mr-3 ${iconColor} text-3xl` })}
      {label}
    </div>
  </Link>
);

// Componentă pentru fiecare test
const TestCard = ({ to, label, icon, iconColor }) => (
  <Link to={to}>
    <div className="flex flex-col items-center justify-center text-center bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl">
      {React.cloneElement(icon, { className: `text-5xl ${iconColor} mb-6` })}
      <span className="text-2xl font-semibold text-gray-200">{label}</span>
    </div>
  </Link>
);

const StartPage = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-12 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Titlu */}
      <h1 className="text-6xl font-serif text-white drop-shadow-lg text-center">
        Introducere
      </h1>

      {/* Videoclipul de introducere */}
      <div className="w-full max-w-4xl">
        <video
          src={myvideo1}
          controls
          className="w-full rounded-xl shadow-2xl mb-12"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Titlu Capitole */}
      <h1 className="text-5xl font-serif text-white drop-shadow-lg text-center">
        Capitole
      </h1>

      {/* Lista de capitole */}
      <div className="flex flex-col items-start space-y-6 p-8 bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full">
        <ChapterLink
          to="/razboaiele_daco-romane"
          icon={<GiBattleAxe />}
          label="1. Războaiele daco-romane"
          iconColor="text-red-400"
        />
        <hr className="border-gray-700 w-full" />
        <ChapterLink
          to="/romanizarea"
          icon={<FaLanguage />}
          label="2. Romanizarea și influența asupra limbii române"
          iconColor="text-blue-400"
        />
        <hr className="border-gray-700 w-full" />
        <ChapterLink
          to="/mostenirea"
          icon={<FaCrown />}
          label="3. Moștenirea culturală și identitatea națională a românilor"
          iconColor="text-green-400"
        />
      </div>

      {/* Titlu Teste */}
      <h2 className="text-5xl font-serif text-yellow-400 mt-12 text-center">
        Teste
      </h2>

      {/* Lista de teste */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
  <TestCard
    to="/test-razboi"
    label="Test: Războaiele daco-romane"
    icon={<FaTrophy />} // Înlocuire cu trofeu
    iconColor="text-yellow-400" // Culoare aurie pentru trofeu
  />
  <TestCard
    to="/test-romanizarea"
    label="Test: Romanizarea"
    icon={<FaBook />} // Înlocuire cu carte
    iconColor="text-blue-400" // Culoare albastră pentru carte
  />
  <TestCard
    to="/test-mostenirea"
    label="Test: Moștenirea culturală"
    icon={<FaCrown />} // Înlocuire cu coroană
    iconColor="text-green-400" // Culoare verde pentru coroană
  />
</div>

    </div>
  );
};

export default StartPage;