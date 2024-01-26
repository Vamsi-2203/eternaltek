import React,{useState} from 'react'
import { motion } from 'framer-motion';
import Footer from '../../Footer';



const InternshipProagram = () => {
  const internshipPrograms = [
  {
    title: 'Data Science',
    description: 'Explore data analysis, machine learning, and statistical models to derive insights from data.',
    icon: '/internshipproagrams/data-science.png'
  },
  {
    title: 'Machine learning',
    description: 'Dive into algorithms and techniques enabling machines to learn patterns and make predictions from data.',
    icon: '/internshipproagrams/ml.avif'
  },
  {
    title: 'Deep learning',
    description: 'Discover neural networks and advanced models capable of learning from vast amounts of data.',
    icon: '/internshipproagrams/dl.jpg'
  },
  {
    title: 'Natural Language Processing',
    description: 'Learn how computers understand and process human language, enabling text analysis and generation.',
    icon: '/internshipproagrams/nlp.jpg'
  },
  {
    title: 'Computer Vision',
    description: 'Explore the field of enabling machines to visually perceive the world and make decisions based on it.',
    icon: '/internshipproagrams/cv.jpg'
  },
  {
    title: 'Python Developer',
    description: 'Develop applications using Python programming language for various domains and industries.',
    icon: '/internshipproagrams/fullstackpython.png'
  },
  {
    title: 'Java Developer',
    description: 'Design and build applications using Java programming language for a wide range of platforms.',
    icon: '/internshipproagrams/java.webp'
  },
  {
    title: 'Android Developer',
    description: 'Create innovative mobile applications for Android devices using Java or Kotlin.',
    icon: '/internshipproagrams/android.avif'
  },
  {
    title: 'Marketing',
    description: 'Engage in strategies to promote products or services, utilizing digital platforms and consumer insights.',
    icon: '/internshipproagrams/marketing.avif'
  },
  {
    title: 'Frontend Developer',
    description: 'Craft engaging and interactive user interfaces using HTML, CSS, and JavaScript technologies.',
    icon: '/internshipproagrams/frontend.avif'
  },
  {
    title: 'Backend Developer',
    description: 'Develop and maintain server-side logic and databases to ensure seamless application functionality.',
    icon: '/internshipproagrams/backend.jpg'
  },
  {
    title: 'Full Stack Web Developer',
    description: 'Master both frontend and backend technologies to create comprehensive web applications.',
    icon: '/internshipproagrams/fullstack.avif'
  },
  {
    title: 'Video Editor',
    description: 'Edit and manipulate video content to create captivating and visually appealing stories.',
    icon: '/internshipproagrams/videoeditor.avif'
  },
  {
    title: 'UI & UX Developer',
    description: 'Design user interfaces and experiences that enhance user satisfaction and interaction.',
    icon: '/internshipproagrams/uiux.avif'
  },
  {
    title: 'Content Writer',
    description: 'Create compelling written content for various platforms to engage and inform audiences.',
    icon: '/internshipproagrams/contentwriter.avif'
  }
];


  return (
    <div className='fade'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Internship Proagram</h2>
        <div className='bg-white p-6 bg-opacity-50 rounded-lg mb-6'>
          <p className="fade text-lg text-gray-800 font-semibold">We Provide Following Internship Proagrams</p>
         
        </div>
      </div>


      <h2 className="text-3xl mt-4 font-bold text-gray-800 mb-6 text-center">We are Offering {internshipPrograms.length} Programs</h2>

      <div className="flex flex-wrap justify-center">
        {internshipPrograms.map((proagram, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-200 p-4 rounded-lg m-4 flex-auto" 
            style={{ minWidth: '250px', maxWidth: '300px', flex: '0 0 calc(33.33% - 20px)' }} 
          >
            <img
              src={proagram.icon}
              alt={proagram.title}
              className="w-full h-auto object-contain mb-4" 
            />


            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">{proagram.title}</h3>
              <p className="text-base font-medium text-gray-800">{proagram.description}</p>
            </div>


          </motion.div>
        ))}

      </div>

      <section class="my-6 ml-3">
                    <h2 class="text-2xl font-bold text-center">Interested in Internship Proagram ?</h2>
                    <p class="mt-3 font-semibold text-center">
                        If you are interested in applying 

                        <a
                            href="https://forms.gle/JpLkJJY1pkEJ5GJj6"
                            className="bg-blue-500 ml-2 hover:bg-blue-600 text-white font-bold mt-2 py-2 px-2 rounded inline-block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Register Now!
                        </a>
                    </p>



                </section>
    
      
    <Footer/>
    </div>
    





  )
}

export default InternshipProagram;