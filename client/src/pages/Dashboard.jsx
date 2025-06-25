import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
    } else {
      alert("Unauthorized");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleJobTracker = () => {
    navigate("/jobs");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-4">
      <h1 className="text-2xl font-bold mb-4">{message}</h1>
      <div className="flex gap-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
        <button
          onClick={handleJobTracker}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Go to Job Tracker
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
