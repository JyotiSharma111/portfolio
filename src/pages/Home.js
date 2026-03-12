import React from "react";
import { Link } from "react-router-dom";
import profile from "../Assets/Jyoti_Sharma.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-16 text-center md:text-left px-6 bg-gradient-to-r from-blue-100 via-purple-50 to-purple-100 max-w-6xl mx-auto">
      {" "}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Jyoti Sharma</h1>

        <p className="text-xl  text-gray-700 mb-6">
          Aspiring Frontend Developer & CRO Specialist
        </p>
        <p className="text-xl text-gray-600 mb-8">
          Combining 5+ years of experience in optimizing websites with hands-on
          React development to build impactful and user-friendly web
          applications.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            className="bg-gray-100 text-blue-500 p-3 border-2 rounded-3xl hover:bg-gray-200"
            to="projects"
          >
            View Projects
          </Link>
          <Link
            className="bg-gray-100 text-blue-500 p-3 border-2 rounded-3xl hover:bg-gray-200"
            to="contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div>
        <img
          src={profile}
          alt="Jyoti Sharma"
          className="w-40 h-40 md:w-56 md:h-56 shadow-lg rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
