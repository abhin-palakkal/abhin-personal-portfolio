import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Heading */}

        <div className="contact-heading">
          <i className="fa-regular fa-envelope"></i>

          <h2>Contact Me</h2>

          <p>
            Have a project in mind or want to get in touch? Feel free to reach
            out. I’d be happy to hear from you.
          </p>
        </div>

        {/* Contact Content */}

        <div className="contact-content">
          {/* Contact Information */}

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>

              <div>
                <h3>Email</h3>
                <p>abhinpalakkal24@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <h3>Location</h3>
                <p>Kerala, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fa-brands fa-github"></i>
              </div>

              <div>
                <h3>GitHub</h3>
                <p>github.com/abhin-palakkal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
