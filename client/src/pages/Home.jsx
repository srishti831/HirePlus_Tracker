import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-20 px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to HirePlus</h1>
      <p className="text-lg mb-6">
        Track your job applications easily and stay organized in your job hunt.
      </p>
      <Link to="/jobs">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          View Jobs
        </button>
      </Link>
    </div>
  );
};

export default Home;
