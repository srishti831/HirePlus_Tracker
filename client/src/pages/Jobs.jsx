import React from "react";
import JobCard from "../components/JobCard";

const jobData = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    description: "Build beautiful UIs using React and Tailwind CSS."
  },
  {
    title: "Backend Engineer",
    company: "Cloudify",
    location: "Bangalore",
    description: "Work on scalable APIs using Node.js and MongoDB."
  }
];

const Jobs = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Available Jobs</h1>
      {jobData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default Jobs;
