import React, { useState } from "react";
import { motion } from "framer-motion";
import { animated, useSpring } from "react-spring";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import DownloadSyllabus from "./Components/Educational-Services/DownloadSyllabus";

const services = [
  {
    title: "Educational Services",
    description: "Empowering individuals with skills & knowledge.",
    imagePath: "/home-page/education.jpg",
    altText: "Educational Services",
    page: "educational-services",
  },
  {
    title: "IT Services",
    description: "Cutting-edge solutions for business operations.",
    imagePath: "/home-page/it.jpg",
    altText: "IT Services",
    page: "itservices",
  },
  {
    title: "BPO Services",
    description: "Streamlining operations & enhancing productivity.",
    imagePath: "/home-page/bpo.jpg",
    altText: "BPO Services",
    page: "bposervices",
  },
];

const featuredCourses = [
  {
    imagePath: "/home-page/fullstackdatascience.jpg",
    title: "Full Stack Data Science Proagram",
    description:
      " In-depth course integrating statistics, programming, and machine learning for data analysis. Covers data visualization, modeling, and interpretation for informed decision-making.",
    price: 14999,
  },
  {
    imagePath: "/home-page/fswd.webp",
    title: "Full Stack Web Development Proagram",
    description:
      "Comprehensive course integrating Java for both frontend and backend, covering HTML, CSS, JavaScript, Spring Boot, databases, and deployment strategies for full-stack web development mastery.",
    price: "₹14999",
  },
  {
    imagePath: "/home-page/otpp.jpg",
    title: "Online Placement Training Program Proagram",
    description:
      "Tailored online program offering comprehensive placement training, covering aptitude, technical skills, interview preparation, and real-world scenarios for successful job placements with Assistance.",
    price: "₹2999",
  },

  {
    imagePath: "/home-page/devops.png",
    title: "DevOps Training Program",
    description:
      "DevOps is all about bridging the gap between development and operations, creating. Gain hands-on experience with industry-leading tools and practices to streamline development and deployment processes.",
    price: "₹19999",
  },
];

const Homepage = () => {
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [course, setSelectedCourse] = useState("");

  const openSyllabusModal = () => {
    setShowSyllabusModal(true);
  };

  const closeModal = () => {
    setShowSyllabusModal(false);
  };

  return (
    <div
      className="container mx-auto py-8 fade"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="text-lg text-gray-700 mb-8 mx-auto max-w-xl relative">
        <section className="text-center mb-12 mt-24">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4 fade"
          >
            Welcome to Eternaltek
          </motion.h1>
        </section>
      </div>

      <section className="text-center mb-12">
        <div className="text-lg text-gray-700 mb-8 mx-auto max-w-xl relative">
          <div className="flex justify-center items-center relative">
            <div className="bg-blue-200 h-40 w-10 rounded-full absolute left-0 -z-1" />
            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg font-semibold"
              >
                To be the driving force behind personal and professional growth,
                continuously pushing the boundaries of excellence, and serving
                as a catalyst for individuals and organizations to achieve their
                fullest potential.
              </motion.p>
            </div>
            <div className="bg-blue-200 h-40 w-10 rounded-full absolute right-0 -z-1" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg cursor-pointer flex flex-col items-center"
              style={{ maxWidth: "250px" }} // Set a maximum width for the card
            >
              <img
                src={course.imagePath}
                className="w-full h-40 object-cover rounded-lg mb-2"
                alt={course.title}
              />
              <h3 className="text-lg font-semibold text-center">
                {course.title}
              </h3>
              <p className="text-sm text-center">{course.description}</p>
              <p className="text-lg font-semibold mt-2">
                Price: {course.price}
              </p>
              <div className="flex mt-2">
                <NavLink to="/enroll">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 rounded-full text-white font-bold py-1 px-2 mr-2 whitespace-nowrap text-sm"
                  >
                    Enroll Now
                  </motion.button>
                </NavLink>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    openSyllabusModal(true);
                    setSelectedCourse(course.title);
                  }}
                  className="bg-green-500 rounded-full text-white font-bold py-1 px-2 mr-2 whitespace-nowrap text-sm"
                >
                  Download Syllabus
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center mb-8 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          We Provide Following Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-sm">{service.description}</p>

              <NavLink to={`/${service.page}`}>
                {service.imagePath && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4"
                  >
                    <img
                      src={service.imagePath}
                      className="w-full h-40 object-cover rounded-lg"
                      alt={service.altText || service.title}
                    />
                  </motion.div>
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center mb-12">
        <NavLink to={"/about-us"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white font-bold py-4 px-8 shadow-lg"
          >
            Want to know more
          </motion.button>
        </NavLink>
      </section>

      <div className="w-1/3">
        <img
          src="/welcome.png"
          style={{ width: "200px", height: "200px" }}
          alt="Welcome"
        />
      </div>
      <Footer />

      {showSyllabusModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <animated.div
            className="absolute inset-0 bg-gray-800 opacity-75"
            style={blur}
          ></animated.div>
          <div className="bg-white w-3/4 md:max-w-md mx-auto rounded-lg z-50 overflow-y-auto">
            {showSyllabusModal && (
              <DownloadSyllabus closeModal={closeModal} course={course} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
