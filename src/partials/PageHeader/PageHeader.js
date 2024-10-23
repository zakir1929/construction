import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';


const PageHeader = (props) => {
  return (
        <React.Fragment>
            <section className="page-header page-header-modern bg-color-grey page-header-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 order-2 order-md-1 align-self-center p-static">
                            <h1 className="text-dark">
                                {props.title} <strong>{props.boldTitle}</strong>
                            </h1>
                        </div>
                        <div className="col-md-5 order-1 order-md-2 align-self-center">
                            <ul className="breadcrumb d-block text-md-end">
                                <li>
                                    <Link to={props.parentPageUrl ? props.parentPageUrl : '/' } > {props.parentPage} </Link>
                                </li>
                                <li className="active">{props.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default PageHeader;
