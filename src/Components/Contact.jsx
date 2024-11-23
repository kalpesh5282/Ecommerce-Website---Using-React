
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
function Contact(){
    return(
        <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <h2>Phone</h2>
            <p>7420965282</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h2>Email</h2>
            <p>patilkalpesh5282@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h2>Address</h2>
            <p>Pune</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
}
export default Contact;