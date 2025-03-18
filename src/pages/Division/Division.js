import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import './styles.css';

import PageHeader from '../../partials/PageHeader/PageHeader.js'
import CategoryProducts from '../../partials/CategoryProducts/CategoryProducts.js'
import { useParams, Link } from 'react-router-dom';

const Division = props => {

    const { slug } = useParams();

    const [division, setDivision] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const firstLinkRef = useRef(null); // Ref for the first link

    useEffect(() => {
        const fetchDivisions = async () => {
            try {
                const response = await axios.get(`divisions/${slug}`); 
                setDivision(response.data); 
            } catch (error) {
                console.error('Error fetching slides:', error);
            }
        };
        fetchDivisions();
    }, [slug]);

    async function fetchProduct(slug){
        try {
            const response = await axios.get(`categories/${slug}`); 
            setCategoryProducts(response.data); 
        } catch (error) {
            console.error('Error fetching slides:', error);
        }
    }

    useEffect(() => {
        if (division?.categories && division.categories.length > 0 && firstLinkRef?.current) {
            firstLinkRef.current.click(); // Programmatically click the first link
        }
    }, [division]);

  return (
    <React.Fragment>

    <PageHeader title={division.title} boldTitle="" parentPage="Home" />

    <div className="container pb-5">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <aside className="sidebar">
            {/*<form action="page-search-results.html" method="get">
              <div className="input-group mb-3 pb-1">
                <input
                  className="form-control text-1"
                  placeholder="Search..."
                  name="s"
                  id="s"
                  type="text"
                />
                <button type="submit" className="btn btn-dark text-1 p-2">
                  <i className="fas fa-search m-2" />
                </button>
              </div>
            </form>*/}
            <h5 className="font-weight-semi-bold pt-3">Categories</h5>
            <ul className="nav nav-list flex-column zr-categories">
                {division?.categories?.map((category, key) => (
                    <li className="nav-item" key={key}>
                        <Link className={`nav-link ${activeCategory == category.slug ? 'active' : ''}`}
                            onClick={() => { fetchProduct(category.slug); setActiveCategory(category.slug); }}
                            ref={key === 0 ? firstLinkRef : null} 
                            >
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
          </aside>
        </div>
        <div className="col-lg-9 order-1 order-lg-2">
            <CategoryProducts categoryProducts={categoryProducts} />
        </div>
      </div>
    </div>

    </React.Fragment>
  );
};

export default Division;
