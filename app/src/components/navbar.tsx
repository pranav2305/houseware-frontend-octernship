import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../contexts/LanguageContext";
import { SUPPORTED_LANGS } from "../config";
import { useLocation } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <nav
      className={`${
        theme === "light" ? "bg-light-primary" : "bg-dark-primary"
      } fixed w-full`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <div className="flex flex-row">
                <img className="h-24 w-auto" src={logo} alt="HousewareHQ" />
                <h1 className="text-3xl md:text-5xl text-white flex items-center">
                  HousewareHQ
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="text-white hover:text-gray-300">
              {location.pathname === "/" && <Dropdown
                options={SUPPORTED_LANGS}
                onChange={(opt) => setLang(opt.value)}
                value={lang}
                placeholder="Select an option"
              />}
              {/* <FontAwesomeIcon icon={faLanguage} /> */}
            </button>
            {/* <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                theme
              </button>  */}
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Add theme and lang buttons */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
