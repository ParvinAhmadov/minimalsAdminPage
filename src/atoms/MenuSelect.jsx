import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const MenuSelect = ({ job, handleEdit, handleView, handleDelete }) => {
  return (
    <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg p-2">
      <ul className="flex flex-col">
        <li
          className="cursor-pointer flex items-center gap-2 hover:bg-gray-100 p-4"
          onClick={() => handleEdit(job.id)}
        >
          <AiFillEdit />
          Edit
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 flex items-center gap-2"
          onClick={() => handleView(job)}
        >
          <GrFormView />
          View
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 flex items-center gap-2"
          onClick={() => handleDelete(job.id)}
        >
          <MdDelete />
          Delete
        </li>
      </ul>
    </div>
  );
};

export default MenuSelect;
