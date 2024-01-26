import React from 'react';
import Footer from '../../Footer';

const MasterClass = () => {
  const cardData = [
    {
      image: '/masterclass/careerguidance.webp',
      title: 'Career Guidance Masterclass',
      description: 'Career Guidance is important in Life. We can clear all the doubt regarding the Career.',
    },
    {
      image: '/masterclass/advpython.jpg',
      title: 'Python Masterclass',
      description: 'Learn Python in just 2 hours from Basics to Advanced topics. Essential for Interviews.',
    },
    {
      image: '/masterclass/ml.jpg',
      title: 'Machine Learning Project Masterclass',
      description: 'Top Resume Machine Learning Projects for beginners. Enhance your Resume significantly.',
    },
    {
      image: '/masterclass/dl.webp',
      title: 'Deep Learning Project Masterclass',
      description: 'Top Resume Deep Learning Projects for beginners. Enhance your Resume significantly.',
    },
    {
      image: '/masterclass/nlp.jpg',
      title: 'Natural Language Processing Masterclass',
      description: 'Top Resume Projects for Beginners in NLP Domain. Boost your chances of getting a job.',
    },
    {
      image: '/masterclass/data-science.png',
      title: 'Data Science Interview Questions Masterclass',
      description: 'Comprehensive coverage of Data Science Interview Questions asked in MNCs and Startups.',
    },
  ];

  return (
   
    <div className='fade mx-auto'>
      <h3 className='text-center text-3xl font-bold mb-6'>Masterclass</h3>
      <p className='text-center font-semibold text-lg mb-4'>
        Learn Skills That Will Make Your Career Grow Fast… <br />
        Masterclasses that help you to boost your career grow 10x faster
      </p>
      <div className='max-w-2xl mx-auto'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='bg-white mb-3 p-4 rounded-2xl'
          >
            <div className='flex flex-row-reverse md:flex-row'>
              <div className='w-1/2'>
                <img src={card.image} alt='Image' className='w-full h-auto rounded-l-lg' />
              </div>
              <div className='w-1/2 ml-4 mt-4 p-4'>
                <h2 className='text-xl font-semibold mb-4'>{card.title}</h2>
                <p className='text-zinc-600 text-lg mb-4'>{card.description}</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded'>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MasterClass;