import { FaHourglass, FaRupeeSign,FaCheck } from 'react-icons/fa';
import Footer from '../../Footer';

const Workshops = () => {
    const workshops = [
        {
          title: "Career Guidance Workshop",
          duration: "Duration: 2-3 hours",
          fee: "Fee: ₹99 Excl. GST",
          description: "After completion of any type of Graduation, you can learn how to choose a career, explore career opportunities, and much more through this workshop.",
          imageUrl: '/workshops/career-guidance.webp'
        },
        {
          title: "AI Tools Workshop",
          duration: "Duration: 2-3 Hours",
          fee: "Fee: ₹199 Excl. GST",
          description: "By using AI Tools, you can work 10x faster in life. This workshop is crucial for students and working professionals.",
          imageUrl: '/workshops/aitools.png'
        },
        {
          title: "Chat GPT Workshop",
          duration: "Duration: 2-3 hours",
          fee: "Fee: ₹399 Excl. GST",
          description: "You will learn all about Chat GPT including how to use it, how to write prompts, get answers, summarize stories, and even learn how to earn money.",
          imageUrl: '/workshops/chatgpt-workshop.jpg'
        },
        {
          title: "Data Science Workshop",
          duration: "Duration: 2-3 hours",
          fee: "Fee: ₹299 Excl. GST",
          description: "Learn Data Science with a roadmap and tools as a beginner or non-IT individual.",
          imageUrl: '/workshops/data-science.jpeg'
        },
        {
          title: "Python Workshop",
          duration: "Duration: 2-3 Hours",
          fee: "Fee: ₹199 Excl. GST",
          description: "A simple crash course on Python with practical implementation.",
          imageUrl: '/workshops/python-workshop.jpeg'
        },
        {
          title: "Placement Guidance Workshop",
          duration: "Duration: 2-3 Hours",
          fee: "Fee: ₹199 Excl. GST",
          description: "Complete guidance for placements including resume preparations and projects.",
          imageUrl: '/workshops/placement-workshop.jpg'
        }
      ];
      
  return (
    <div className="fade">
      <h1 className="text-3xl font-bold mb-4 text-center">Workshops</h1>
      <div className="bg-gray-800 w-full text-white p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">What You Get After Workshop</h2>
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center mb-2">
            <FaCheck className="text-green-500 mr-2" />
            <span>Domain Knowledge</span>
          </div>
          <div className="flex items-center mb-2">
            <FaCheck className="text-green-500 mr-2" />
            <span>Idea to Implement</span>
          </div>
          <div className="flex items-center mb-2">
            <FaCheck className="text-green-500 mr-2" />
            <span>Workday Certificate</span>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center">Workshops List </h1>


      <div className="flex flex-wrap justify-center">
       {workshops.map((workshop, index) => (
        <div key={index} className="max-w-xl rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4 relative">
          <div className="px-8 py-4">
            <div className="font-bold text-yellow-300 text-xl mb-2">{workshop.title}</div>
            <div
              className="relative rounded-lg"
              style={{
                minHeight: '150px',
                backgroundImage: `url(${workshop.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"
              >
                
              </div>
              <p className="text-white text-lg font-semibold absolute top-0 left-0 right-0 bottom-0 p-4">{workshop.description}</p>
            </div>
            <div className="flex items-center space-x-4 justify-between mt-4">
              <div className="flex items-center">
                <FaHourglass className="mr-2 mt-1" />
                <span>{workshop.duration}</span>
              </div>
              <div className="flex items-center">
                <FaRupeeSign className="mr-2" />
                <span>{workshop.fee}</span>
              </div>
              <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer/>

  </div>
  );
};

export default Workshops;