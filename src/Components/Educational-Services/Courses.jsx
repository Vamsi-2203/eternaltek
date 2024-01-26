import React,{useState} from "react";
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import Modal from "./Modal";
import Footer from '../../Footer';

const Courses = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (index) => {  
        if(services[index].isAvailable){
            setSelectedService(services[index]);
            console.log(services[index])
            setShowModal(true);
        }

        else{
            alert("Course Unavailable or Coming Soon")
            return
        }

       
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const services = [
        { title: 'Python For Beginners', description: 'Learn the basics of Python programming language.', icon: '/courses/python.jpeg',isAvailable:true },
        { title: 'Advance Python', description: 'Explore advanced Python concepts and applications.', icon: '/courses/advpython.jpg', isAvailable: true },
        { title: 'Python All in One', description: 'Comprehensive course covering various aspects of Python.', icon: '/courses/python3.webp',isAvailable:true },
        { title: 'Java For Beginners', description: 'Introduction to Java programming language.', icon: '/courses/java.webp',isAvailable:true },
        { title: 'Data Science for Beginners', description: 'Basic concepts and tools of Data Science.', icon: '/courses/data-science.png', isAvailable: true },
        { title: 'MySQL Zero to Hero', description: 'Complete guide from MySQL basics to advanced topics.', icon: '/courses/mysql.jpg', isAvailable: true },
        { title: 'Machine Learning with Python', description: 'Introduction to Machine Learning using Python.', icon: '/courses/ml.jpg', isAvailable: true },
        { title: 'Deep Learning with Python', description: 'Exploring Deep Learning techniques using Python.', icon: '/courses/dl.jpg', isAvailable: true },
        { title: 'Natural Language Processing with Python', description: 'Understanding Natural Language Processing.', icon: '/courses/nlp.jpg', isAvailable: true },
        { title: 'Data Science Resume Projects (Coming Soon)', description: 'Practical projects to build a Data Science portfolio.', icon: '/courses/dsr.jpg' },
        { title: 'MySQL for Beginners', description: 'Fundamentals and usage of MySQL a relational database management system.', icon: '/courses/mysql2.jpg',isAvailable:true },
        { title: 'Advance MySQL (Coming Soon)', description: 'Advanced topics related to SQL queries in MySQL RDBMS Database System.', icon: '/courses/mysql-advanced.jpg' },
        { title: 'Frontend Developer', description: 'Essential skills for Frontend Web Development.', icon: '/courses/fronttend-dev.jpg', isAvailable: true },
        { title: 'R language (Coming Soon)', description: 'Introduction to R programming language.', icon: '/courses/rlang.png' },
        { title: 'Mongo DB (Coming Soon)', description: 'Fundamentals of MongoDB database.', icon: '/courses/mongodb.svg' },
        { title: 'Python Django (Coming Soon)', isAvailable: false, description: 'Building web applications with Python Django.', icon: '/courses/djangopy.png' },
        { title: 'Flask (Coming Soon)', description: 'Developing web applications using Flask framework.', icon: '/courses/flask-developer.jpg' },
        { title: 'Power BI Course (Coming Soon)', description: 'Introduction to Power BI for data analysis and visualization, get hands-on experience on Powerbi.', icon: '/courses/powerbi.png' },
        { title: 'Advance Power BI (Coming Soon)', description: 'Advanced features and analytics in Power BI.', icon: '/courses/adv-powerbi.webp' },
        { title: 'MS Excel Course (Coming Soon)', description: 'Mastering Microsoft Excel for data manipulation and analysis. Get advanced Excel knowledge', icon: '/courses/excel.jpg' },
        { title: 'Python Data Structures (Coming Soon)', description: 'Understanding and implementing data structures in Python.', icon: '/courses/pyds.png' },
        { title: 'Java Data Structures (Coming Soon)', description: 'Understanding and implementing data structures in Java.', icon: '/courses/javads.jpg' },
      ];
      

    return (
        <div className="container mx-auto py-8 fade">
            <h1 className="text-4xl font-bold mb-8 text-center">Course List</h1>
            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-200 p-4 rounded-lg m-4 flex-auto" // Adjust margin between cards and flex-auto for responsiveness
                        style={{ minWidth: '250px', maxWidth: '300px', flex: '0 0 calc(33.33% - 20px)' }} // Set min and max width for each card
                    >
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-auto object-contain mb-4" // Adjust image height and width
                        />

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-base font-medium text-gray-800">{service.description}</p>
                        </div>



                        <div className='flex justify-center mt-6'>
                            <button onClick={() => openModal(index)} type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                Download Syllabus
                            </button>

                            <button
                             type="button"
                              className="text-white ml-2 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                
                            Buy Now</button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <animated.div className="absolute inset-0 bg-gray-800 opacity-75" style={blur}></animated.div>
                    <div className="bg-white w-3/4 md:max-w-md mx-auto rounded-lg z-50 overflow-y-auto">
                        {showModal && (
                            <Modal closeModal={closeModal} service={selectedService} />
                        )}
                    </div>
                </div>
            )}
            <Footer />
        </div>

    );
};

export default Courses