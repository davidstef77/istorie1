import React from 'react';

const Rebus = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10">Rebus - cuvinte de origine latină</h1>
      
      {/* Iframe-ul Wordwall */}
      <iframe
        style={{ maxWidth: '100%' }}
        src="https://wordwall.net/embed/3a5ec0a697ec4c598e94e7f087b23cb8?themeId=1&templateId=11&fontStackId=0"
        width="1000"
        height="780"
        frameBorder="0"
        allowFullScreen
        title="Rebus Wordwall"
      ></iframe>
    </div>
  );
};

export default Rebus;
