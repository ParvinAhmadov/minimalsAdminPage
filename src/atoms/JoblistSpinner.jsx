import React from "react";
import { PropagateLoader } from "react-spinners";

const JobListSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <PropagateLoader color="#10a000" loading speedMultiplier={1} width={2} />
    </div>
  );
};

export default JobListSpinner;
