import React from 'react';

function Brokerage() {
    return (  
        <div className="container p-2 mt-5 mb-5">
            <h1 className="fs-4 mb-3">Charges for account opening</h1>
            <div className="row border">
                <div className="p-2 mb-1 border-bottom"style={{display:"inline"}}>
                    <span style={{marginRight: "35rem"}}>Types of account</span>
                    <span >Charges</span>
                </div>
                <div className="col text-muted mt-3 p-2">
                
                    <p>Individual account</p>
                    <p>Minor account</p>
                    <p>NRI account</p>
                    <p>HUF account</p>
                    <p>Partnership, LLP, and Corporate accounts (offline only)</p>
                </div>
                <div className="col mt-3 p-2 text-muted">
                    <p ><button className="btn btn-sm btn-success primary-btn " style={{height:"27px"}}>FREE</button></p>
                    <p ><button className="btn btn-sm btn-success primary-btn " style={{height:"27px"}}>FREE</button></p>
                    <p>₹ 500</p>
                    <p><button className="btn btn-sm btn-success primary-btn " style={{height:"27px"}}>FREE</button>  (online)/₹ 500(offline)</p>
                    <p>₹ 500</p>
                
                </div>
            </div>
        </div>

    );
}

export default Brokerage;