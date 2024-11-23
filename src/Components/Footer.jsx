import './Footer.css';
function Footer(){

    return(
        <div>
              <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>About Us</h2>
                    <p>We are dedicated to providing the best products and services to our customers.</p>
                </div>
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Email: patilkalpesh5282@gmail.com</p>
                    <p>Phone: +917420965282</p>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="https://github.com/kalpesh5282" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/kalpeshpatil52/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            </div>
        </footer>

        </div>
    );
}
export default Footer;