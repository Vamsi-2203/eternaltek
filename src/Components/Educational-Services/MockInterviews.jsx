import React, { useState } from 'react';
import Footer from '../../Footer';
import { FaCheck, FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import InquiryModal from './InquiryModal';

const MockInterviews = () => {
    const [showDescription, setShowDescription] = useState({});

    const [showInquiryModal, setShowInquiryModal] = useState(false);

    const openInquiryModal = () => {

        setShowInquiryModal(true);



    };

    const closeModal = () => {
        setShowModal(false);
    };


    const mockInterviewBenefits = [
        {
            id: 1,
            title: 'Simulation of Real Interview Conditions',
            description: 'A mock interview aims to replicate the conditions of a real job interview as closely as possible. This includes setting up a formal interview environment, asking common interview questions, and observing professional etiquette.',
        },
        {
            id: 2,
            title: 'Role of the Interviewer',
            description: 'The interviewer in a mock interview is often an experienced professional, career coach, or mentor who can provide constructive feedback. They may assume the role of a hiring manager or recruiter.',
        },
        {
            id: 3,
            title: 'Common Interview Questions',
            description: 'Mock interviews typically cover a range of common interview questions relevant to the position or industry. This can include questions about the candidate\'s background, experience, skills, and behavioral scenarios.',
        },
        {
            id: 4,
            title: 'Behavioral Questions',
            description: 'Mock interviews often include behavioral questions, which assess how candidates have handled situations in the past. This helps interviewees practice providing specific examples from their experiences.',
        },
        {
            id: 5,
            title: 'Feedback and Evaluation',
            description: 'After the mock interview, the interviewer provides detailed feedback on the candidate\'s performance. This feedback may cover communication skills, body language, content of responses, and overall impression.',
        },
        {
            id: 6,
            title: 'Identification of Areas for Improvement',
            description: 'Mock interviews help candidates identify areas where they can improve, whether it\'s in articulating their achievements, addressing certain types of questions, or managing nervousness.',
        },
        {
            id: 7,
            title: 'Building Confidence',
            description: 'Through repeated practice in a mock interview setting, candidates can build confidence in their ability to handle different types of questions and scenarios. This increased confidence can positively impact their performance in actual interviews.',
        },
        {
            id: 8,
            title: 'Customization for Specific Industries or Roles',
            description: 'Mock interviews can be customized to simulate interviews for specific industries, job roles, or levels of seniority. This ensures that candidates are well-prepared for the types of questions relevant to their target positions.',
        },
        {
            id: 9,
            title: 'Time Management Practice',
            description: 'Mock interviews also help candidates practice time management, ensuring that they can provide comprehensive yet concise responses within the typical duration of a job interview.',
        },
        {
            id: 10,
            title: 'Overcoming Nervousness',
            description: 'Many individuals experience nervousness before and during job interviews. Mock interviews provide a safe environment to overcome this nervousness, allowing candidates to become more comfortable and composed.',
        },
        {
            id: 11,
            title: 'Repetition and Reinforcement',
            description: 'The more mock interviews a candidate participates in, the more they can reinforce good interview habits, refine their responses, and enhance their overall interview performance.',
        },
        // Add more benefits...
    ];

    const toggleDescription = (id) => {
        setShowDescription((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className='fade'>
            {/* Header Section */}
            {/* ... Header content ... */}

            {/* Main Content */}
            <main className="container mx-auto my-8">

                <h1 class="text-4xl font-bold text-center">Mock Interviews</h1>
                <p class="mt-2 text-lg text-center font-semibold">Prepare for Your Career with Mock Interviews</p>

                <section class="my-6">
                    <h2 class="text-2xl font-bold text-center mb-2">What are Mock Interviews?</h2>
                    <p className='fade text-lg text-center font-bold mt-2 '>
                        A mock interview is a simulated practice interview designed to help individuals prepare for real job
                        interviews. It is a valuable tool for job seekers to refine their interview skills, build confidence,
                        and identify areas for improvement.
                    </p>
                </section>

                <section className="my-6">
                    <h2 className="text-2xl font-bold ml-3">Key Aspects of Mock Interviews</h2>
                    <div className="mt-3">
                        <ul className="list-inside ml-3 font-semibold">
                            <div className="bg-white bg-opacity-50 p-2 rounded-md mr-2">
                                {mockInterviewBenefits.map((benefit) => (
                                    <li key={benefit.id} className="mb-4">
                                        <div className="flex items-center cursor-pointer" onClick={() => toggleDescription(benefit.id)}>
                                            {showDescription[benefit.id] ? (
                                                <FaAngleDown className="text-dark-green mr-2" />
                                            ) : (
                                                <FaAngleRight className="text-dark-green mr-2" />
                                            )}
                                            <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                        </div>
                                        <p
                                            className={`ml-8 transition-max-height ease-in-out duration-300 overflow-hidden ${showDescription[benefit.id] ? 'max-h-96' : 'max-h-0'
                                                }`}
                                        >
                                            {benefit.description.split('. ').map((sentence, index) => (
                                                <span key={index} className="flex items-start">
                                                    <span className="mr-1 mb-1 text-2xl">&#8226;</span>
                                                    <span className="ml-2 mt-1">{sentence}</span>
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </div>
                </section>

                <section class="my-6 ml-3">
                    <h2 class="text-2xl font-bold">Interested in Mock Interviews?</h2>
                    <p class="mt-3 font-semibold">
                        If you are interested in participating

                        <a
                            onClick={openInquiryModal}
                            className="bg-blue-500 ml-2 hover:bg-blue-600 text-white font-bold mt-2 py-2 px-2 rounded inline-block"
                        >
                            Register Now!
                        </a>
                    </p>

                    {showInquiryModal && (
                        // Render the InquiryModal component when showInquiryModal is true
                        <InquiryModal
                            closeModal={() => setShowInquiryModal(false)}
                        />
                    )}



                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MockInterviews;
