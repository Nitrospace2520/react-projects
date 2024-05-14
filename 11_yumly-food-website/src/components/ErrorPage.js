// ErrorPage.js

import React from 'react';
import '../styles/ErrorPage.css';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const err=useRouteError();
    console.log(err);

    return (
        <div className="error-container">
            <h1>Oops! Something went wrong.</h1>
            <p>We apologize for the inconvenience. Please try again later.</p>
            <p>{err.status}:{err.statusText}</p>
        </div>
    );
}

export default ErrorPage;
