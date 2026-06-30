import React from 'react';

function Education() {
    return ( 
       <div className="contaner p-5 ">
            <div className="row">
                <div className="col-6">
                    <img src="media/education.svg" />
                </div>
                <div className="col-6 mt-5">
                    <h1 className="mb-4 fs-4">Free and open market education</h1>
                    <p className="text-muted">Varsity, the largest online stock market education 
                    the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="fs-6 a-link mt-3">Varsity <i className="fa-solid fa-arrow-right-long"></i> </a>

                    <p className="text-muted mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className="fs-6 a-link mt-2">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i> </a>
                    
                </div>
            </div>
        </div>
        
     );
}

export default Education;