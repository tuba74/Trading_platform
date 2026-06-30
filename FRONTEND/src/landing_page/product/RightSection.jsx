import React from 'react';

function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col mt-5 text-muted">
                    <h1 className="fs-4 mt-5">{productName}</h1>
                    <p style={{lineheight:"2"}}>{productDescription}</p>
                    <a href={learnMore} className="fs-6 a-link mt-5" >Learn More <i className="fa-solid fa-arrow-right-long"></i> </a>
                </div>
                <div className="col ">
                    <img src={imageUrl}/>
                </div>
                
            </div>
        </div>
      );
}

export default RightSection;