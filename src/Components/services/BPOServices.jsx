import React,{useState} from 'react';
import { motion } from 'framer-motion';
import InquiryModal from '../Educational-Services/InquiryModal';
import Footer from '../../Footer';

const BPOServices = () => {

    const [showInquiryModal, setShowInquiryModal] = useState(false);

    const openInquiryModal = () => {

        setShowInquiryModal(true);



    };

    const closeModal = () => {
        setShowModal(false);
    };

    const services = [
        {
            title: 'Customer Support',
            description: 'Handling customer inquiries, providing assistance, and resolving issues through various channels like phone, email, chat, and social media.',
            icon: '/bpo-services/customer-support.jpg', 
        },
        {
            title: 'Technical Support',
            description: 'Providing IT-related support, troubleshooting technical issues, and assisting users with software or hardware problems.',
            icon: '/bpo-services/technical-support.jpg', 
        },

        {
            title: 'Telemarketing and Sales',
            description: 'Conducting outbound calls for lead generation, appointment setting, market research, and sales activities.',
            icon: '/bpo-services/tele-marketing.jpg', 
        },

        {
            title: 'Data Entry and Data Processing:',
            description: 'Entering, updating, and managing data, as well as processing information to ensure accuracy and consistency.',
            icon: '/bpo-services/data-entry.jpg', 
        },

        {
            title: 'Finance and Accounting Outsourcing (FAO)',
            description: 'Managing financial processes such as accounts payable, accounts receivable, payroll processing, and financial reporting.',
            icon: '/bpo-services/financial-services.jpg', 
        },

        {
            title: 'Human Resources Outsourcing (HRO)',
            description: 'Handling HR functions, including recruitment, employee onboarding, benefits administration, and payroll management.',
            icon: '/bpo-services/hr-outsourcing.jpg', 
        },

        {
            title: 'Supply Chain Management:',
            description: 'Managing various aspects of the supply chain, including order processing, inventory management, and logistics.',
            icon: '/bpo-services/supply-chain.jpg',
        },

        {
            title: 'Content Moderation',
            description: 'Reviewing and moderating user-generated content on websites, social media platforms, and online forums.',
            icon: '/bpo-services/content-moderation.jpg', 

        },

        {
            title: 'Research and Analytics: ',
            description: 'Conducting market research, data analysis, and business intelligence to provide valuable insights.',
            icon: '/bpo-services/buisness-analysis.jpg',
        

        },
        {
            title: 'Document Management',
            description: 'Handling tasks related to document scanning, indexing, archival, and management.',
            icon: '/bpo-services/document-management.jpg',
        
        },

    ];

    return (
        <div className="fade">
      <h1 className="text-4xl font-bold mb-8 text-center">BPO Services</h1>
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
      <Footer/>
    </div>  
    
    );
};

export default BPOServices;
