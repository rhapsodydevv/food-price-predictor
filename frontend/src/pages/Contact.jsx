import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact-container">

            <h1>Contact Us</h1>

            <p className="contact-intro">
                Have questions, ideas, or feedback about Price Sight? We'd love to hear from you!
            </p>

            <div className="contact-form-card">
                <form>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        rows="5"
                    ></textarea>

                    <button type="submit">Send Message</button>

                </form>
            </div>

            <div className="contact-info">
                <p>Email: support@pricesight.com</p>
                <p>Phone: +254 700 123 456</p>
            </div>

            <div className="social-links">

                <div className="social-item">
                    <img src="/images/X.png" alt="X (Twitter)" />
                    <p>X</p>
                </div>

                <div className="social-item">
                    <img src="/images/linkedin.png" alt="LinkedIn" />
                    <p>LinkedIn</p>
                </div>

                <div className="social-item">
                    <img src="/images/github.png" alt="GitHub" />
                    <p>GitHub</p>
                </div>

            </div>

        </div>
    );
}