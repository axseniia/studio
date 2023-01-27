import * as React from "react";

import './Loader.css';

export function Loader() {
    return (
        <div className="loaderContainer">
            <div className="loader">
                <div className="loader__item loader__item--1"></div>
                <div className="loader__item loader__item--2"></div>
                <div className="loader__item loader__item--3"></div>
                <div className="loader__item loader__item--4"></div>
            </div>
        </div>
    )
}