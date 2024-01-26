import React, { useState } from "react";
import axios from 'axios';
import { animated, useSpring } from "react-spring";

const InquiryModal = ({ closeModal }) => {

    const [formValues, setFormValues] = useState({
        userName: '',
        userEmail: '',
        userPhoneNo: '',
        message:''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };


    const handleSubmit = async (event) => {

        if (!formValues.userName || !formValues.userEmail || !formValues.userPhoneNo || !formValues.message) {
            alert('Please fill in all required fields.');
            return;
        }

        event.preventDefault();
        console.log('Form values:', formValues);



        console.log("form submitted");

        closeModal();
        saveData()
    }


    const saveData = async () => {
        try {
            const emailResponse = await axios.post('http://localhost:3000/api/send-inquiry-email', {
                name: formValues.userName,
                email: formValues.userEmail,
                phoneNo: formValues.userPhoneNo,
                message: formValues.message
            });


            console.log('Email sent successfully:', emailResponse.data);

        } catch (error) {
            console.error('Error:', error);
        }

    }





    const blur = useSpring({
        from: { backdropFilter: 'blur(0px)' },
        to: { backdropFilter: 'blur(10px)' },
    });


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <animated.div className="absolute inset-0 bg-gray-800 opacity-75" style={blur}></animated.div>
            <div className="bg-white w-3/4 md:max-w-md mx-auto rounded-lg z-50 overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        {/* Form fields */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="border rounded-md p-2"
                            onChange={handleInputChange}
                            name="userName"
                            value={formValues.userName}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={formValues.userEmail}
                            className="border rounded-md p-2"
                            name="userEmail"
                            onChange={handleInputChange}

                        />

                        <input
                            type="tel"
                            value={formValues.userPhoneNo}
                            placeholder="Phone Number"
                            className="border rounded-md p-2"
                            name="userPhoneNo"
                            onChange={handleInputChange}
                        />

                        <textarea
                            placeholder="Your message"
                            className="border rounded-md p-2"
                            onChange={handleInputChange}
                            name="message"
                            value={formValues.message}
                        />

                        {/* Add more fields as needed */}
                        <div className="flex justify-end space-x-4">
                            <button
                                type="submit"
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">
                                Confirm
                            </button>
                            <button
                                type='submit'
                                onClick={closeModal}
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InquiryModal