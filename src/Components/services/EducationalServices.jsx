import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";
import { FaUserGraduate, FaCheckCircle, FaUserCircle, FaBook, FaGlobe } from 'react-icons/fa';
import Footer from '../../Footer';
import { NavLink } from 'react-router-dom';

const NumberAnimated = ({ value, text }) => {
    const props = useSpring({
        from: { number: 0 },
        to: { number: value },
        config: { duration: 1000 },
    });

    return (
        <div className="flex items-center">
            <animated.p className="text-2xl font-semibold text-white mr-1">
                {props.number.interpolate((val) => `${Math.floor(val)}+`)}
            </animated.p>
            <p className="text-2xl font-semibold text-white">{text}</p>
        </div>
    );
};





const EducationalServices = () => {
    const educationalServices = [
        {
            title: 'Online Placement',
            image: '/educational-services/placement.jpg',
            page:'onlineplacement'
        },
        /*
        {
            title: 'Internship Program',
            image: '/educational-services/internship.avif',
            page:'internship-proagram'
        },
        */
        {
            title: 'Courses',
            image: '/educational-services/courses.jpg',
            page:'courses'
        },
        {
            title: 'Mock Interviews',
            image: '/educational-services/mockinterviews.jpg',
            page:'mockinterviews'
        },
        {
            title: 'Workshops',
            image: '/educational-services/workshops.jpg',
            page:'workshop'
        },
        {
            title: 'Quiz (Comming Soon)',
            image: '/educational-services/quiz.jpg'
        },
        {
            title: 'Masterclasses',
            image: '/educational-services/masterclass.jpg',
            page:'masterclass'
        }
    ];

    const benefitItems = [
        "Flexibility",
        "Reduced Cost",
        "More Free Time",
        "Increased Course Variety",
        "Career Advancement Opportunities",
        "Increased Collaborations",
        "Personalized Education",
        "Immediate Feedback",
        "A Customizable Learning Environment",
        "Helps in Networking",
    ];

    const reviews = [
        {
            name: ' Dasa Vardhan Reddy',
            review: 'I got a good knowledge through the internship on data science that help me to get a job. Thank you so much Rapture Technologies',
        },
        {
            name: 'P. Babjan',
            review: 'One month back I took machine learning course with internship with rapture I can clear understand the topics of each algorithm..',
        },

        {

            name: 'Mani Kumar Reddy',
            review: 'I last my fear about interview because of Rapture Mock interview I attend the Mock interview with Rapture they guide me how to clear the interviews.',
        },

        {

            name: 'A. Charitha',
            review: 'Placement Training Program is great because They explain in different and easy way of Topic',
        },

        {

            name: 'S. Chandana',
            review: 'I attend the webinar of how to Prepare for interview this webinar help me for my interview prepare and I used AI Tools for interview Preparation."',
        },

    ];

return (
    <div className='container mx-auto py-8 fade'>
    <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Educational Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center lg:pl-20 lg:pr-8">
      {educationalServices.map((service, index) => (
        <NavLink key={index} to={`/${service.page}`} className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-200 p-4 rounded-lg m-4 flex flex-col items-center"
            style={{ maxWidth: '250px', width: '100%' }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-contain mb-4"
              style={{ maxHeight: '200px', width: '100%' }}
            />
            <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-sm text-gray-600"></p>
          </motion.div>
        </NavLink>
      ))}
    </div>
  
  

  

        <h2 className="text-2xl mt-5 font-bold mb-4 text-center">Benefits of Online Education</h2>
        <div className="space-y-4 max-w-md mx-auto"> {/* Adjusted max-width here */}
            {benefitItems.map((benefit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="benefit-item p-2 rounded-md bg-gray-100"
                    style={{ maxWidth: '80%', margin: '0 auto', fontSize: '0.9rem', marginTop: index === 0 ? 0 : '1rem' }}
                >
                    <FaCheckCircle className="w-5 h-5 text-green-500 inline-block align-middle mr-2" />
                    <p className="inline-block align-middle">{benefit}</p>
                </motion.div>
            ))}
        </div>

        <h2 className="text-2xl font-bold m-4 text-center">Student's Reviews</h2>


        <div className="flex flex-wrap justify-center mb-10">
            {reviews.map((review, index) => (
                <div key={index} className="flex max-w-md bg-white rounded-lg p-4 shadow-md m-4 mb-8">
                    <div className="flex-shrink-0">
                        <FaUserCircle className="text-4xl text-gray-500" />
                    </div>
                    <div className="ml-4">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <p className="text-gray-600">{review.review}</p>
                    </div>
                </div>
            ))}
        </div>

     

        <div className="fixed bottom-0 left-0 w-full bg-gray-900 py-4 px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="flex items-center bg-blue-600 rounded-lg mb-2 lg:mb-0 lg:mr-4 px-4 py-2">
                    <FaUserGraduate className="text-3xl text-white mr-3" />
                    <NumberAnimated value={200} text="Students Enrolled" />
                </div>
                <div className="flex items-center bg-green-600 rounded-lg mb-2 lg:mb-0 lg:mx-4 px-4 py-2">
                    <FaBook className="text-3xl text-white mr-3" />
                    <NumberAnimated value={20} text="Courses" />
                </div>
                <div className="flex items-center bg-yellow-600 rounded-lg px-4 py-2">
                    <FaGlobe className="text-3xl text-white mr-3" />
                    <NumberAnimated value={10} text="Countries" />
                </div>
            </div>
        </div>
            
       <Footer/>

    </div>

);
};

export default EducationalServices;
