import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import { Helmet } from 'react-helmet';

function ProductPage() {
    return ( 
        <>
        <Helmet>
        <title>Products</title>
    </Helmet>
        <Hero/>

        <LeftSection imageUrl="media/kite.png" productName="Kite" productDescription={<>Our ultra-fast flagship trading platform with <br/>streaming market data, advanced charts, an $<br/>elegant UI, and more. Enjoy the Kite <br/>experience seamlessly on your Androidand <br/>iOS devices.</>}tryDemo="" learnMore="" playStore="" appStore=""/>

        <RightSection imageUrl="media/console.png" productName="Console" productDescription={<>The central dashboard for your Zerodha <br/>account. Gain insights into your trades and <br/>investments with in-depth reports and <br/>visualisations.</>} learnMore="" />

        <LeftSection imageUrl="media/coin.png" productName="Coin" productDescription={<>Buy direct mutual funds online, commission<br/>-free, delivered directly to your Demat <br/>account. Enjoy the investment experience <br/>on your Android and iOS devices.</>}tryDemo="" learnMore="" playStore="" appStore=""/>

        <RightSection imageUrl="media/kiteconnect.png" productName="Kite Connect API" productDescription={<>Build powerful trading platforms and <br/>experiences with our super simple  <br/>HTTP/JSON APIs. If you are a startup, build  <br/>your investment app and showcase it to our <br/> clientbase.</>} learnMore="" />

        <LeftSection imageUrl="media/varsity.png" productName="Varsity mobile" productDescription={<>An easy to grasp, collection of stock market <br/>lessons with in-depth coverage and <br/>illustrations. Content is broken down into <br/>bite-size cards to help you learn on the go.</>}tryDemo="" learnMore="" playStore="" appStore=""/>

        <Universe/>
        </>
        
     );
}

export default ProductPage;