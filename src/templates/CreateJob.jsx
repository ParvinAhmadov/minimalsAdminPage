import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { postData } from "../services/http";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

const CreateJob = () => {
  const [preview, setPreview] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation((newJob) => postData(newJob), {
    onSuccess: () => {
      queryClient.invalidateQueries("jobs");
      toast.success("Job created successfully!");
    },
    onError: () => {
      toast.error("Failed to create job!");
    },
  });

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      file: null,
      time: "",
      experience: "",
      profession: "",
      postedDate: "",
      candiDates: "",
      cash: "",
    },
    validationSchema: Yup.object({
      jobTitle: Yup.string().required("Title is required!"),
      file: Yup.mixed().required("File is required!"),
      time: Yup.string().required("Choose at least one option!"),
      experience: Yup.string().required("Choose at least one option!"),
      profession: Yup.string().required("Choose at least one option!"),
      postedDate: Yup.date().required("Choose at least one option!"),
      candiDates: Yup.number().required("Candidates count is required!"),
      cash: Yup.string().required("Cash is required!"),
    }),
    onSubmit: (values) => {
      const data = { ...values };
      mutation.mutate(data);
      navigate("/");
    },
  });

  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      formik.setFieldValue("file", reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex gap-3 mt-10 text-[20px] mr-10 ml-[16%] flex-col">
        <h3 className="font-bold">Create a new job</h3>
        <div className="flex items-center gap-2">
          <p className="hover:underline cursor-pointer text-[15px]">
            Dashboard
          </p>
          <div className="h-1 w-1 bg-gray-500 rounded-full text-[15px]"></div>
          <p className="hover:underline cursor-pointer text-[15px]">Job</p>
          <div className="h-1 w-1 bg-gray-500 rounded-full text-[15px]"></div>
          <p className="text-gray-400 text-[15px]">New job</p>
        </div>
      </div>
      <div className="max-w-[900px] m-auto mt-5 rounded-2xl shadow-lg p-6">
        <div>
          <h2 className="font-semibold text-[20px]">Details</h2>
          <p className="text-[12px] mt-2 text-gray-500 font-semibold">
            Title, short description, image...
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="border-t-[1px] border-gray-200 mt-5 pt-2"
        >
          <h3 className="font-semibold mb-2 text-orange-400">Title</h3>
          <input
            className="px-3 py-3.5 border border-orange-600 rounded-lg w-full placeholder:font-semibold focus:border-orange-600"
            name="jobTitle"
            placeholder="Ex: Software Engineer..."
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.jobTitle}
          />
          {formik.touched.jobTitle && formik.errors.jobTitle ? (
            <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
              {formik.errors.jobTitle}
            </div>
          ) : null}
          <input
            className="p-2 mt-2 rounded-lg w-full"
            name="file"
            type="file"
            onChange={handleFileChange}
          />
          {formik.touched.file && formik.errors.file ? (
            <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
              {formik.errors.file}
            </div>
          ) : null}
          {preview && (
            <div className="mt-2">
              <img
                src={preview}
                alt="File preview"
                className="w-32 h-32 object-cover border border-orange-600 rounded-lg"
              />
            </div>
          )}
          <div className="mt-5">
            <h3 className="font-semibold text-[20px] p-2">Properties</h3>
            <p className="text-[14px] text-gray-500 mb-4 font-semibold border-b-2 p-2">
              Additional functions and attributes...
            </p>
            <p className="font-semibold mb-2 text-orange-400">
              Employment type
            </p>
            <div className="flex gap-2 items-center">
              <label className="font-semibold" htmlFor="full-time">
                Full-Time
              </label>
              <input
                type="radio"
                id="full-time"
                name="time"
                value="Full-time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.time === "Full-time"}
              />
              <label className="font-semibold" htmlFor="part-time">
                Part-Time
              </label>
              <input
                type="radio"
                id="part-time"
                name="time"
                value="Part-time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.time === "Part-time"}
              />
              <label className="font-semibold" htmlFor="contract">
                Contract
              </label>
              <input
                type="radio"
                id="contract"
                name="time"
                value="Contract"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.time === "Contract"}
              />
            </div>
            {formik.touched.time && formik.errors.time ? (
              <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
                {formik.errors.time}
              </div>
            ) : null}
            <h3 className="font-semibold mb-2 text-orange-400 mt-2">
              Experience
            </h3>
            <div className="flex gap-2 items-center">
              <label className="font-semibold" htmlFor="experience">
                No experience
              </label>
              <input
                type="radio"
                id="experience"
                name="experience"
                value="No Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "No Experience"}
              />
              <label className="font-semibold" htmlFor="one-year">
                1 year exp
              </label>
              <input
                type="radio"
                id="one-year"
                name="experience"
                value="1 Year Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "1 Year Experience"}
              />
              <label className="font-semibold" htmlFor="two-year">
                2 year exp
              </label>
              <input
                type="radio"
                id="two-year"
                name="experience"
                value="2 Year Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "2 Year Experience"}
              />
              <label className="font-semibold" htmlFor="three-year">
                3 year exp
              </label>
              <input
                type="radio"
                id="three-year"
                name="experience"
                value="3 Year Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "3 Year Experience"}
              />
            </div>
            {formik.touched.experience && formik.errors.experience ? (
              <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
                {formik.errors.experience}
              </div>
            ) : null}
            <h3 className="font-semibold text-orange-400 mt-2 mb-2">Role</h3>
            <select
              className="px-3 py-3.5 border border-orange-600 rounded-lg w-full placeholder:font-semibold focus:border-orange-600"
              name="profession"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.profession}
            >
              <option className="text-orange-400" value="">
                Select a role
              </option>
              <option className="text-orange-400" value="HR Recruiter">
                HR Recruiter
              </option>
              <option className="text-orange-400" value="Software Developer">
                Software Developer
              </option>
              <option className="text-orange-400" value="IT Administrator">
                IT Administrator
              </option>
            </select>
            {formik.touched.profession && formik.errors.profession ? (
              <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
                {formik.errors.profession}
              </div>
            ) : null}
            <h3 className="font-semibold text-orange-400 mt-2 mb-2">
              Posted Date
            </h3>
            <input
              className="px-3 py-3.5 border border-orange-600 rounded-lg w-full placeholder:font-semibold focus:border-orange-600"
              type="date"
              name="postedDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postedDate}
            />
            {formik.touched.postedDate && formik.errors.postedDate ? (
              <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
                {formik.errors.postedDate}
              </div>
            ) : null}
            <h3 className="font-semibold text-orange-400 mt-2 mb-2">
              Candidates
            </h3>
            <input
              className="px-3 py-3.5 border border-orange-600 rounded-lg w-full placeholder:font-semibold focus:border-orange-600"
              type="number"
              name="candiDates"
              placeholder="Number of candidates"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.candiDates}
            />
            {formik.touched.candiDates && formik.errors.candiDates ? (
              <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
                {formik.errors.candiDates}
              </div>
            ) : null}
            <h3 className="font-semibold text-orange-400 mt-2 mb-2">Salary</h3>
            <input
              className="px-3 py-3.5 border border-orange-600 rounded-lg w-full placeholder:font-semibold focus:border-orange-600"
              type="text"
              name="cash"
              placeholder="Ex: $50,000"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cash}
            />
            {formik.touched.cash && formik.errors.cash ? (
              <div className="text-orange-600 text-[12px] font-semibold mt-1 ml-4">
                {formik.errors.cash}
              </div>
            ) : null}
          </div>
          <button
            className="px-4 py-2 mt-5 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700"
            type="submit"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
