import React from 'react';

import './styles.css';


const ContactForm = props => {
  return (
    <React.Fragment>
            

<div className="container">
  <div className="row py-4">
    <div
      className="col-lg-7 appear-animation animated fadeIn appear-animation-visible"
      data-appear-animation="fadeIn"
      data-appear-animation-delay={650}
      style={{ animationDelay: "650ms" }}
    >
      <div className="offset-anchor" id="contact-sent" />
      <h2 className="font-weight-bold text-7 mt-2 mb-0">Contact Us</h2>
      <p className="mb-4">
        Feel free to ask for details, don't save any questions!
      </p>
      <form
        id="contactFormAdvanced"
        action="contact-us-advanced.php#contact-sent"
        method="POST"
        encType="multipart/form-data"
        noValidate="novalidate"
      >
        <input
          type="hidden"
          defaultValue="true"
          name="emailSent"
          id="emailSent"
        />
        <div className="row">
          <div className="form-group col-md-6">
            <label className="form-label mb-1 text-2">Full Name</label>
            <input
              type="text"
              defaultValue=""
              data-msg-required="Please enter your name."
              maxLength={100}
              className="form-control text-3 h-auto py-2"
              name="name"
              id="name"
              required=""
            />
          </div>
          <div className="form-group col-md-6">
            <label className="form-label mb-1 text-2">Email Address</label>
            <input
              type="email"
              defaultValue=""
              data-msg-required="Please enter your email address."
              data-msg-email="Please enter a valid email address."
              maxLength={100}
              className="form-control text-3 h-auto py-2"
              name="email"
              id="email"
              required=""
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label className="form-label mb-1 text-2">Subject</label>
            <select
              data-msg-required="Please enter the subject."
              className="form-control text-3 h-auto py-2"
              name="subject"
              id="subject"
              required=""
            >
              <option value="">...</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <p className="mb-2">Checkboxes</p>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="checkboxes[]"
                  type="checkbox"
                  data-msg-required="Please select at least one option."
                  id="inlineCheckbox1"
                  defaultValue="option1"
                />{" "}
                1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="checkboxes[]"
                  type="checkbox"
                  data-msg-required="Please select at least one option."
                  id="inlineCheckbox1"
                  defaultValue="option2"
                />{" "}
                2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="checkboxes[]"
                  type="checkbox"
                  data-msg-required="Please select at least one option."
                  id="inlineCheckbox1"
                  defaultValue="option3"
                />{" "}
                3
              </label>
            </div>
          </div>
          <div className="form-group col-md-6">
            <p className="mb-2">Radios</p>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radios"
                  data-msg-required="Please select at least one option."
                  id="inlineRadio1"
                  defaultValue="option1"
                />{" "}
                1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radios"
                  data-msg-required="Please select at least one option."
                  id="inlineRadio2"
                  defaultValue="option2"
                />{" "}
                2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radios"
                  data-msg-required="Please select at least one option."
                  id="inlineRadio3"
                  defaultValue="option3"
                />{" "}
                3
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <label className="form-label mb-1 text-2">Attachment</label>
            <input
              className="form-control d-block"
              type="file"
              name="attachment"
              id="attachment"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12 mb-4">
            <label className="form-label mb-1 text-2">Message</label>
            <textarea
              maxLength={5000}
              data-msg-required="Please enter your message."
              rows={6}
              className="form-control text-3 h-auto py-2"
              name="message"
              id="message"
              required=""
              defaultValue={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12 mb-5">
            <input
              type="submit"
              id="contactFormSubmit"
              defaultValue="Send Message"
              className="btn btn-primary btn-modern pull-right"
              data-loading-text="Loading..."
            />
          </div>
        </div>
      </form>
    </div>
    <div className="col-lg-5">
      <div className="overflow-hidden mb-1">
        <h4
          className="text-primary mb-0 appear-animation animated maskUp appear-animation-visible"
          data-appear-animation="maskUp"
          data-appear-animation-delay={200}
          style={{ animationDelay: "200ms" }}
        >
          Get in <strong>Touch</strong>
        </h4>
      </div>
      <div className="overflow-hidden mb-3">
        <p
          className="lead text-4 mb-0 appear-animation animated maskUp appear-animation-visible"
          data-appear-animation="maskUp"
          data-appear-animation-delay={400}
          style={{ animationDelay: "400ms" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eget leo at velit imperdiet varius. In eu ipsum vitae velit congue
          iaculis vitae at risus.
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="mb-0 appear-animation animated maskUp appear-animation-visible"
          data-appear-animation="maskUp"
          data-appear-animation-delay={600}
          style={{ animationDelay: "600ms" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eget leo at velit imperdiet varius.
        </p>
      </div>
      <div
        className="appear-animation animated fadeInUpShorter appear-animation-visible"
        data-appear-animation="fadeInUpShorter"
        data-appear-animation-delay={800}
        style={{ animationDelay: "800ms" }}
      >
        <h4 className="text-primary pt-5">
          Our <strong>Office</strong>
        </h4>
        <ul className="list list-icons list-icons-style-3 mt-2">
          <li>
            <i className="fas fa-map-marker-alt top-6" />{" "}
            <strong>Address:</strong> Melbourne, 121 King St, Australia
          </li>
          <li>
            <i className="fas fa-phone top-6" /> <strong>Phone:</strong> (123)
            456-789
          </li>
          <li>
            <i className="fas fa-envelope top-6" /> <strong>Email:</strong>{" "}
            <a href="mailto:mail@example.com">mail@example.com</a>
          </li>
        </ul>
        <div
          className="row lightbox mt-4 mb-0 pb-0"
          data-plugin-options="{'delegate': 'a', 'type': 'image', 'gallery': {'enabled': true}}"
        >
          <div className="col-md-4 mb-4 mb-md-0">
            <a
              className="img-thumbnail p-0 border-0 d-block"
              href="img/office/our-office-1.jpg"
              data-plugin-options="{'type':'image'}"
            >
              <img
                className="img-fluid"
                src="img/office/our-office-1.jpg"
                alt="Office"
              />
            </a>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <a
              className="img-thumbnail p-0 border-0 d-block"
              href="img/office/our-office-2.jpg"
              data-plugin-options="{'type':'image'}"
            >
              <img
                className="img-fluid"
                src="img/office/our-office-2.jpg"
                alt="Office"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a
              className="img-thumbnail p-0 border-0 d-block"
              href="img/office/our-office-3.jpg"
              data-plugin-options="{'type':'image'}"
            >
              <img
                className="img-fluid"
                src="img/office/our-office-3.jpg"
                alt="Office"
              />
            </a>
          </div>
        </div>
        <h4 className="text-primary pt-5">
          Business <strong>Hours</strong>
        </h4>
        <ul className="list list-icons list-dark mt-2">
          <li>
            <i className="far fa-clock top-6" /> Monday - Friday - 9am to 5pm
          </li>
          <li>
            <i className="far fa-clock top-6" /> Saturday - 9am to 2pm
          </li>
          <li>
            <i className="far fa-clock top-6" /> Sunday - Closed
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    <div style={{ 
            height: '550px',
        }}
        >
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2799828574657!2d-84.79505142439272!3d33.41594417340319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4c8b5a6c62917%3A0x9f4d9463b4ecd707!2s81%20Green%20Park%20Way%2C%20Newnan%2C%20GA%2030263%2C%20USA!5e0!3m2!1sen!2sin!4v1728987584535!5m2!1sen!2sin"
            style={{ 
                height: '100%',
                width: '100%',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div>


    </React.Fragment>
  );
};

export default ContactForm;
