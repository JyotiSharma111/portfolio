import React from "react";
import { Link } from "react-router-dom";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Built with React and Tailwind CSS to showcase my learning journey and projects.",
      image: require("../Assets/home.png"),
      tech: ["React", "Tailwind"],
      link: "/contact",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A simple app fetching weather data using API and displaying responsive UI.",
      image: require("../Assets/Weather.png"),
      tech: ["JavaScript", "API", "Tailwind"],
      link: "/projects/weather",
    },
      {
      id: 3,
      title: "Login/Register App",
      description:
        "A React authentication project demonstrating routing, forms, localStorage, and protected dashboard for logged-in users.",
      image: require("../Assets/Register.png"),
      tech: ["React","React Router","Tailwind CSS","LocalStorage"],
      link: "/projects/auth/login",
    },
    // Add more projects here
  ];
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Development Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-600 mb-2">{project.description}</p>

            <div className="flex gap-2 mb-4">
              {project.tech.map((techItem, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <Link
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              to={project.link}
            >
              View Project
            </Link>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Projects;
