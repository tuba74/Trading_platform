import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className=" p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className="row p-5 mb-5 ">
                <div className="col-6 p-3" >
                <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
                <input  placeholder="Eg.how do i activate F&O, why is my order getting rejected.."></input><br/>
                
                <a href="" style={{color:"white"}}>Track account opening</a>
                <a href="" style={{color:"white"}}>Track segment activatin</a>
                <a href="" style={{color:"white"}}>Intraday</a>
                <a href="" style={{color:"white"}}>margins</a>
                <a href="" style={{color:"white"}}>Kite user manual</a>
                </div>
                <div className="col-6 p-3">
                    <h1 className="fs-4">Featured</h1>
                    <ol>
                        <li><a href="" style={{color:"white"}}>Current Takeovers and Delistings - January 2024</a></li>
                        <li><a href="" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                    
                </div>
                
            </div>
        </section>
     );
}

export default Hero;