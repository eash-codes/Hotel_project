import React from "react";

const Header = () => {
  return (
    <header style={{ backgroundColor: '#588960' }} className="text-white p-5 shadow-lg">
      <h1
        className="text-4xl font-extrabold text-center"
        style={{ fontFamily: "'Gilda Display', serif" }} // Applying Gilda Display font
      >
        ET Hotels
      </h1>
      <nav className="mt-4 text-right">
        <a
          href="/"
          className="inline-block mx-4 py-2 text-white uppercase text-sm tracking-widest relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-white before:scale-x-0 before:origin-bottom-right hover:before:scale-x-100 hover:before:origin-bottom-left before:transition-transform before:duration-300"
          style={{ fontFamily: "'Barlow', sans-serif" }} 
        >
          Home
        </a>
        <a
          href="/"
          className="inline-block mx-4 py-2 text-white uppercase text-sm tracking-widest relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-white before:scale-x-0 before:origin-bottom-right hover:before:scale-x-100 hover:before:origin-bottom-left before:transition-transform before:duration-300"
          style={{ fontFamily: "'Barlow', sans-serif" }} 
        >
          Rooms
        </a>
        <a
          href="/"
          className="inline-block mx-4 py-2 text-white uppercase text-sm tracking-widest relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-white before:scale-x-0 before:origin-bottom-right hover:before:scale-x-100 hover:before:origin-bottom-left before:transition-transform before:duration-300"
          style={{ fontFamily: "'Barlow', sans-serif" }} 
        >
          Restaurant
        </a>
        <a
          href="/"
          className="inline-block mx-4 py-2 text-white uppercase text-sm tracking-widest relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-white before:scale-x-0 before:origin-bottom-right hover:before:scale-x-100 hover:before:origin-bottom-left before:transition-transform before:duration-300"
          style={{ fontFamily: "'Barlow', sans-serif" }} 
        >
          Spa
        </a>
        <a
          href="/"
          className="inline-block mx-4 py-2 text-white uppercase text-sm tracking-widest relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-white before:scale-x-0 before:origin-bottom-right hover:before:scale-x-100 hover:before:origin-bottom-left before:transition-transform before:duration-300"
          style={{ fontFamily: "'Barlow', sans-serif" }} 
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
