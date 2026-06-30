import React from 'react';

function Stats() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row  p-2">
                <div className="col-6 p-2 ">
                    <h1 className="mb-5 fs-2">Trust with confidence</h1>
                    <h2 className="fs-4 mb-2">Customer-first always</h2>
                    <p className="mb-4 text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us Indias largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="mb-4 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="mb-4 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="mb-4 text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    
                </div>
                <div className="col-6 ">
                    <img src="media/ecosystem.png" style={{width: "96%"}}/>
                    <div className="text-center mt-3" >
                        <a href="" className="fs-6 mx-4 a-link">Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" className="fs-6 a-link">Try Kite demo <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;