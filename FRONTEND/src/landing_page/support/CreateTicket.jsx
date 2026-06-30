import React from 'react';

function CreateTicket() {
    return (
        <>  
        <div className="container mt-5 ">
            <h1 className="mt-3 fs-2 p-5">To create a ticket, select a relevant topic</h1>
            <div className="row p-4 mt-3 text-muted text-left">
                <div className="col-4 p-5">
                    <h1 className="fs-4 mb-3 "><i className="fa-solid fa-circle-plus fa-sm p-1"></i>Account Opening</h1>
                    <ul>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Resident individual</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Minor</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Non Resident Indian (NRI)</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Company, Partnership, HUF and LLP</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Glossary</li></a>
                    </ul>
                </div>
                <div className="col-4 p-5 ">
                    <h1 className="fs-4 mb-3 "><i className="fa-solid fa-user fa-sm p-1"></i>Your Zerodha Account</h1>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Your Profile</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Account modification</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Nomination</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Transfer and conversion of securities</li></a>
                </div>
                <div className="col-4 p-5">
                    <h1 className="fs-4 mb-3"><i class="fa-solid fa-chart-column fa-sm p-1"></i>Kite</h1>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>IPO</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Trading FAQs</li></a>
                   <a href="" className="fs-6" style={{textDecoration:"none"}}><li> Margin Trading Facility (MTF) and Margins</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Charts and orders</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Alerts and Nudges</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>General</li></a>
                </div>
            </div>

            <div className="row p-4 text-muted text-left">
                <div className="col-4 p-5">
                    <h1 className="fs-4 mb-3"><i class="fa-solid fa-indian-rupee-sign fa-sm p-1"></i>Funds</h1>
                    <ul>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Add Money</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Withdraw Money</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Add Bank Accounts</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>eMandates</li></a>
                    </ul>
                </div>
                <div className="col-4 p-5 ">
                    <h1 className="fs-4 mb-3"><i class="fa-solid fa-circle-notch fa-sm p-1"></i>Console</h1>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Portfolio</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Corporate actions</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Funds statements</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Reports</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Profile</li></a>
                            <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Segments</li></a>
                </div>
                <div className="col-4 p-5">
                    <h1 className="fs-4 mb-3"><i class="fa-solid fa-coins fa-sm p-1"></i>Coin</h1>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Mutual Funds</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>National Pension Scheme</li></a>
                   <a href="" className="fs-6" style={{textDecoration:"none"}}><li> Fixed Deposit(FD)</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Features on Coins</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>Payments and Goals</li></a>
                    <a href="" className="fs-6" style={{textDecoration:"none"}}><li>General</li></a>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default CreateTicket;