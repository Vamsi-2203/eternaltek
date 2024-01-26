import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import Footer from '../../Footer';
import PlacementProagramModel from './PlacementProagramModel';



const OnlinePlacement = () => {

  const [showProagramModal, setShowProagramModal] = useState(false);

  const openProagramModal = () => {

    setShowProagramModal(true);



  };

  const closeModal = () => {
    setShowProagramModal(false);
  };



  const [showDescription, setShowDescription] = useState({});



  const toggleDescription = (id) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  const programs = [
    { title: 'Java Full Stack Proagram', description: 'Learn the basics of Python programming language.', icon: '/courses/java.webp' },
    { title: 'Python Full Stack Proagram', description: 'Explore advanced Python concepts and applications.', icon: '/courses/advpython.jpg' },
  ];

  const opportunities = [
    {
      title: 'Internship Opportunities',
      details: [
        'Actively seek partnerships with companies to provide real-world internship opportunities for participants.',
        'Offer guidance and support during the internship to ensure a meaningful learning experience.',
      ],
    },
    {
      title: 'Mock Interviews and Q&A Sessions',
      details: [
        'Conduct regular mock interviews to help participants practice and improve their interview skills.',
        'Include comprehensive Q&A sessions to address doubts and reinforce learning.',
      ],
    },
    {
      title: 'Resume and LinkedIn Support: ',
      details: [
        'Provide expert guidance on resume preparation, ensuring that it highlights participants skills and experiences effectively.',

        'Offer assistance in optimizing LinkedIn profiles to increase visibility to potential employers         Include comprehensive Q&A sessions to address doubts and reinforce learning.',
      ],
    },
    {
      title: 'Hands-on Projects',
      details: [
        'Include practical, hands-on projects that participants can showcase in their portfolios.',
        'Encourage collaboration on projects to simulate real-world teamwork.',
      ],
    },
    {
      title: 'Previous Year Test Papers',
      details: [
        'Provide access to previous year test papers to help participants understand the format and types of questions commonly asked in placement exams.',
      ],
    },
    {
      title: 'HR Guidance',
      details: [
        'Offer guidance on soft skills, communication, and other aspects that are crucial during HR interviews.',
        'Conduct sessions on common HR interview questions and appropriate responses.',
      ],
    },
    {
      title: 'Aptitude and Reasoning',
      details: [
        'Include sessions or resources to help participants improve their aptitude and reasoning skills, which are often tested in placement exams.',
      ],
    },
    {
      title: 'Feedback Mechanism',
      details: [
        'Establish a feedback mechanism to collect input from participants and continually improve the program based on their needs.',
      ],
    },
    {
      title: 'Certification',
      details: [
        'Consider providing a certification upon successful completion of the program, which can add value to participants\' resumes.',
      ],
    },
    {
      title: 'Networking Opportunities',
      details: [
        'Facilitate networking opportunities for participants to connect with professionals in the industry.',
      ],
    },
  ];




  return (
    <div className='fade'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Online Placement Training Program </h2>
        <div className='bg-white p-6 bg-opacity-50 rounded-lg mb-6'>
          <p className="fade text-lg text-gray-800 font-semibold">Are you ready to kick-start your career with a bang? Eternaltek is here to empower you with our Placement Training program, offering 100% Placement Assistance!</p>
          <p className="fade text-lg mt-2 text-gray-800 font-semibold">An online placement training program is designed to equip individuals with the skills and knowledge necessary to secure employment in their desired field. These programs are particularly focused on preparing participants for job placements and interviews. </p>
          <p className="fade text-lg mt-2 text-gray-800 font-semibold">Online placement training programs are often designed to be flexible, allowing participants to balance their learning with other commitments. The goal is to provide a comprehensive and practical learning experience that enhances participants' employability and prepares them for success in the job market.</p>
        </div>
      </div>


      <h2 className="text-3xl mt-4 font-bold text-gray-800 mb-6 text-center">We are Offering Two Programs</h2>

      <div className="flex flex-wrap justify-center">
        {programs.map((proagram, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-200 p-4 rounded-lg m-4 flex-auto" // Adjust margin between cards and flex-auto for responsiveness
            style={{ minWidth: '250px', maxWidth: '300px', flex: '0 0 calc(33.33% - 20px)' }} // Set min and max width for each card
          >
            <img
              src={proagram.icon}
              alt={proagram.title}
              className="w-full h-auto object-contain mb-4" // Adjust image height and width
            />


            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">{proagram.title}</h3>
              <p className="text-base font-medium text-gray-800">{proagram.description}</p>
            </div>


            <div className='flex justify-center mt-6'>
              <button onClick={() => openProagramModal(index)} type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Contact Us
              </button>

              <button
                type="button"
                className="text-white ml-2 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">

                Enroll Now</button>
            </div>


          </motion.div>
        ))}

      </div>

      <h2 className="text-3xl mt-4 font-bold text-gray-800 mb-6 text-center">Extra Benefits</h2>

      {opportunities.map((opportunity, index) => (
        <div key={index} className="max-w-3xl mx-auto mb-8 bg-opacity-50 bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center cursor-pointer" onClick={() => toggleDescription(index)}>
            {showDescription[index] ? (
              <FaAngleDown className="h-6 w-6" />
            ) : (
              <FaAngleRight className="h-6 w-6 mb-3" />
            )}
            <h2 className="text-2xl font-semibold mb-4 ml-3">{opportunity.title}</h2>
          </div>
          <ul className={`ml-6 ${showDescription[index] ? 'block' : 'hidden'}`}>
            {opportunity.details.map((detail, idx) => (
              <li key={idx} className="fade mb-4 ml-3 flex items-start">
                <span className="mr-2 text-xl">&#8226;</span>
                <span className='text-lg font-semibold'>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}


      {showProagramModal && (
        // Render the InquiryModal component when showInquiryModal is true
        <PlacementProagramModel
          closeModal={() => setShowProagramModal(false)}
        />
      )}
      <Footer />
    </div>






  )
}

export default OnlinePlacement