import React from 'react';
import Hero from './Hero';
import Team from './Team';
import { Helmet } from 'react-helmet';

function AboutPage() {
    return ( 
    <>
    <Helmet>
        <title>Home - about</title>
    </Helmet>
    <Hero/>
    <Team/>
    </>
 );
}

export default AboutPage;