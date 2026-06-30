import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAcc from "../OpenAcc";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Education from './Education';
import { Helmet } from 'react-helmet';

function HomePage() {
    return ( 
        <>
        <Helmet>
        <title>Home</title>
    </Helmet>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAcc  />
        </>
     );
}

export default HomePage;