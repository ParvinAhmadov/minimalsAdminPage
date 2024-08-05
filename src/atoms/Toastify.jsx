import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify} className="bg-blue-500 text-white p-2 rounded">
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
