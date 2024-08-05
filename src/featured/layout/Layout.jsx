import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import JobSpinner from "../../atoms/JobSpinner";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <JobSpinner />;

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all ${
          isSidebarOpen ? "ml-[280px]" : "ml-[80px]"
        }`}
      >
        <Header isSidebarOpen={isSidebarOpen} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
