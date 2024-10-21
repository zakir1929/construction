import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';

import PageHeader from '../../partials/PageHeader/PageHeader.js'

import { useParams } from 'react-router-dom';

const Division = props => {

    const { slug } = useParams();

    const [division, setDivision] = useState([]);

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

  return (
    <React.Fragment>

    <PageHeader title={division.title} boldTitle="" parentPage="Home" />

    <div className="container">
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
            <ul className="nav nav-list flex-column">
                {division?.categories?.map((category, key) => (
                  <li className="nav-item" key={key}>
                    <a className="nav-link" href="#">
                      {category.title}
                    </a>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
        <div className="col-lg-9 order-1 order-lg-2">
            
        </div>
      </div>
    </div>

    </React.Fragment>
  );
};

export default Division;
