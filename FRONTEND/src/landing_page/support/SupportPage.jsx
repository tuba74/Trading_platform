import React from 'react';
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import { Helmet } from 'react-helmet';
function SupportPage() {
    return ( 
        <>
        <Helmet>
        <title>Home - support</title>
    </Helmet>
        <Hero/>
        <CreateTicket/>
        </>
     );
}

export default SupportPage;