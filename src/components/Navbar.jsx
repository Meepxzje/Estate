import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenuMobile, setShowMenuMoblie] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {


    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  }, []);

  const handleClickMenu = () => {
    setShowMenuMoblie(!showMenuMobile);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 ease-linear duration-300 ${
        scroll ? "bg-slate-800 opacity-70" : ""
      } `}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <li>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Testimonails"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonails
            </a>
          </li>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>

        <img
          src={assets.menu_icon}
          alt="menu_icon"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => handleClickMenu()}
        />
      </div>

      {/* Mobile */}

      <div
        className={`md:hidden ${
          showMenuMobile ? "fixed w-full" : "h-0 w-0"
        }  top-0 right-0 left-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            alt="cross_icon"
            className="w-6 cursor-pointer"
            onClick={() => handleClickMenu()}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => handleClickMenu()}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => handleClickMenu()}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => handleClickMenu()}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => handleClickMenu()}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
