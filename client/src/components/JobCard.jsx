import React from "react";

const JobCard = ({ title, desc }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default JobCard;


// import React from "react";

// const JobCard = ({ title, company, location, description }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mb-6 text-left text-gray-800">
//       <h2 className="text-xl font-semibold mb-2">{title}</h2>
//       <p className="text-sm text-gray-600 mb-1">{company} - {location}</p>
//       <p className="text-sm mb-4">{description}</p>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//         Apply Now
//       </button>
//     </div>
//   );
// };

// export default JobCard;
