import React from "react";
import JobCard from "./components/JobCard";

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">HirePlus</h1>
      </header>

      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Smart Hiring Platform</h2>
        <p className="text-lg max-w-xl mx-auto">
          Find top talent or apply to amazing jobs. We bridge recruiters and job-seekers efficiently.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Get Started
        </button>
      </section>

      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Top Jobs</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <JobCard title="Frontend Developer" desc="React, Tailwind, API integration. Remote available." />
          <JobCard title="Backend Engineer" desc="Node.js, MongoDB, REST APIs. On-site, Pune." />
          <JobCard title="Talent Recruiter" desc="Sourcing, Screening, Scheduling. Hybrid role." />
        </div>
      </section>

      <section className="p-10 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-4 text-center">About HirePlus</h3>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          HirePlus connects employers and job seekers with smart filters, verified listings, and real-time application tracking.
        </p>
      </section>

      <section className="p-10 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>📧 Email: support@hireplus.com</p>
      </section>

      <footer className="text-center py-4 bg-blue-600 text-white">
        &copy; 2025 HirePlus. All rights reserved.
      </footer>
    </div>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import JobTracker from "./pages/JobTracker"; 
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoutes from "./components/ProtectedRoutes";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/jobs" element={<JobTracker />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;


