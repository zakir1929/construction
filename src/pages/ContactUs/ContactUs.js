import React from 'react';

import './styles.css';

import PageHeader from '../../partials/PageHeader/PageHeader.js'
import ContactForm from '../../partials/ContactForm/ContactForm.js'

const ContactUs = props => {
  return (
        <React.Fragment>
            <div role="main" className="main">
                <PageHeader title="Contact" boldTitle="Us" parentPage="Home" />
                <ContactForm />
            </div>
        </React.Fragment>
    );
};

export default ContactUs;
