import React from 'react';

import styles from './styles.module.css';

import { useDispatch, useSelector } from 'react-redux';

import CleanPhone from '../../helpers/CleanPhone/CleanPhone.js';

const Footer = props => {

    const { setting, loading, error } = useSelector((state) => state.settingStore);

    const copyrightText = setting?.footer_copyright?.replace("<#current_year#>", new Date().getFullYear());

    const openingHours = setting?.footer_opening_hours;

    return (
        <React.Fragment>
            <footer id="footer" className="mt-0">
              <div className="container my-4">
                <div className="row py-5">
                  <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                        Contact Details
                    </h5>

                    <p className="text-4 mb-0" dangerouslySetInnerHTML={{ __html: setting?.footer_adderss }}></p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                      Opening Hours
                    </h5>
                        {openingHours?.map((record, index) => (
                        <p className="text-4 mb-0" key={index}>
                          {record.title}: <span className="text-color-light">{record.description}</span>
                        </p>
                        ))}
                  </div>
                  <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                    <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                      Call Us Now
                    </h5>
                    <p className="text-7 text-color-light font-weight-bold mb-2">
                        <CleanPhone componentClass="text-decoration-none text-color-light" phone={setting?.phone} />
                    </p>
                    <p className="text-4 mb-0">
                      Sales:
                      <span className="text-color-light">
                        <a
                          href="tel:012345679"
                          className="text-decoration-none text-color-light"
                        >
                          {setting?.phone}
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                      Social Media
                    </h5>
                    <ul className="footer-social-icons social-icons m-0">
                      <li className="social-icons-facebook">
                        <a target="_blank" className="d-flex align-items-center justify-content-center p-3 me-2" href={setting?.footer_facebook} target="_blank" title="Facebook">
                          <i className="fab fa-facebook-f text-4" />
                        </a>
                      </li>
                      <li className="social-icons-linkedin">
                        <a target="_blank" className="d-flex align-items-center justify-content-center p-3 me-2" href={setting?.footer_linkedin} target="_blank" title="Linkedin">
                          <i className="fab fa-linkedin-in text-4" />
                        </a>
                      </li>
                      <li className="social-icons-x">
                        <a target="_blank" className="d-flex align-items-center justify-content-center p-3 me-2" href={setting?.footer_instagram} target="_blank" title="X">
                          <i className="fab fa-instagram text-4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="footer-copyright footer-copyright-style-2 pb-4">
                  <div className="py-2">
                    <div className="row py-4">
                      <div className="col d-flex align-items-center justify-content-center mb-4 mb-lg-0">
                        <p>{copyrightText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
