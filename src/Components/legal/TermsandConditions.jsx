import React from 'react';
import Footer from '../../Footer';


const TermsAndConditions = () => {
    return (
        <div className="container mx-auto py-8 fade">
            <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions for Eternaltek</h1>
            <div className="bg-white p-6 rounded shadow mb-2">
                <p>
                    Please read these Terms and Conditions carefully before using the services provided by
                    Eternaltek Technologies Pvt Ltd ("we," "our," or "us"). By accessing or using our website and
                    services, you agree to be bound by these Terms and Conditions. If you do not agree to these
                    terms, please refrain from using our services.
                </p>
                {/* List of points */}
                <ol className="list-decimal pl-6 mb-6">
                    <li className="mb-4 mt-4">
                        <strong>Services Offered</strong>: Eternaltek offers a range of services, including but not limited to educational services (internships, courses, and placement training), IT services, and BPO services.
                    </li>
                    <li className="mb-4">
                        <strong>User Eligibility</strong>: By using our services, you represent and warrant that you are at least 18 years of age. If you are
                        accessing our services on behalf of an organization, you represent that you have the authority to
                        bind the organization to these Terms and Conditions.
                    </li>

                    <li className="mb-4">
                        <strong>User Regestration</strong>: To access certain features of our services, you may be required to register and create an account.
                        You are responsible for providing accurate and up-to-date information during the registration
                        process. You are also responsible for maintaining the confidentiality of your account credentials
                        and for any activities that occur under your account.
                    </li>

                    <li className="mb-4">
                        <strong>Payment and Fees</strong>: Certain services provided by Eternaltek may require payment. You agree to pay all fees and
                        charges associated with the services as specified in your service agreement or invoice. Payment
                        terms and methods will be provided to you at the time of purchase.
                    </li>

                    <li className="mb-4">
                        <strong>Privacy Policy</strong>: Your use of our services is also governed by our Privacy Policy, which can be found on our
                        website. By using our services, you consent to the collection, use, and disclosure of your
                        information as described in our Privacy Policy.
                    </li>

                    <li className="mb-4">
                        <strong>Intellectual Policy</strong>: All content, materials, and intellectual property provided on our website and through our services
                        are the property of Eternaltek or its licensors. You may not use, reproduce, or distribute any of
                        our content without our express permission
                    </li>


                    <li className="mb-4">
                        <strong>Intellectual Policy</strong>: All content, materials, and intellectual property provided on our website and through our services
                        are the property of Eternaltek or its licensors. You may not use, reproduce, or distribute any of
                        our content without our express permission
                    </li>


                    <li className="mb-4">
                        <strong>Termination of Services</strong>: We reserve the right to terminate, suspend, or limit your access to our services at our discretion if
                        we believe you have violated these Terms and Conditions or any applicable laws. You may also
                        terminate your use of our services at any time by discontinuing your account or services.
                    </li>


                    <li className="mb-4">
                        <strong> Limitation of Liability</strong>: Eternaltek makes every effort to ensure the accuracy and quality of the services provided.
                        However, we do not guarantee the availability, accuracy, completeness, or reliability of the
                        services. We are not liable for any direct, indirect, incidental, special, or consequential damages
                        that may arise from the use of our services.
                    </li>

                    <li className="mb-4">
                        <strong> Indemnification</strong>: You agree to indemnify and hold Eternaltek, its affiliates, partners, employees, and contractors
                        harmless from any claims, liabilities, and expenses, including legal fees, that may arise from
                        your use of our services or your violation of these Terms and Conditions..
                    </li>

                    <li className="mb-4">
                        <strong>  Governing Law</strong>: These Terms and Conditions are governed by and construed in accordance with the laws of
                        Anantapur,Andhra Pradesh. Any disputes arising from these Terms and Conditions will be subject to the
                        exclusive jurisdiction of the courts in Anantapur,Andhra Pradesh.
                    </li>

                    <li className="mb-4">
                        <strong>  Changes to Terms and Conditions</strong>: We reserve the right to update, modify, or change these Terms and Conditions at our discretion.
                        Any changes will be effective upon posting on our website. It is your responsibility to review
                        these Terms and Conditions periodically for updates.
                    </li>

                </ol>
                <p>
                    Contact Us: If you have any questions or concerns regarding these Terms and Conditions, please contact us at +91 9966864038
           
                </p>
                <p>
                    By using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. Your continued use of our services signifies your acceptance of any updates or changes to these terms.
                </p>
            </div>
            <Footer/>
        </div>
        
    );
};

export default TermsAndConditions;
