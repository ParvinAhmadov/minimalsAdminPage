import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaBriefcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SidebarSvg from "../../assets/SidebarSvg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [isJobPanelVisible, setIsJobPanelVisible] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full border-r py-[30px] z-50 border-gray-200 transition-all ${
        isOpen ? "w-[280px]" : "w-20"
      }`}
    >
      <div className="flex relative items-center p-2">
        <SidebarSvg />

        <div
          onClick={toggleSidebar}
          className={`border cursor-pointer bg-white p-1 rounded-full absolute transition-transform ${
            isOpen ? "translate-x-[260px]" : "translate-x-[60px]"
          }`}
        >
          {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </div>
      </div>
      <nav className="py-4">
        <div
          className={`flex items-center justify-between cursor-pointer gap-2 p-2 bg-[#EBF8F4] relative ${
            !isOpen ? "group" : ""
          }`}
          onClick={() => setIsJobsOpen(!isJobsOpen)}
          onMouseEnter={() => !isOpen && setIsJobPanelVisible(true)}
          onMouseLeave={() => !isOpen && setIsJobPanelVisible(false)}
        >
          <div className="flex gap-[10px] items-center">
            <FaBriefcase size={22} className="text-green-600" />

            {isOpen && (
              <span className="text-green-600 font-bold text-sm">Job</span>
            )}
          </div>

          <div className="text-green-600">
            {isOpen && (isJobsOpen ? <FaAngleDown /> : <FaAngleRight />)}
          </div>

          {!isOpen && isJobPanelVisible && (
            <div className="absolute left-full top-0 w-40 bg-white border rounded shadow-md ml-[1%]">
              <ul className="p-2">
                <Link
                  to={"/joblist"}
                  className="block p-2 rounded hover:bg-gray-100 font-bold"
                >
                  List
                </Link>
                <Link
                  to={"/jobcreate"}
                  className="block p-2 rounded hover:bg-gray-100 font-bold"
                >
                  Create
                </Link>
                <Link
                  to={"/jobedit"}
                  className="block p-2 rounded hover:bg-gray-100 font-bold"
                >
                  Edit
                </Link>
              </ul>
            </div>
          )}
        </div>

        {isOpen && isJobsOpen && (
          <div>
            <ul className="flex cursor-pointer flex-col gap-1 mt-2 ml-2 ">
              <Link
                to={"/joblist"}
                className="p-2 rounded hover:bg-gray-100 font-bold"
              >
                List
              </Link>
              <Link
                to={"/jobcreate"}
                className="p-2 rounded hover:bg-gray-100 font-bold"
              >
                Create
              </Link>
              <Link
                to={"/jobedit"}
                className="p-2 rounded hover:bg-gray-100 font-bold"
              >
                Edit
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
