import React from "react";

const Modal = ({ isOpen, onClose, job }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2 relative">
        <h2 className="text-xl flex justify-center font-bold text-orange-400 mb-4 shadow-md p-2">
          Job Details
        </h2>
        <button
          onClick={onClose}
          className="absolute top-8 right-8 bg-orange-500 text-white px-[4px] py-[3.5px]  rounded-lg"
        >
          Close
        </button>
        <div className="border-solid border-2 border-orange-400 flex gap-3 p-4 rounded items-center shadow-2xl  ">
          <img className="w-20 rounded-lg mb-4" src={job.file} alt="Job" />
          <p className="mb-4 font-semibold">
            <strong>Title:</strong> {job.jobTitle}
          </p>
          <p className="mb-4 font-semibold">
            <strong>Posted Date:</strong> {job.postedDate}
          </p>
          <p className="mb-4 font-semibold">
            <strong>Experience:</strong> {job.experience}
          </p>
          <p className="mb-4 font-semibold">
            <strong>Profession:</strong> {job.profession}
          </p>
          <p className="mb-4 font-semibold">
            <strong>Candidates:</strong> {job.candiDates}
          </p>
          <p className="mb-4 font-semibold">
            <strong>Cash: $</strong> {job.cash}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
