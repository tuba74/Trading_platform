import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const Error = ({message, status})  => {
    const location = useLocation();
    // const status = location.status?.status;
    // const message = location.message?.message;
    return ( 
        <>
        <Helmet>
        <title>Error!</title>
    </Helmet>
        <div className="text-center p-3 mt-5" style={{height: "200px"}}>
            {/* <div className="row text-center"> */}
            <h4>Error: {status}</h4>
            <p className="m-2">{message}</p>
            
            {/* </div> */}

        </div>
        </>
          );
}

export default Error;