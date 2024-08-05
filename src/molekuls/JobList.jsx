import React, { useState, useEffect, useDeferredValue } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchData, deleteData } from "../services/http";
import Modal from "./Modal";
import SearchFilter from "../atoms/SearchFilter";
import JobCard from "../atoms/JobCard";
import Pagination from "../atoms/Pagination";
import JobListSpinner from "../atoms/JoblistSpinner";

const JobList = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const { data: jobs = [], error } = useQuery({
    queryKey: ["job"],
    queryFn: fetchData,
    onSuccess: () => {},
  });

  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries("job");
    },
  });

  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleEdit = (id) => {
    navigate(`/jobedit/${id}`);
  };

  const handleView = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const filteredJobs = jobs
    ?.filter((job) => {
      const title = job.jobTitle ? job.jobTitle.toLowerCase() : "";
      return title.includes(deferredSearchQuery.toLowerCase());
    })
    ?.sort((a, b) => {
      if (filter === "Latest") {
        return new Date(b.postedDate) - new Date(a.postedDate);
      } else if (filter === "Popular") {
        return b.candidates - a.candidates;
      } else if (filter === "Oldest") {
        return new Date(a.postedDate) - new Date(b.postedDate);
      }
      return 0;
    });

  const totalPages = Math.ceil((filteredJobs?.length || 0) / itemsPerPage);
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs =
    filteredJobs?.slice(indexOfFirstJob, indexOfLastJob) || [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) return <JobListSpinner />;

  if (error)
    return (
      <div className="p-4 bg-red-600 mt-4 text-white font-mono">
        DATA YOXDUR GARDAS: {error.message}
      </div>
    );

  return (
    <div className="flex flex-col ml-[250px] p-4 max-w-[1140px] m-auto">
      <div className="flex flex-grow justify-between gap-3">
        <div className="flex flex-col gap-4">
          <h2 className="text-[25px] font-bold">List</h2>
          <div className="flex items-center font-mono gap-[10px] cursor-pointer">
            <p className="hover:underline">Dashboard</p>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
            <p className="hover:underline">Job</p>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
            <p className="text-gray-400">List</p>
          </div>
        </div>
        <Link to={"/jobcreate"} className="flex mt-3 items-center gap-2">
          <div className="flex items-center gap-2 bg-gray-900 py-[7px] px-3 rounded-lg text-white">
            <FaPlus />
            <p>New job</p>
          </div>
        </Link>
      </div>

      <div className="w-full mt-4">
        <SearchFilter
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentJobs &&
            currentJobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                index={index}
                openMenu={openMenu}
                handleMenuToggle={handleMenuToggle}
                handleEdit={handleEdit}
                handleView={handleView}
                handleDelete={handleDelete}
              />
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>

      <Modal isOpen={!!selectedJob} onClose={closeModal} job={selectedJob} />
    </div>
  );
};

export default JobList;
