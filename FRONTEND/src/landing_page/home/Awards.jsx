import React from 'react';

function Awards() {
    return ( 
    <div className="container  p-5 mt-5">
        <div className="row text-center">
            <div className="col-6 p-5">
                <img src="media/largestBroker.svg" />
            </div>
            <div className="col-6 p-5">
                <h2 className="mt-3">Largest Stock Broker in India</h2>
                <p className="mb-5">2+ million zerodha clients contribute to over 15% of all retail order volumes in India daily by traiding and investing in:</p>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity Derivates</p></li>
                            <li><p>Currency Derivates</p></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt Schemes</p></li>
                        </ul>
                    </div>
                    <img src="media/pressLogos.png" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    </div>
     );
}

export default Awards;