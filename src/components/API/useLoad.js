import { useState, useEffect } from "react";
import API from "./API.js";

const useLoad = (endpoint) => {
  // State ---------------------------------------
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Methods ---------------------------------------
  const loadRecords = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setRecords(response.result);
  };

  useEffect(() => {
    loadRecords(endpoint);
  }, []);

  // Return ---------------------------------------

  return [records, setRecords, isLoading, loadRecords];
};

export default useLoad;
