import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import emailjs from "emailjs-com";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/ServiceCTAPage.css";

export default function ServiceCTAPage() {
     useEffect(() => {
                window.scrollTo(0, 0);
            }, [])
            
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedService = searchParams.get("service") || "General Inquiry";

  const [formStep, setFormStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [messageCount, setMessageCount] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: selectedService,
    question1: "",
    question2: "",
    question3: "",
    scheduleCall: false,
    callDate: new Date(),
    callTime: "",
  });

  // Define service-based questions
  const serviceQuestions = {
    "Investment": [
      "What type of investment guidance do you need?",
      "Do you already have an investment strategy?",
      "What is your target investment amount?"
    ],
    "Business Advisory": [
      "What business challenge are you facing?",
      "Have you conducted a market feasibility study?",
      "Are you looking for short-term or long-term advisory?"
    ],
    "Sustainability": [
      "What sustainability goals does your company have?",
      "Are you seeking ESG compliance assistance?",
      "What industries do you operate in?"
    ],
    "Training": [
      "What skills are you looking to develop?",
      "Do you need individual or corporate training?",
      "What is your preferred training format?"
    ],
    "Market Expansion": [
      "Which market are you looking to expand into?",
      "Do you need assistance with regulatory compliance?",
      "What is your timeline for expansion?"
    ]
  };

  const questions = serviceQuestions[selectedService] || [
    "What information do you need?",
    "What is your biggest challenge?",
    "How soon do you need assistance?"
  ];

  // Available Time Slots for Calls
  const availableTimeSlots = ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // Handle Message Character Count
  const handleTextChange = (e) => {
    setMessageCount(e.target.value.length);
    handleChange(e);
  };

  // Handle Call Scheduling Toggle
  const handleScheduleToggle = () => {
    setFormData({ ...formData, scheduleCall: !formData.scheduleCall });
  };

  // Handle Calendar Date Selection
  const handleDateChange = (date) => {
    setFormData({ ...formData, callDate: date });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      "service_di2w9lq",
      "template_xowgzhg",
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        question1: formData.question1 || "N/A",
        question2: formData.question2 || "N/A",
        question3: formData.question3 || "N/A",
        scheduleCall: formData.scheduleCall ? "Yes" : "No",
        callDate: formData.scheduleCall ? formData.callDate.toDateString() : "Not Scheduled",
        callTime: formData.scheduleCall && formData.callTime ? formData.callTime : "Not Scheduled"
      },
      "IvdNKUEPpFYx54gGs"
    )
    .then(() => {
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        service: selectedService,
        question1: "",
        question2: "",
        question3: "",
        scheduleCall: false,
        callDate: new Date(),
        callTime: "",
      });
      setFormStep(1);
    })
    .catch(() => setError("Failed to send request. Please try again."))
    .finally(() => setIsLoading(false));
  };

  return (
    <section className="service-cta">
      <div className="cta-container">
        <h2>Request More Info on {selectedService}</h2>
        {isSent && <p className="success">Your request has been sent!</p>}
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          
          {/* Dynamic Questions */}
          <input type="text" name="question1" placeholder={questions[0]} value={formData.question1} onChange={handleChange} required />
          <input type="text" name="question2" placeholder={questions[1]} value={formData.question2} onChange={handleChange} />
          <textarea name="question3" placeholder={questions[2]} rows="4" value={formData.question3} onChange={handleTextChange}></textarea>

          {/* Call Scheduling */}
          <label>
            <input type="checkbox" checked={formData.scheduleCall} onChange={handleScheduleToggle} />
            Schedule a Call
          </label>

          {formData.scheduleCall && (
            <>
              <Calendar onChange={handleDateChange} value={formData.callDate} />
              <select name="callTime" value={formData.callTime} onChange={handleChange}>
                <option value="">Select Time</option>
                {availableTimeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </>
          )}

          {/* Submit Button with Loader */}
          <button type="submit" className="btn-submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="loader"></span> Sending...
              </>
            ) : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
