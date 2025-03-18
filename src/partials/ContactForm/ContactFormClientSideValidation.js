import React, { useState } from 'react';
import axios from 'axios';

import { flash } from '../../toastConfig';

import './styles.css';


const ContactForm = props => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    
    // State for submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate form
    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.message) tempErrors.message = "Message is required";

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            tempErrors.email = "Invalid email format";
        }

        return tempErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {

        e.preventDefault();

        // Validate form fields
        const validationErrors = validate();
        setErrors(validationErrors);

        // If no errors, proceed with API submission
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            try {
                const response = await axios({
                    method: 'post',
                    url: 'submit-inquiry',
                    data: formData,
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                });

                console.log(response.data);

                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }

                flash('success', response.data.msg);
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } catch (error) {
                console.log('Error submitting the form:', error);
                flash('error','Error: submitting the form. Please try again later.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

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
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label className="form-label mb-1 text-2">Name</label>
                                <input
                                    type="text"
                                    className="form-control text-3 h-auto py-2"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label mb-1 text-2">Email</label>
                                <input
                                    type="email"
                                    className="form-control text-3 h-auto py-2"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12 mb-4">
                                <label className="form-label mb-1 text-2">Message</label>
                                <textarea
                                    className="form-control text-3 h-auto py-2"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    />
                                {errors.message && <span className="error">{errors.message}</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12 mb-5">
                                <button type="submit" className="btn btn-primary btn-modern pull-right" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
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
