import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

const Divisions = props => {

    const { divisions, dloading, derror } = useSelector((state) => state.divisionStore);    

  return (
    <React.Fragment>
          
        <section className="section section-elements m-0 section-no-border bg-bottom-slash position-relative z-index-1">
          <div className="container text-center mt-4">
            <h2 className="font-weight-bold text-9 mb-5">Divisions</h2>
            <div className="row justify-content-center">
                
            {divisions?.map((division, key) => (
              <div key={key} className="col-6 col-sm-4 col-lg-3">
                <div className="featured-boxes featured-boxes-modern-style-2 featured-boxes-modern-style-2-hover-only featured-boxes-modern-style-primary m-0 mb-4 pb-3">
                  <div className="featured-box featured-box-no-borders featured-box-box-shadow">
                    <Link to={`/division/${division.slug}`} className="text-decoration-none">
                      <span className="box-content px-1 py-4 text-center d-block">
                        <span className="text-primary text-8 position-relative top-3 mt-3">
                          <img className="w-100" src={division.image.path} />
                        </span>
                        <h2 className="font-weight-bold text-uppercase text-5 negative-ls-1 d-block text-dark pt-2">
                          {division.title}
                        </h2>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            </div>
          </div>
        </section>

    </React.Fragment>
  );
};

export default Divisions;
