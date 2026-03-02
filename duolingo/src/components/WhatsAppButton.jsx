import React, { useState } from 'react';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = '9705920108'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi DuoNepal! I would like to know more about booking the Duolingo English Test.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="whatsapp-float-container">
            {showTooltip && (
                <div className="whatsapp-tooltip">
                    <span>Chat with us!</span>
                </div>
            )}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float-btn"
                aria-label="Chat on WhatsApp"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <svg viewBox="0 0 32 32" className="whatsapp-icon" fill="currentColor">
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.056 31.4l6.26-1.964C9.876 31.076 12.832 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.3 22.608c-.39 1.098-1.924 2.01-3.172 2.276-.856.18-1.972.324-5.732-1.232-4.812-1.992-7.912-6.876-8.152-7.196-.232-.32-1.932-2.576-1.932-4.916s1.224-3.488 1.656-3.968c.432-.48.944-.6 1.26-.6.316 0 .632.004.908.016.292.012.684-.112 1.072.816.39.94 1.332 3.248 1.448 3.484.116.236.196.512.04.82-.156.316-.236.512-.468.788-.232.276-.488.616-.696.828-.232.232-.472.484-.204.948.268.464 1.196 1.972 2.568 3.196 1.764 1.576 3.252 2.064 3.716 2.296.464.232.736.196 1.004-.116.276-.316 1.172-1.364 1.484-1.832.312-.468.624-.388 1.052-.232.432.156 2.736 1.292 3.204 1.528.468.232.78.352.896.548.116.192.116 1.136-.272 2.236z" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
