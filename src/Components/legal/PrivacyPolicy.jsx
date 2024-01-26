import React from 'react';
import Footer from '../../Footer';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto py-8 fade">
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy for Eternaltek</h1>
            <div className="bg-white p-6 rounded shadow">
                <p>
                    At Eternaltek, we are committed to protecting your privacy and ensuring the security of your
                    personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                    your data when you access and use our website and services. By using our website and services,
                    you consent to the practices described in this Privacy Policy
                </p>
                <h2 className="text-xl font-semibold mb-4 mt-4">Information We Collect</h2>
                <p className="mb-4">
                    We collect various types of information, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">
                        <strong>Personal Information:</strong> This includes information you provide to us, such as your name,
                        email address, contact details, and any other information you voluntarily submit via
                        forms on our website or in communication with us.
                    </li>
                    <li className="mb-2">
                        <strong>Payment Information:</strong> If you make a payment for our services, we may collect payment
                        information, including billing details, credit card information, or other payment details.
                        We use secure third-party payment processors to handle this data.
                    </li>
                    <li className="mb-2">
                        <strong>Usage Data:</strong> We collect data related to your use of our website and services, including
                        your IP address, browser type, operating system, referral sources, and other technical
                        information.
                    </li>
                    <li className="mb-2">
                        <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies
                        to collect information about your interactions with our website, including pages viewed
                        and the time you spend on our site. You can manage your cookie preferences through
                        your browser settings.
                    </li>
                </ul>


                <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect for various purposes, including:
                    {/* ... Privacy Policy content */}
                </p>

                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">
                        <strong>Providing and improving our services.</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Payment Information:</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Processing your requests and inquiries.</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Personalizing your experience on our website.</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Communicating with you about our services, updates, and promotions.</strong>
                    </li>

                    <li className="mb-2">
                        <strong>Analyzing usage and trends to enhance our website and services.</strong>
                    </li>

                    <li className="mb-2">
                        <strong>Ensuring the security and integrity of our website. </strong>
                    </li>

                </ul>

                <h2 className="text-xl font-semibold mb-4">Disclosure of Your Information</h2>
                <p className="mb-4">
                    We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">
                        <strong>Service Providers:</strong> We may disclose your information to third-party service providers
                        who assist us in delivering our services. These service providers are bound by
                        confidentiality and data protection agreements.
                    </li>
                    <li className="mb-2">
                        <strong>Legal Requirements:</strong> We may disclose your information to comply with legal
                        obligations, protect our rights, privacy, safety, or property, or to respond to legal requests,
                        such as subpoenas or court orders.
                    </li>
                    <li className="mb-2">
                        <strong>Business Transfers:</strong> In the event of a merger, acquisition, or other business transaction,
                        your information may be transferred to a successor or partner organization.
                    </li>
                </ul>



                <h2 className="text-xl font-semibold mb-4">Data Security</h2>
                <p className="mb-4">
                    We take reasonable measures to safeguard your information from unauthorized access,
                    disclosure, alteration, and destruction. However, no online data transmission or storage can be
                    completely secure. Therefore, we cannot guarantee the absolute security of your data.
                </p>


                <h2 className="text-xl font-semibold mb-4">Your Privacy Choices</h2>
                <p className="mb-4">
                    You have the rights to:
                </p>

                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">
                        <strong>Access, update, or delete your personal information.</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Object to the processing of your data.</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Withdraw consent where relevant.</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Opt out of marketing communications.</strong>
                    </li>
                    <li className="mb-2">
                        <strong>Manage your cookie preferences.</strong>
                    </li>
                </ul>





                <h2 className="text-xl font-semibold mb-4">Children's Policy</h2>
                <p className="mb-4">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13. If you believe a child has provided us with
                    personal information, please contact us, and we will take appropriate action
                </p>

                <h2 className="text-xl font-semibold mb-4">Changes to this Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy to reflect changes to our practices or for legal, operational, or
                    regulatory reasons. We will notify you of any material changes by posting an updated Privacy
                    Policy on our website.
                </p>

                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                    If you have questions or concerns about our Privacy Policy or how we handle your data, please
                    contact us at team@eternaltek.in
                    By using Eternaltek's website and services, you acknowledge that you have read, understood, and agreed
                    to this Privacy Policy. Your continued use of our website and services signifies your acceptance of any
                    updates or changes to this policy.
                </p>

            </div>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;
