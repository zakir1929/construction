import React from 'react';

import './styles.css';


import PageHeader from '../../partials/PageHeader/PageHeader.js'

const ProductDetail = props => {
  return (
        <React.Fragment>
            <div role="main" className="main">
                <PageHeader title="Product" boldTitle="Detail" parentPage="Products" />


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
                  <div className="post-date ms-0">
                    <span className="day">10</span>
                    <span className="month">Jan</span>
                  </div>
                  <div className="post-content ms-0">
                    <h2 className="font-weight-semi-bold">
                      <a href="blog-post.html">
                        Class aptent taciti sociosqu ad litora torquent
                      </a>
                    </h2>
                    <div className="post-meta">
                      <span>
                        <i className="far fa-user" /> By <a href="#">John Doe</a>{" "}
                      </span>
                      <span>
                        <i className="far fa-folder" /> <a href="#">Lifestyle</a>,{" "}
                        <a href="#">Design</a>{" "}
                      </span>
                      <span>
                        <i className="far fa-comments" /> <a href="#">12 Comments</a>
                      </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                      lectus lacus, rutrum sit amet placerat et, bibendum nec mauris.
                      Duis molestie, purus eget placerat viverra, nisi odio gravida
                      sapien, congue tincidunt nisl ante nec tellus. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                      Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce sagittis, massa fringilla consequat blandit, mauris ligula
                      porta nisi, non tristique enim sapien vel nisl. Suspendisse
                      vestibulum lobortis dapibus. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia Curae; Praesent
                      nec tempus nibh. Donec mollis commodo metus et fringilla. Etiam
                      venenatis, diam id adipiscing convallis, nisi eros lobortis
                      tellus, feugiat adipiscing ante ante sit amet dolor. Vestibulum
                      vehicula scelerisque facilisis. Sed faucibus placerat bibendum.
                      Maecenas sollicitudin commodo justo, quis hendrerit leo consequat
                      ac. Proin sit amet risus sapien, eget interdum dui. Proin justo
                      sapien, varius sit amet hendrerit id, egestas quis mauris.
                    </p>

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
