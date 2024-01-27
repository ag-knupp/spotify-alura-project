import React from 'react';

const Footer = () =>{
    return(
        <footer
    className="bg-gradient-to-r from-rose-500 to-sky-200 text-white sticky bottom-2 flex gap-2 ml-2 mr-6 p-3 justify-between items-center"
  >
    <div className="flex flex-col">
      <p className="font-bold text-sm">Preview of Spotify</p>
      <p className="text-sm">
        Sign up to get unlimited songs and podcasts with occasional ads. No
        credit card needed.
      </p>
    </div>
    <button className="bg-white text-black rounded-full px-4 py-2 font-bold">
      Sign up for free
    </button>
  </footer>
    )
};

export default Footer;