import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Navbar';
import Aboutus from './AboutUs';
import ContactUs from './ContactUs';
import PrivacyPolicy from './Components/legal/PrivacyPolicy';
import TermsandConditions from './Components/legal/TermsandConditions';
import Homepage from './Home';
import ITServices from './Components/services/ITServices';
import BPOServices from './Components/services/BPOServices';
import EducationalServices from './Components/services/EducationalServices';
import Courses from './Components/Educational-Services/Courses';
import OnlinePlacement from './Components/Educational-Services/OnlinePlacement';
import MockInterviews from './Components/Educational-Services/MockInterviews';
import MasterClass from './Components/Educational-Services/MasterClass';
import InternshipProagram from './Components/Educational-Services/InternshipProagram';
import RefundPolicy from './Components/legal/RefundPolicy';
import Workshops from './Components/Educational-Services/Workshops';


function App() {

  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/terms&conditions" element={<TermsandConditions/>}/>
        <Route path="/refund" element={<RefundPolicy/>}/>
        <Route path="/itservices" element={<ITServices/>}/>
        <Route path="/bposervices" element={<BPOServices/>}/>
        <Route path="/educational-services" element={<EducationalServices/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/onlineplacement" element={<OnlinePlacement/>}/>
        <Route path="/mockinterviews"  element={ <MockInterviews/>}/>
        <Route path="/masterclass"  element={ <MasterClass/>}/>
        <Route path="/internship-proagram"  element={ <InternshipProagram/>}/>
        <Route path="/workshop"  element={ <Workshops/>}/>
      
    
        {/* Other routes for different sections */}
      </Routes>
    </Router>
    </>
  )
}

export default App
