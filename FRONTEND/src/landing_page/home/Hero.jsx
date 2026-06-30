import React from 'react';
function Hero() {
    return ( 
        <div className="container p-5mb-5">
            <div className="row text-center">
            <img src="/media/homeHero.png" alt="home img" className="mb-5"/>
            <h4 className="mt-5">Invest in everything</h4>
            <p>Online platform to invest in stocks, derivatives and mutual funds</p>
            <button className="signupBtn btn btn-primary fs-5 mb-5">Signup Now</button>
            </div>

        </div>
     );
}

export default Hero;