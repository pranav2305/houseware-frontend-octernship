import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleXmark,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../contexts/LanguageContext";
import { SUPPORTED_LANGS } from "../config";
import { useLocation } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import logo from "../assets/logo.png";
import { Drawer, Switch } from "@mui/material";

const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        theme === "light" ? "bg-light-primary" : "bg-dark-primary"
      } fixed w-full z-50`}
    >
      <div className="flex h-24 items-center justify-between px-6 sm:px-8 lg:px-12">
        <button
          type="button"
          className="transition hover:scale-125 sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
        </button>
        <div className="flex flex-row">
          <img className="h-24 w-auto" src={logo} alt="HousewareHQ" />
          <h1 className="text-3xl md:text-5xl text-white flex items-center">
            HousewareHQ
          </h1>
        </div>
        <div className="sm:hidden"></div>
        <div className="hidden absolute inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" className="text-white hover:text-gray-300">
            {location.pathname === "/" && (
              <Dropdown
                options={SUPPORTED_LANGS}
                onChange={(opt) => setLang(opt.value)}
                value={lang}
                placeholder="Select an option"
                controlClassName="bg-white rounded-md"
                menuClassName="bg-white rounded-md"
              />
            )}
          </button>
          <Switch
            checked={theme === "light"}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4"
            icon={
              <FontAwesomeIcon
                icon={faMoon}
                className={`${
                  theme === "light" ? "text-light-primary" : "text-dark-primary"
                } text-2xl bg-white rounded-full`}
              />
            }
            checkedIcon={
              <FontAwesomeIcon
                icon={faSun}
                className={`${
                  theme === "light" ? "text-light-primary" : "text-dark-primary"
                } text-2xl bg-white rounded-full`}
              />
            }
            classes={{
              switchBase: "!text-white",
              checked: "!text-white",
              track: "!bg-white !opacity-100",
            }}
          />
        </div>
      </div>
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="sm:hidden"
      >
        <div
          className={`flex flex-col h-screen ${
            theme === "light" ? "bg-light-primary" : "bg-dark-primary"
          }`}
        >
          <div className="flex flex-row items-center justify-between h-20 px-6 gap-x-5">
            <div className="flex flex-row">
              <img className="h-16 w-auto" src={logo} alt="HousewareHQ" />
              <h1 className="text-2xl text-white flex items-center">
                HousewareHQ
              </h1>
            </div>
            <button
              type="button"
              className="transition hover:scale-125"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-white sm:hidden text-2xl"
              />
            </button>
          </div>
          <hr className="border-gray-300 w-10/12 ml-auto mr-auto border-[1.5px]" />
          <div className="flex flex-col m-6">
            <h1 className="text-white text-xl mb-3">Settings</h1>
            <button type="button" className="text-white hover:text-gray-300">
              {location.pathname === "/" && (
                <Dropdown
                  options={SUPPORTED_LANGS}
                  onChange={(opt) => setLang(opt.value)}
                  value={lang}
                  placeholder="Select an option"
                  controlClassName="bg-white rounded-md"
                  menuClassName="bg-white rounded-md"
                />
              )}
            </button>
            <div className="flex flex-row gap-x-5 mt-3 items-center">
              <h1 className="text-white text-xl">Theme:</h1>
              <Switch
                checked={theme === "light"}
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                icon={
                  <FontAwesomeIcon
                    icon={faMoon}
                    className={`${
                      theme === "light"
                        ? "text-light-primary"
                        : "text-dark-primary"
                    } text-2xl bg-white rounded-full`}
                  />
                }
                checkedIcon={
                  <FontAwesomeIcon
                    icon={faSun}
                    className={`${
                      theme === "light"
                        ? "text-light-primary"
                        : "text-dark-primary"
                    } text-2xl bg-white rounded-full`}
                  />
                }
                classes={{
                  switchBase: "!text-white",
                  checked: "!text-white",
                  track: "!bg-white !opacity-100",
                }}
              />
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
