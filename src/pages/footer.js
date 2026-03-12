import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <p className="text-lg font-semibold">
          Jyoti Sharma
        </p>

        <p className="text-gray-400 text-sm mt-1">
          Aspiring Frontend Developer & CRO Specialist
        </p>

        <div className="flex justify-center gap-6 mt-4 text-xl">

          <a
            href="https://github.com/"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Jyoti Sharma
        </p>

      </div>
    </footer>
  );
};

export default Footer;