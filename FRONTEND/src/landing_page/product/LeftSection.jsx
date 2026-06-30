import React from 'react';

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, playStore, appStore}) {
    return ( 
        <div className="container mb-5">
            <div className="row p-3">
                <div className="col p-5">
                    <img src={imageUrl} />
                </div>
                <div className="col mt-3 p-5 text-muted">
                    <h1 className="fs-4 mt-5">{productName}</h1>
                    <p style={{lineheight:"2"}}>{productDescription}</p>
                    <a href={tryDemo} className="fs-6 a-link mt-5" style={{marginRight: "60px"}}>Try Demo <i className="fa-solid fa-arrow-right-long"></i> </a>
                    <a href={learnMore} className="fs-6 a-link mt-2">Learn more<i className="fa-solid fa-arrow-right-long"></i> </a>
                    
                    <div className="mt-5">
                    <a href={playStore}><img src="media/googlePlayBadge.svg" style={{width:"40%", marginRight: "60px"}}/></a>
                    <a href={appStore}><img src="media/appstoreBadge.svg" style={{width:"40%"}}/></a>
                    </div>
                    

                </div>
            </div>
        </div>
     );
}

export default LeftSection;