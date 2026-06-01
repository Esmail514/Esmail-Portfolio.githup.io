'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faShareAlt,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedinIn, 
  faFacebook, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import useInView from '@/hooks/useInView';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type, fadeOut: false }]);

    // Trigger fadeOut after 4.6 seconds
    setTimeout(() => {
      setNotifications(prev => 
        prev.map(n => n.id === id ? { ...n, fadeOut: true } : n)
      );
    }, 4600);

    // Remove notification completely after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('message', formData.message);
    submitData.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/asasesmail514@gmail.com', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        addNotification('Thank you for your message! I will get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          addNotification(data.errors.map(error => error.message).join(', '), 'error');
        } else {
          addNotification('Oops! There was a problem submitting your form.', 'error');
        }
      }
    } catch (error) {
      addNotification('Oops! There was a problem submitting your form.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" ref={ref}>
      {/* Sliding Toast Notifications Container */}
      <div className="notification-container">
        {notifications.map(notif => (
          <div 
            key={notif.id} 
            className={`notification ${notif.type} ${notif.fadeOut ? 'fade-out' : ''}`}
            role="status"
          >
            <FontAwesomeIcon icon={notif.type === 'success' ? faCheckCircle : faExclamationCircle} />
            <span>{notif.message}</span>
          </div>
        ))}
      </div>

      <div className="container">
        <div className={`section-title-center reveal ${inView ? 'active' : ''}`}>
          <h3>Get In Touch</h3>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className={`contact-item reveal delay-1 ${inView ? 'active' : ''}`}>
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:asasesmail514@gmail.com">asasesmail514@gmail.com</a>
              </div>
            </div>

            <div className={`contact-item reveal delay-2 ${inView ? 'active' : ''}`}>
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+967771209666">+967 771 209 666</a>
              </div>
            </div>

            <div className={`contact-item reveal delay-3 ${inView ? 'active' : ''}`}>
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Sana'a, Yemen</p>
              </div>
            </div>

            <div className={`contact-item reveal delay-4 ${inView ? 'active' : ''}`}>
              <div className="contact-icon">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
              <div className="contact-details">
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="https://github.com/Esmail514" target="_blank" rel="noopener noreferrer" className="github" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/esmail-alsayaghi-726659254" target="_blank" rel="noopener noreferrer" className="linkedin" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="https://www.facebook.com/esmael.ali.3152" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com/esmail_sayaghi?igsh=MXd4aXR5Yzc2dW90aw==" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`contact-form reveal delay-5 ${inView ? 'active' : ''}`}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
