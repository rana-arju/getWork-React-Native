import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": "61d5cc8ac9msh628943875faadd1p1807c8jsnd8950e7fd940",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      alert("There is an error!");
    } finally {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
