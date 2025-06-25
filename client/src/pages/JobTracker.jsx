import React, { useEffect, useState } from "react";

const JobTracker = () => {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Pending");
  const [dateApplied, setDateApplied] = useState("");
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchJobs = async () => {
    const res = await fetch("http://localhost:5000/api/jobs", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddJob = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ company, role, status, dateApplied }),
    });
    const data = await res.json();
    setJobs([...jobs, data.job]);
    setCompany("");
    setRole("");
    setStatus("Pending");
    setDateApplied("");
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setJobs(jobs.filter((j) => j.id !== id));
  };

  const handleEdit = async (id, updatedJob) => {
    const res = await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedJob),
    });
    const data = await res.json();
    setJobs(jobs.map((j) => (j.id === id ? data.job : j)));
  };

  const filteredJobs = jobs.filter((job) =>
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Job Tracker</h2>

      <form onSubmit={handleAddJob} className="mb-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className="border p-2 rounded" required />
        <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" className="border p-2 rounded" required />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded">
          <option>Pending</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <input type="date" value={dateApplied} onChange={(e) => setDateApplied(e.target.value)} className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add</button>
      </form>

      <input
        type="text"
        placeholder="Search by company or role"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded"
      />

      {filteredJobs.length === 0 ? (
        <p className="text-center">No jobs found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredJobs.map((job) => (
            <li key={job.id} className="p-4 border rounded flex justify-between items-center">
              <div>
                <p className="font-semibold">{job.company}</p>
                <p className="text-sm text-gray-600">{job.role}</p>
                <p className="text-sm">Status: {job.status}</p>
                <p className="text-sm">Applied: {job.dateApplied}</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleDelete(job.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                <button
                  onClick={() => handleEdit(job.id, { ...job, status: "Interview" })}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Mark Interview
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobTracker;


