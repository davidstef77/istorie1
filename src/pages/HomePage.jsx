import React from 'react';
import Hero from '../components/Hero';
import img from '../assets/imagini/dacia-sec-ix-xiii-c.webp'; // Adjust the path if necessary
import img1 from '../assets/imagini/dacia-romana-harta.jpg'

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
          Suntem români nu doar prin naștere dar și prin istoria pe care o purtăm în sângele nostru. O istorie
          plină de sacrificii, de lupte, dar și de realizările societății românești. Ne mândrim cu moștenirea noastră
          culturală, cu limba română , limbă de origine latină care ne leagă de rădăcinile noastre romane, și cu tradițiile
          care ne definesc spiritul viu.
        </p>
        <p className="text-lg text-white leading-relaxed mb-8">
          De-a lungul veacurilor, românii au dovedit curaj, perseverență și o voință de fier. Avem un trecut cu
          care ne putem mândri și un viitor pe care îl vom construi împreună. Fiecare pas pe care îl facem ne
          apropie mai mult de tradiția istorică, iar prin cunoașterea și aprecierea ei noi vom deveni mai puternici.
        </p>
        <p className="text-xl font-semibold text-white">
          Haideți să păstrăm vii amintirile eroilor noștri și să învățăm din istoria care ne-a format ca popor!
        </p>
      </div>

      {/* Secțiunea "Introducere" */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 sm:p-10 my-8 text-center">
        <h2 className="text-4xl font-bold text-center text-white mb-6 border-b-4 border-yellow-500 inline-block">
          Introducere în etnogeneza românească
        </h2>
        <p className="text-lg text-white leading-relaxed mb-6">
          <span className="font-semibold text-yellow-300">Romanizarea</span> procesul istoric de simbioză si sinteză etnolingvistică dintre daci și romani în urma căruia se impune limba latină ca limba oficială. Etnogeneza românească demonstrează caracterul romanic al poporului român, romanitatea româniilor.
        </p>
        <p className="text-lg text-white leading-relaxed">
          <span className="font-semibold text-yellow-300">Etnogeneza românească</span> proces istoric de formare a poporului român și a limbii
          române.
        </p>
        <img
          className="w-full sm:w-1/2 mx-auto mt-10 rounded-lg shadow-md transition-transform hover:scale-105 duration-500"
          src={img1}
          alt="Dacia"
        />
      </div>
    </div>
  );
};

export default HomePage;
