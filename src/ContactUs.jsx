import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className='fade'>
        <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-gray-500 mr-3" />
              <span className="text-gray-800">Email:</span>
              <a href="mailto:team@eternaltek.in" className="text-blue-500 ml-1">
                team@eternaltek.in
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-gray-500 mr-3" />
              <span className="text-gray-800">Phone No:</span>
              <span className="ml-1">+91 9966864038</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />
              <span className="text-gray-800">Address:</span>
              <span className="ml-1">ANANTAPURAM, ANDHRA PRADESH, INDIA - 515001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactPage;
