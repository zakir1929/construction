import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import './styles.css';


import PageHeader from '../../partials/PageHeader/PageHeader.js'

import CategoryProducts from '../../partials/CategoryProducts/CategoryProducts.js'
import { useParams, Link } from 'react-router-dom';

import parse from 'html-react-parser';


const ProductDetail = props => {

    const { slug } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchproduct = async () => {
            try {
                const response = await axios.get(`products/${slug}`); 
                setProduct(response.data); 
            } catch (error) {
                console.error('Error fetching slides:', error);
            }
        };
        fetchproduct();
    }, [slug]);


  return (
        <React.Fragment>
            <div role="main" className="main">

            <PageHeader title={product?.title} boldTitle="" parentPage={product?.division?.title} parentPageUrl={`/division/${product?.division?.slug}`} />


        <div className="container py-4">
          <div className="row">
            <div className="col">
              <div className="blog-posts single-post">
                
                    <article className="post post-large blog-single-post border-0 m-0 p-0">
                      <div className="post-image ms-0">
                        <a href="blog-post.html">
                          <img
                            src="img/blog/wide/blog-11.jpg"
                            className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="post-content ms-0">
                        <h2 className="font-weight-semi-bold mb-3">
                          <span>
                            {product.title}
                          </span>
                        </h2>
                        
                        <img className="mw-100 mb-3" src={product?.image?.path} />

                        <p className="mb-3" dangerouslySetInnerHTML={{ __html: product?.description }}></p>

                      </div>
                    </article>

                </div>
            </div>
        </div>
    </div>

</div>

    </React.Fragment>
  );
};

export default ProductDetail;
