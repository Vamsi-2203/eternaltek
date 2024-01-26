import Footer from "./Footer"
import { motion } from 'framer-motion';


const Aboutus = () => {
  const serviceData = [
    {
      title: "Educational Services",
      image: "/journey.jpg",
      description: "Our Educational Services division is dedicated to empowering individuals with the knowledge and skills they need to excel in their chosen fields. We offer a variety of  opportunities, including internships, courses, and placement training. Whether you're a student looking to gain practical experience, a professional seeking to upskill, or an organization in need of a skilled workforce, our educational services are designed to fulfill your unique requirements",
    },

    {
      title: "Educational Services",
      image: "/education.jpg",
      description: "In a world where technology plays a pivotal role in business operations, our IT Services team is at the forefront of delivering cutting-edge solutions. From software development and cloud services to cybersecurity and IT consulting, we help businesses leverage technology to stay competitive and grow. Our dedicated team of experts works with you to design and implement IT solutions that are tailored to your specific needs.We are dedicated for your growth."
    },

    {
      title: "BPO Services",
      image: "/bpo.jpg",
      description: "Our BPO Services division specializes in delivering high-quality business process outsourcing solutions that enable companies to streamline operations, reduce costs, and improve efficiency. We provide a wide range of BPO services, including customer support, data entry, back-office operations, and more. Our focus is on enhancing your organization's productivity and enabling you to concentrate on your core competencies",

    }


  ];

  const welcomeMessage = `Welcome to Eternaltek – Your Gateway to Endless Possibilities! At Eternaltek, we are committed to transforming your dreams into realities by offering a wide range of services that empower individuals and organizations to thrive in today's dynamic world. Our core mission revolves around three pillars: Educational Services, IT Services, and BPO Services. With our comprehensive and innovative solutions, we aim to make a lasting impact on your journey towards success.`;


  const ServiceCard = ({ title, imageUrl, description }) => {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-md m-4 bg-white bg-opacity-80 flex flex-col justify-between">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-lg text-center font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };


  return (
    <div className='fade'>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h2>
          <div className='bg-white p-6 rounded-lg mb-6'>
            <p className="fade text-lg text-gray-800 font-semibold">{welcomeMessage}</p>
          </div>


          <div className="flex flex-wrap justify-center fade font-semibold">
            {serviceData.map((data, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-200 p-4 rounded-lg m-4" // Adjust margin between cards
                style={{ minWidth: '200px', maxWidth: '370px' }} // Set min and max width for each card
              >
                <ServiceCard
                  key={index}
                  title={data.title}
                  imageUrl={data.image}
                  description={data.description}
                />
              </motion.div>
            ))}
          </div>




          {/* Add more ServiceCard components with service data */}

          {/* Other content */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-5">Why Choose Eternaltek?</h2>

          {/* Why Choose Eternaltek Content */}
          <div className="text-gray-800 mb-6">
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">
                <span className="font-semibold">Quality & Innovation:</span> We constantly strive to deliver services that are of the highest quality and infused with innovative solutions.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Client-Centric Approach:</span> Our services are tailored to meet the unique needs of our clients, ensuring a personalized experience.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Experienced Team:</span> Our team is comprised of industry experts who bring a wealth of knowledge and experience to every project.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Commitment to Excellence:</span> We are committed to excellence in everything we do, aiming to exceed our clients' expectations.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Endless Opportunities:</span> At Eternaltek, we believe that the opportunities are endless, and we are here to help you seize them.
              </li>
            </ul>

            <p>
              Eternaltek is not just a service provider; we are your partner on your journey to success. We are passionate about helping individuals and organizations achieve their full potential. Join us on this eternal quest for excellence, and together, we will pave the way for a brighter and more prosperous future.
            </p>
            <p className="mt-4" ss>
              Contact us today to discover how we can assist you in achieving your goals. Your success is our success, and at Eternaltek, we are dedicated to making your dreams eternal.
            </p>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Aboutus;
