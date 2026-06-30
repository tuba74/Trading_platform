import React from 'react';

function Hero() {
    return ( 
        <div className="container ">
            <div className="row border-bottom text-center p-5 mt-5 mb-5">
            <h1 className="fs-3">Pricing</h1>
            <p className="mt-3  text-muted" style={{fontSize:"18px"}}>Free equity investments and flat of rupees 20 traday and F&O trades</p>
            </div>

            <div className="row text-muted text-center p-5" style={{fontSize:"16px"}}>
                <div className="col-4 p-5">
                    <img src="media/pricingEquity.svg" />
                    <h1 className="fs-3 mt-3">Free equity delivery</h1>
                    <p style={{lineheight:"2", marginTop:"2rem"}} className="small-text">All equity delivery investments (NSE, BSE),are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/intradayTrades.svg" />
                    <h1 className="fs-3 mt-3">Intraday and F&O trades</h1>
                    <p style={{lineheight:"2", marginTop:"2rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across  equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/pricingEquity.svg"/>
                    <h1 className="fs-3 mt-3">Free Direct MF</h1>
                    <p style={{lineheight:"2", marginTop:"2rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
</div>
     );
}

export default Hero;