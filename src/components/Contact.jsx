
import React, { useState } from "react";
import Header from "../global/Haeder";
import Profile from "../global/Profile";
import "../assets/css/contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    Comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure the keys match EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      budget: formData.budget,
      message: formData.message, // Ensure this matches your EmailJS template variable
    };
  
    emailjs
      .send(
        "service_z7jn9hg", // EmailJS Service ID
        "template_sz7zxal", // EmailJS Template ID
        templateParams, // Corrected form data object
        "ZEA8MDFjF3rsl9RAY" // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log(" Email sent successfully!", response);
  
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your email has been sent successfully!",
            confirmButtonText: "OK",
          });
  
          setFormData({ name: "", email: "", subject: "", budget: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
  
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Your email couldn't be sent.",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      );
  };
  
  return (
    <>
      <div className="container">
        <Header />
        <div className="d-flex justify-content-center" id="contact">
          <Profile />
          <div className="contact">
            <h1>
              <span>Let's 👋</span> <span style={{ color: "#4770FF" }}>Work </span> <span>Together</span>
            </h1>
            <p className="contact-title">
              I'm here to help if you're searching for a product designer to bring your idea to life or a design partner
              to help take your business to the next level.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="contact-form">
                <div className="contact-part d-flex">
                  <div className="name-email">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                  </div>
                  <div className="name-email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                  </div>
                </div>
                <div className="contact-part d-flex pt-2">
                  <div className="name-email">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      placeholder="Enter Subject"
                      name="subject"
                      onChange={handleChange}
                      value={formData.subject}
                      required
                    />
                  </div>
                  <div className="name-email">
                    <label htmlFor="budget pb-2">Budget</label>
                    <select name="budget" id="budget" onChange={handleChange} value={formData.budget} required>
                      <option value="">Select Budget</option>
                      <option value="5000">5,000</option>
                      <option value="10000">10,000</option>
                      <option value="15000">15,000</option>
                      <option value="25000">25,000</option>
                      <option value="35000">35,000</option>
                      <option value="45000">45,000</option>
                    </select>
                  </div>
                </div>
                <div className="commectsec pt-3">
                  <label htmlFor="Comment">Comment</label>
                  <textarea
                    name="Comment"
                    placeholder="Type details about your inquiry"
                    onChange={handleChange}
                    value={formData.message}
                    required
                  />
                </div>
                <div className="sendmess">
                  <button type="submit">Send Comment</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
  


