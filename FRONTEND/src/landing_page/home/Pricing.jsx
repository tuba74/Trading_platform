import React from 'react';

function Pricing() {
    return (  
        <div className="contaner p-5 mt-5">
            <div className="row p-5">
                <div className="col-4 p-5">
                    <h1 className="mb-3 fs-4">Unbeatable Pricing</h1>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="fs-6 a-link mt-2">See Pricing <i className="fa-solid fa-arrow-right-long"></i> </a>
                </div>
                <div className="col-2"></div>
                <div className="col-4 mt-5">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1 className="mt-3 fs-3"><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free Account Opening</p>
                        </div>
                        <div className="col border p-3">
                            <h1 className="mt-3 fs-3"><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;