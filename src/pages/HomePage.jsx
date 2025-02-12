import React from 'react';
import Hero from '../components/Hero';
import img from '../assets/imagini/dacia-sec-ix-xiii-c.webp'; // Adjust the path if necessary

const HomePage = () => {
  return (
    
    <div>
      <Hero />

      {/* Secțiunea "De ce trebuie să fim mândri că suntem români?" */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 sm:p-10 my-8 text-center">
        <h2 className="text-4xl font-bold text-center text-white mb-6 border-b-4 border-yellow-500 inline-block">
          De ce trebuie să fim mândri că suntem români?
        </h2>
        <p className="text-lg text-white leading-relaxed mb-6">
          Suntem români nu doar prin naștere, ci prin istoria pe care o purtăm în sângele nostru. O istorie
          plină de sacrificii, de lupte, dar și de realizări extraordinare. Ne mândrim cu moștenirea noastră
          culturală, cu limba română – o limbă latină ce ne leagă de rădăcinile noastre imperiale, și cu tradițiile
          care ne definesc spiritul viu.
        </p>
        <p className="text-lg text-white leading-relaxed mb-8">
          De-a lungul veacurilor, românii au dovedit curaj, perseverență și o voință de fier. Avem un trecut de
          care putem fi mândri și un viitor pe care îl putem construi împreună. Fiecare pas pe care îl facem ne
          apropie mai mult de marea noastră tradiție, iar prin cunoașterea și aprecierea ei, vom deveni mai puternici.
        </p>
        <p className="text-xl font-semibold text-white">
          Haideți să păstrăm vii amintirile eroilor noștri și să învățăm din istoria care ne-a modelat ca popor!
        </p>
      </div>

      {/* Secțiunea "Introducere" */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 sm:p-10 my-8 text-center">
        <h2 className="text-4xl font-bold text-center text-white mb-6 border-b-4 border-yellow-500 inline-block">
          Introducere
        </h2>
        <p className="text-lg text-white leading-relaxed mb-6">
          <span className="font-semibold text-yellow-300">Romanizarea</span> – originea latină a poporului român și a limbii române - pentru a
          demonstra romanitatea românilor se prezintă etnogeneza românească.
        </p>
        <p className="text-lg text-white leading-relaxed">
          <span className="font-semibold text-yellow-300">Etnogeneza românească</span> - proces istoric de formare a poporului român și a limbii
          române.
        </p>
        <img
          className="w-full sm:w-1/2 mx-auto mt-10 rounded-lg shadow-md transition-transform hover:scale-105 duration-500"
          src={img}
          alt="Dacia"
        />
      </div>
    </div>
  );
};

export default HomePage;
