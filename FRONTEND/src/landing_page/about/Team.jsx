import React from 'react';
import {Link} from 'react-router-dom';

function Team() {
    return ( 
        
        <div className="container ">
            <div className="row  border-top">
            <h1 className=" text-center text-muted mt-5 fs-4">People</h1>
        </div>


            <div className="row p-5  text-muted fs-6" >
                <div className="col-6 text-center">
                    <img src="media/nithinKamath.jpg" style={{borderRadius: "100%", width:"55%"}} />
                    <p className="mt-3" style={{fontSize: "20px"}}>Nithin Kamath</p>
                    <p  style={{fontSize: "14px"}}>Founder,CEO</p>
                </div>
                <div className="col-6 mt-4">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <Link to="/"  style={{textDecoration:"none"}}>Homepage</Link> / <a href=""  style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;