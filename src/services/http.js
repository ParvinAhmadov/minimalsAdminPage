import axios from "axios";
export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3002/joblist");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:3002/joblist",
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const fetchDataById = async (id) => {
  const response = await axios.get(`http://localhost:3002/joblist/${id}`);
  return response.data;
};

export const deleteData = async (id) => {
  const response = await axios.delete(`http://localhost:3002/joblist/${id}`);
  return response.data;
};

export const updateData = async (id, updatedJob) => {
  const response = await axios.put(
    `http://localhost:3002/joblist/${id}`,
    updatedJob
  );
  return response.data;
};
