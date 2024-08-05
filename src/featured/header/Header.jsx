import React, { useState } from "react";
import { PiCaretUpDown, PiDrone } from "react-icons/pi";
import { FaBell, FaSearch } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

const Header = ({ isSidebarOpen }) => {
  const [isSpinning, setSpinning] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [isUsersDropdownOpen, setUsersDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectTeam = (team) => {
    console.log(`Selected: ${team}`);
    setDropdownOpen(false);
  };

  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };

  const toggleUsersDropdown = () => {
    setUsersDropdownOpen(!isUsersDropdownOpen);
  };

  return (
    <div
      className={`flex justify-between pt-4 px-4 bg-white z-10 transition-all ${
        isSidebarOpen ? "ml-[30px]" : "ml-[80px]"
      }`}
    >
      <div className="flex gap-2 items-center justify-center relative">
        <img
          className="w-6 cursor-pointer"
          src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-1.webp"
          alt=""
        />
        <p className="cursor-pointer font-bold" onClick={toggleDropdown}>
          Team 1
        </p>
        <div className="bg-gray-200 py-0.5 px-[8px] rounded-lg flex items-center justify-center">
          <p className="text-gray-600 font-bold text-[12px]">Free</p>
        </div>
        <PiCaretUpDown
          className="text-gray-400 cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute top-10 left-0 bg-white shadow-md rounded-lg p-2">
            <p
              className="cursor-pointer flex gap-2 p-2 hover:bg-gray-100"
              onClick={() => selectTeam("Team 1")}
            >
              <img
                className="w-6 cursor-pointer"
                src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-1.webp"
                alt=""
              />
              Team 1
            </p>
            <p
              className="cursor-pointer flex gap-2 p-2 hover:bg-gray-100"
              onClick={() => selectTeam("Team 2")}
            >
              <img
                className="w-6 cursor-pointer"
                src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-2.webp"
                alt=""
              />
              Team 2
            </p>
            <p
              className="cursor-pointer flex gap-2 p-2 hover:bg-gray-100"
              onClick={() => selectTeam("Team 3")}
            >
              <img
                className="w-6 cursor-pointer"
                src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-3.webp"
                alt=""
              />
              Team 3
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center cursor-pointer justify-between w-[80px] bg-gray-200 py-[3px] font-bold px-1 rounded-[10px]">
          <FaSearch className="text-gray-400" />
          <div className="flex items-center bg-white p-[2px] text-[15px] rounded-lg">
            <PiDrone />
            <p>K</p>
          </div>
        </div>
        <img
          className="w-[27px] rounded cursor-pointer"
          src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/gb.webp"
          alt=""
        />
        <div className="relative">
          <div className="bg-red-500 flex justify-center items-center w-[20px] h-[20px] absolute bottom-3 left-2 rounded-full">
            <p className="text-white text-[13px] font-bold">4</p>
          </div>
          <FaBell className="text-[20px] cursor-pointer text-gray-500" />
        </div>
        <div className="relative">
          <MdPeopleAlt
            className="text-[23px] cursor-pointer text-gray-500"
            onClick={toggleUsersDropdown}
          />
          {isUsersDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg p-2 w-48">
              <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                <div className="relative w-8 h-8 p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
                  <div className="w-full h-full bg-white rounded-full p-0.5">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-1.webp"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-gray-800 font-bold">Jayvion Simon</p>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                <div className="relative w-8 h-8 p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
                  <div className="w-full h-full bg-white rounded-full p-0.5">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-2.webp"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-gray-800 font-bold">Lucian Obrien</p>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                <div className="relative w-8 h-8 p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
                  <div className="w-full h-full bg-white rounded-full p-0.5">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-3.webp"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-gray-800 font-bold">Deja Brady</p>
              </div>
            </div>
          )}
        </div>
        <div
          className={`cursor-pointer transition-transform duration-1000 ease-default ${
            isSpinning ? "animate-spin" : ""
          }`}
          onClick={() => {
            setSpinning(!isSpinning);
            togglePanel();
          }}
        >
          <AiFillSetting className="text-[24px] cursor-pointer text-gray-500" />
        </div>
        <div className="relative w-10 h-10 p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
          <div className="w-full h-full bg-white rounded-full p-0.5">
            <img
              className="w-full h-full rounded-full"
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 transition-transform transform ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center text-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Settings</h2>
          <button className="text-[20px] font-bold" onClick={togglePanel}>
            <FiDelete />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Dark Mode</h3>
            <button className="text-white p-2 rounded bg-slate-900 hover:bg-slate-700 hover:text-gray-200">
              {" "}
              Dark Mode
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Contrast</h3>
            <button className="text-white p-2 rounded bg-slate-900 hover:bg-slate-700 hover:text-gray-200">
              {" "}
              Contrast
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Compact Mode</h3>
            <button className="text-white p-2 rounded bg-slate-900 hover:bg-slate-700 hover:text-gray-200">
              {" "}
              Compact
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Layout Mode</h3>
            <button className="text-white p-2 rounded bg-slate-900 hover:bg-slate-700 hover:text-gray-200">
              {" "}
              Layout{" "}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Color Mode</h3>
            <button className="text-white p-2 rounded bg-slate-900 hover:bg-slate-700 hover:text-gray-200">
              {" "}
              Integrate
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Color Mode</h3>
            <button className="text-white p-2 rounded bg-slate-900 hover:bg-slate-700 hover:text-gray-200">
              {" "}
              Apparent
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Font Mode</h3>
            <button className="text-white p-2 rounded bg-slate-900 hover:bg-slate-700 hover:text-gray-200">
              {" "}
              Puclic Sans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
