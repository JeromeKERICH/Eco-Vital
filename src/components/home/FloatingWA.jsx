import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/FloatingWA.css";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "254721559442"; 
  const message = encodeURIComponent("Hello Eco-Vital! I would like more information about your services.");

  return (
    <div 
      className="whatsapp-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
}
