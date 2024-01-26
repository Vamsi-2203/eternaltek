import React,{useState} from 'react';
import { motion } from 'framer-motion';
import InquiryModal from '../Educational-Services/InquiryModal';
import Footer from '../../Footer';


const ITServices = () => {

    const [showInquiryModal, setShowInquiryModal] = useState(false);

    const openInquiryModal = () => {

        setShowInquiryModal(true);



    };

    const closeModal = () => {
        setShowModal(false);
    };


    const services = [
        {
            title: 'AIML',
            description: 'Leveraging AI and ML technologies to build intelligent applications, predictive analytics, and automation solutions.',
            icon: '/it-services/ai.png',
        },
        {
            title: 'Web Development',
            description: 'Services related to the design, development, and maintenance of websites and web applications.',
            icon: '/it-services/web.png',
        },

        {
            title: 'App Development',
            description: 'Developing applications for mobile platforms, such as iOS and Android. This includes native app development, cross-platform development, and mobile app testing.',
            icon: '/it-services/app.png',
        },

        {
            title: 'E-commerce Solutions',
            description: 'eveloping online shopping platforms, payment gateways, and other e-commerce solutions for businesses looking to establish or enhance their online presence.',
            icon: '/it-services/e-commerce.jpeg',
        },

        {
            title: 'Data & Analytics',
            description: 'Services related to data management, analytics, and business intelligence to help organizations derive insights from their data for better decision-making.',
            icon: '/it-services/data-analytics.png',
        },

        {
            title: 'Application Development & Maintainance',
            description: 'Development of custom software applications tailored to meet the specific needs of clients. This includes design, coding, testing, deployment, and ongoing maintenance.',
            icon: '/it-services/app-dev.png',
        },


        {
            title: 'Testing Services',
            description: 'Quality assurance and testing services to ensure the reliability, performance, and security of software applications.',
            icon: '/it-services/testing.png',
        },

        {
            title: 'Consulting Services',
            description: 'Help organizations with strategic planning, digital transformation, business process optimization, and technology adoption.',
            icon: '/it-services/consulting.png',

        },

        {
            title: 'Industry-Specific Solutions',
            description: 'Developing and implementing industry-specific solutions across sectors such as financial services, healthcare, communications, and resources..',
            icon: '/it-services/industry.jpg',


        },
        {
            title: 'Digital Marketing',
            description: 'provides digital marketing solutions to help clients enhance their online presence, engage with customers, and drive digital marketing strategies.',
            icon: '/it-services/digital-marketing.png',

        },

    ];

    return (
        <div className="fade">
            <h1 className="text-4xl font-bold mb-8 text-center">IT Services</h1>
            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (

                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-200 p-4 rounded-lg m-4" // Adjust margin between cards
                        style={{ minWidth: '250px', maxWidth: '300px' }} // Set min and max width for each card
                    >
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-auto object-contain mb-4" // Adjust image height and width
                        />
                        <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-8">
                <button onClick={openInquiryModal} className="text-center mb-3 text-white p-4 bg-green-400 rounded-md hover:bg-green-500 transition duration-300 ease-in-out">
                    Contact Us
                </button>
                </div>

                {showInquiryModal && (
                // Render the InquiryModal component when showInquiryModal is true
                <InquiryModal
                    closeModal={() => setShowInquiryModal(false)}
                />
            )}



            <Footer />
        </div>

    );
};

export default ITServices;
