import React, { useState, useEffect } from "react";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
      } fixed z-50 w-full transition-all duration-500`}
    >
      <h1
        className="text-4xl font-extrabold text-center transition-colors duration-500"
        style={{ fontFamily: "'Gilda Display', serif" }} // Applying Gilda Display font
      >
        ET Hotels
      </h1>
      <nav
        className={`${
          header ? 'text-primary' : 'text-white'
        } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
      >
        {["Home", "Rooms", "Restaurant", "Spa", "Contact"].map((item) => (
          <a
            key={item}
            href="/"
            className={`inline-block mx-4 py-2 uppercase text-sm tracking-widest relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-current before:scale-x-0 before:origin-bottom-right hover:before:scale-x-100 hover:before:origin-bottom-left before:transition-transform before:duration-300 ${
              header ? 'text-primary' : 'text-white'
            }`}
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
