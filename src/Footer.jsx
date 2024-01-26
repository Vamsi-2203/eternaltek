import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-400 bottom-0 left-0 w-full py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between lg:items-start">
        <div className="w-full lg:w-1/4 lg:mb-0 lg:mr-4 text-center lg:text-left">
          <img className="h-10 w-auto mb-4 lg:mx-auto lg:ml-0" src="./logo.png" alt="EternalTek" />
          <p className='text-base font-semibold text-gray-700 lg:ml-8'>At Eternaltek, our mission is to empower individuals and organizations by offering comprehensive educational services, cutting-edge IT solutions, and efficient BPO services.</p>
        </div>
        <div className="w-full lg:w-1/4 lg:mb-0 text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 lg:mb-2">Get in Touch</h3>
          <ul className="list-disc pl-4 lg:pl-0 text-left">
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600 mb-2">
              <FaEnvelope className="mr-2" />
              <p className="text-base font-semibold lg:text-left">eternaltek.info@gmail.com</p>
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600 mb-2">
              <FaPhoneAlt className="mr-2" />
              <p className="text-base font-semibold lg:text-left">+91 9966864038</p>
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              <p className="text-base font-semibold lg:text-left">ANANTAPURAM, ANDHRA PRADESH, INDIA - 515001</p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mt-2 lg:mb-0 text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 lg:mb-2">Our Services</h3>
          <ul className="list-disc pl-4 lg:pl-0 text-left">
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600 mb-2">
              <NavLink to="/educational-services" className="text-base font-semibold lg:text-left">Education Services</NavLink>
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600 mb-2">
              <NavLink to="/itservices" className="text-base font-semibold lg:text-left">IT Services</NavLink>
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600">
              <NavLink to="/bposervices" className="text-base font-semibold lg:text-left">BPO Services</NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mt-2 lg:mb-0 text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 lg:mb-2">Quick Links</h3>
          <ul className="list-disc pl-4 lg:pl-0 text-left">
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600 mb-2">
              <NavLink to="/privacypolicy" className="text-base font-semibold lg:text-left">Privacy Policy</NavLink>
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600 mb-2">
              <NavLink to="/terms&conditions" className="text-base font-semibold lg:text-left">Terms and Conditions</NavLink>
            </li>
            <li className="flex items-center justify-center lg:justify-start text-gray-800 hover:text-gray-600">
              <NavLink to="/refund" className="text-base font-semibold lg:text-left">Refund Policy</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
