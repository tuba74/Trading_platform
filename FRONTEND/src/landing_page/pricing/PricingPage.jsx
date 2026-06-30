import React from 'react';
import Hero from './Hero';
import Brokerage from "./Brokerage";
import OpenAcc from "../OpenAcc";
import { Helmet } from 'react-helmet';

function PricingPage() {
    return ( 
        <>
        <Helmet>
        <title>Home - price</title>
    </Helmet>
        <Hero />
        <OpenAcc/>
        <Brokerage/>
        </>
     );
}

export default PricingPage;