import React from 'react';
import { Helmet } from 'react-helmet';

function NotFound() {
    return ( 
        <>
        <Helmet>
        <title>page not found</title>
    </Helmet>
        <div className="container p-5 mt-5">
            <div className="row text-center">
            <h4>404 Page Not Found</h4>
            <p className="m-2">Sorry! the page you are looking for does not exist.</p>
            
            </div>

        </div>
        </>
          );
}

export default NotFound;