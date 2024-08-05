import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTag, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import MenuSelect from "./MenuSelect";

const JobCard = ({
  job = {},
  index,
  openMenu,
  handleMenuToggle,
  handleEdit,
  handleView,
  handleDelete,
}) => {
  if (!job.file) {
    console.error("Job file is missing", job);
    return <div>Error: DATA YOXDUR GARDAS.</div>;
  }

  return (
    <div className="w-[350px] h-[240px] bg-white shadow-xl rounded-lg p-4 relative">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between">
            <img
              className="w-12 rounded-lg"
              src={job.file}
              alt={job.jobTitle || "Job Image"}
            />
            <BsThreeDotsVertical
              className="text-[20px] cursor-pointer"
              onClick={() => handleMenuToggle(index)}
            />
          </div>
          {openMenu === index && (
            <MenuSelect
              job={job}
              handleEdit={handleEdit}
              handleView={handleView}
              handleDelete={handleDelete}
            />
          )}
          <div className="flex flex-col gap-y-1.5 mt-4 font-medium">
            <h3>{job.jobTitle || "Job Title"}</h3>
            <p className="text-gray-400 text-[14px]">
              Posted Date: {job.postedDate || "N/A"}
            </p>
            <p className="flex items-center gap-1 text-[13px] text-green-600">
              <MdPeopleAlt /> {job.candidates || 0} candidates
            </p>
          </div>
        </div>
        <div className="border-t-[1px] pt-2 border-t-gray">
          <div className="flex text-gray-400 justify-between">
            <p className="flex items-center gap-1 text-[12px]">
              <FaTag />
              {job.experience || "Experience Required"}
            </p>
            <p className="flex items-center text-[12px] gap-1">
              <FaCalendarAlt />
              {job.time || "Full-time"}
            </p>
          </div>
          <div className="flex text-gray-400 justify-between">
            <p className="flex gap-1 items-center text-[12px]">
              <FaDollarSign />
              {job.cash || 0}
            </p>
            <p className="flex items-center text-[12px] gap-1">
              <MdPeopleAlt />
              {job.profession || "Profession"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
