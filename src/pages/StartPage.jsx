import React from "react";
import { FaLanguage, FaCrown, FaBook, FaTrophy } from "react-icons/fa";
import { GiBattleAxe } from "react-icons/gi";
import { Link } from "react-router-dom";
import myvideo1 from "../assets/My Video2.mp4";

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
    <div className="flex flex-col items-center p-8 space-y-12 bg-grey-200">
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
        <hr className="border-gray-700 w-full" />
        <ChapterLink
          to="/elemente_etnogeneza"
          icon={<FaBook />}
          label="4. Elemente ale etnogenezei românești"
          iconColor="text-purple-400"
        />
      </div>

      {/* Titlu Teste */}
      <h2 className="text-5xl font-serif text-yellow-400 mt-12 text-center">
        Teste
      </h2>

      {/* Lista de teste */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
        <TestCard
          to="/rebus"
          label="Rebus cu cuvinte de origine latină"
          icon={<FaLanguage />}
          iconColor="text-green-400"
        />
        <TestCard
          to="/test-razboi"
          label="Test: Războaiele daco-romane"
          icon={<FaTrophy />}
          iconColor="text-yellow-400"
        />
        <TestCard
          to="/test-romanizarea"
          label="Test: Romanizarea"
          icon={<FaBook />}
          iconColor="text-blue-400"
        />
        <TestCard
          to="/test-mostenirea"
          label="Test: Moștenirea culturală"
          icon={<FaCrown />}
          iconColor="text-green-400"
        />
      </div>

      {/* Bibliografie */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-4xl w-full mt-12">
        <h2 className="text-3xl font-serif text-white drop-shadow-lg mb-6">
          Bibliografie
        </h2>
        <div className="space-y-4">
          <p className="text-xl text-gray-300 hover:text-white transition-all duration-300">
            Alesandru Duțu, Alexandru Madgearu, Petre Otu, Mircea Soreanu,{" "}
            <span className="italic">100 de bătălii din istoria româniilor</span>, Editura Litera, București, 2021
          </p>
          <p className="text-xl text-gray-300 hover:text-white transition-all duration-300">
            Giurescu, Constantin C. italiceIstoria Românilor, vol. I, Ediția a V-a, Editura BIC ALL
          </p>
          <p className="text-xl text-gray-300 hover:text-white transition-all duration-300">
            Radu Oltean,{" "}
            <span className="italic">Dacia, Războaiele cu romanii, vol. 1 Sarmizegetusa</span>, Editura Humanitas, 2019
          </p>
          
          <p className="text-xl text-gray-300 hover:text-white transition-all duration-300">
            Vocea audio AI de la Eleven Labs
          </p>
          <p className="text-xl text-gray-300 hover:text-white transition-all duration-300">
            Iconițele de pe React-Icons
          </p>
          <p className="text-xl text-gray-300 hover:text-white transition-all duration-300">
            Modelele 3D de pe SketchFab
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;