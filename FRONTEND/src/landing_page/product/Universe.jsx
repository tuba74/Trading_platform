import React from 'react';

function Universe() {
    return ( 
        <div className="container text-muted text-center mt-3">
            <p style={{fontSize:"1.4rem"}} className="mb-5">Want to know more about our technology stack? Check out the <a className="a-link">Zerodha.tech</a> blog.</p>
            <h1 className="fs-4 " style={{marginTop: "7rem"}}>The Zerodha Universe</h1>
            <p className="mt-4" style={{fontSize:"18px"}}>Extend your trading and investment experience even further with our partner platforms</p>

            <div className="row p-5" style={{fontSize:"12px"}}>
                <div className="col-4">
                    <img src="media/zerodhaFundhouse.png" style={{width: "60%"}}/>
                    <p className="mt-4">Our asset management venture<br/>
                    that is creating simple and transparent index<br/>
                    funds to help you save for your goals.</p>
                </div>
                <div className="col-4">
                    <img src="media/sensibullLogo.svg" style={{width: "60%"}} />
                    <p className="mt-5">Options trading platform that lets you<br/>
                    create strategies, analyze positions, and examine<br/>
                    data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/goldenpiLogo.png"  style={{width: "60%"}}/>
                    <p className="mt-4 text-small">Investment research platform<br/>
                    that offers detailed insights on stocks,<br/>
                    sectors, supply chains, and more.</p>
                </div>
            </div>

            <div className="row p-5" style={{fontSize:"12px"}}>
                <div className="col-4">
                    <img src="media/streakLogo.png" style={{width: "55%"}}/>
                    <p className="mt-4">Systematic trading platform<br/>
                    that allows you to create and backtest<br/>
                    strategies without coding.</p>
                </div>
                <div className="col-4">
                    <img src="media/smallcaseLogo.png" style={{width: "60%"}} />
                    <p className="mt-4">Thematic investing platform<br/>
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4">
                    <img src="media/dittoLogo.png"  style={{width: "45%"}}/>
                    <p className="mt-4">Personalized advice on life<br/>
                    and health insurance. No spam<br/>
                    and no mis-selling.</p>
                </div>
            </div>
            <button className="signupBtn btn btn-primary fs-5 mt-2 mb-4">Sign up for free</button>
            
        </div>
     );
}

export default Universe;