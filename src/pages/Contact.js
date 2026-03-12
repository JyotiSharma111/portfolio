import { useRef } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1l8ree",
        "template_8031bgy",
        form.current,
        "JuzSlbdUeU8y_qFR3",
      )
      .then(
        (result) => {
          alert("Message sent succesfully");
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong.", error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Contact Me
      </h1>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <p>
            Email:{" "}
            <a
              href="mailto:minikanva@gmail.com"
              className="text-blue-500 hover:underline"
            >
              minikanva@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/jyoti-sharma-168474179/"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/jyoti
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/JyotiSharma111"
              className="text-blue-500 hover:underline"
            >
              github.com/jyoti
            </a>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            className="p-3 border rounded-ms focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your email"
            className="p-3 border rounded-ms focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
