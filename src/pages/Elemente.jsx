import React from "react";
import { FaDove, FaGlobe, FaPeopleArrows } from "react-icons/fa";
import imgDacia from "../assets/imagini/dacia-romana-harta.jpg";
import imgRoma from "../assets/imagini/Roman_Empire_Trajan_117AD.png";
import imgSlavi from "../assets/imagini/harta-slavi.jpg";
import Timeline from "../components/Timeline";

const Elemente = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen p-12 ">
      
      {/* Titlul paginii */}
      <h1 className="text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 drop-shadow-lg text-center mb-10">
          Elemente ale etnogenezei românești
        </h1>
      {/* Descrierea paginii */}
      <section>
        <p className="text-xl sm:text-2xl md:text-4xl text-gray-300 leading-relaxed mb-14">
          Etnogeneza românească este procesul de formare a poporului român și a limbii române. Etapele etnogenezei românești: - 106-602 are loc romanizarea autohtoniilor daco-geți; prima sinteză dintre daci și romani în urma căreia se formează poporul daco-roman și limba daco-romană - 602-sec VIII-IX prin care au fost asimilați migratorii slavi de către authtonii daco-romani; a doua sinteza care are drept rezultat formarea poporului român și a limbii române. Elementele etnogenezei românești sunt rezultatul interacțiunii dintre daci, romani și slavi.
        </p>
      </section>

      {/* Secțiunea despre Daci */}
      <section className="mb-16 p-10 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-400 mb-6">
          <FaDove className="inline-block mr-4 text-yellow-400" />
          Dacii
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed">
          Dacii reprezintă elementul autohton al etnogenezei românești. Dacia era în antichitate un teritoriu locuit de geto-daci. Denumirea de geți este atribuită lui Herodot, părintele istoriei. Termenul de daci era folosit de către romani, astfel în scrierile lui Iulius Cezar, Strabon sau Dio Cassius. Geto-dacii aveau o religie politeistă, zeul suprem fiind Zalmoxis, zeul nemuririi, credeau că după moarte ajungeau în lumea lui. Alți zei importanți erau Gebeleizis, Bendis, Derzelas, Zamolxis, precum și zeițele Bendis și Kotys.  
        </p>
      </section>
      <img
        src={imgDacia}
        alt="Harta Daciei Romane"
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto mt-10 mb-10 rounded-lg shadow-md transition-transform hover:scale-105 duration-500"
      />

      {/* Secțiunea despre Romani */}
      <section className="mb-16 p-10 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-400 mb-6">
          <FaGlobe className="inline-block mr-4 text-yellow-400" />
          Romanii
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed">
          Imperiul Roman reprezintă elementul cuceritor în etnogeneza românească , așezat în jurul Mării Mediterane cu capitala la Roma. Deținea teritorii din jurul Mării Mediterane în Europa, Africa de Nord și vestul Asiei. Imperiul Roman a fost divizat în anul 395 d.H. de către împăratul Teodosiu în două părți ce vor fi conduse de către cei doi fii ai săi: Arcadius și Honorius.  
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mt-6">
          Romanizarea s-a realizat treptat printr-un amestec complex de influențe culturale, economice și sociale. În Dacia, au fost construite drumuri, apeducte și orașe prospere precum Ulpia Traiana Sarmizegetusa. Limba latină a devenit mijlocul principal de comunicare, iar obiceiurile romane s-au îmbinat cu cele locale, dând naștere unei identități unice. Chiar și după retragerea administrației romane în 271 d.Hr., elementele latine au continuat să domine în cultură, limbă și tradiții.
        </p>
      </section>
      <img src={imgRoma} alt="Imperiul Roman" className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto mt-10 mb-10 rounded-lg shadow-md transition-transform hover:scale-105 duration-500" />

      {/* Secțiunea despre Slavi */}
      <section className="mb-16 p-10 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-400 mb-6">
          <FaPeopleArrows className="inline-block mr-4 text-yellow-400" />
          Slavii
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed">
          Slavii reprezintă elementul migrator în etnogeneza românească, erau un popor de origine indo-europeană, erau înrudiți cu tracii, dacii, alanii, cimerienii, sarmații și făceau parte din grupa etno-lingvistică satem. Slavii au influențat organizarea socială, statală, cultura și limba română. Spre deosebire de romanitatea occidentală, unde influența migratorilor germanici este predominantă, romanitatea orientală se caracterizează prin faptul că influența slavă a fost "mult mai intensă și mai variată decât aceea germanică asupra limbii italiene sau franceze"
          (O. Densușianu).
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mt-6">
          Vecinii lor erau diverși: în vest întâlneau triburile germanice, celții și geto-dacii, în est și sud-est erau popoare iraniene precum alanii și sarmații, iar în nord triburi baltice și fino-ugrice. De-a lungul timpului, interacțiunile cu aceste popoare și așezarea pe teritorii întinse au dus la diferențieri lingvistice. Astfel, slavii s-au împărțit în trei mari ramuri:
        </p>
        <ul className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed list-disc list-inside mt-6">
          <li>Slavii de răsărit, strămoșii rușilor, ucrainenilor și bielorușilor.</li>
          <li>Slavii de apus, din care descind cehii, slovacii și polonezii.</li>
          <li>Slavii de sud, care au migrat la sud de Dunăre și au devenit strămoșii bulgarilor, sârbilor, croaților, macedonenilor, slovenilor, bosniacilor și muntenegrenilor.</li>
        </ul>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mt-6">
          Slavii au pătruns în spațiul carpato-danubiano-pontic în secolul al VI-lea, atestarea lor documentară pe teritoriul vechii Dacii a fost consemnată în timpul împăratului Iustinian când scriitorul bizantin Procop din Cezareea spune că avarii, sclavinii și anții locuiau la nord de Dunăre aproape de malurile ei. Slavii s-au răspândit pe întreaga suprafață a Daciei, atât în zonele muntoase cât și la câmpie. 
        </p>
      </section>
      <img src={imgSlavi} alt="Harta Slavilor" className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto mt-10 mb-10 rounded-lg shadow-md transition-transform hover:scale-105 duration-500" />

      <Timeline />
      
    </div>
  );
};

export default Elemente;
