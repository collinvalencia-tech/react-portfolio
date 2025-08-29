import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>
        <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" id="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
