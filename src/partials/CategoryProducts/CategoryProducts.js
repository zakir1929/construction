import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';


const CategoryProducts = (props) => {
  return (
    <React.Fragment>

        <section className="products section section-elements m-0 section-no-border bg-bottom-slash position-relative z-index-1">
          <div className="text-center">
            <div className="row">
            
            {props?.categoryProducts?.products?.map((record, key) => (
              <div key={key} className="col-6 col-sm-4 col-lg-4">
                <div className="featured-boxes featured-boxes-modern-style-2 featured-boxes-modern-style-2-hover-only featured-boxes-modern-style-primary m-0 mb-4 pb-3">
                  <div className="featured-box featured-box-no-borders featured-box-box-shadow">
                    <Link to={`/product/${record.slug}`} className="text-decoration-none">
                      <span className="box-content px-1 py-4 text-center d-block">
                        <span className="text-primary text-8 position-relative top-3">
                          <img className="w-100" src={record.image.path} />
                        </span>
                        <h2 className="font-weight-bold text-5 negative-ls-1 d-block text-dark pt-2">
                          {record.title}
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

export default CategoryProducts;
