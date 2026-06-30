import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor: "#fbfbfb"}} className="contaner mt-5 border-top">
        <div className="container ">
            <div className="row p-5 mt-5">
                <div className="col-4">
                    <img src="media/logo.svg" style={{width: "50%"}} />
                    <p className="mt-4 fs-6">© 2010 - 2026, Zerodha Broking Ltd.<br/>All rights reserved.</p>
                    <div className="mt-3">
                    <i className="fa-brands fa-x-twitter fs-5 ml-2 text-muted" style={{marginRight:"25px"}}></i>
                    <i className="fa-brands fa-square-facebook  fs-5 ml-2 text-muted" style={{marginRight:"25px"}}></i>
                    <i className="fa-brands fa-instagram fs-5 ml-2 text-muted" style={{marginRight:"25px"}}></i>
                    <i className="fa-brands fa-linkedin-in fs-5 text-muted"></i>
                    </div>
                    <div className="mt-5">
                    <img src="media/appstoreBadge.svg" style={{marginRight:"12px"}}/>

                    <img src="media/googlePlayBadge.svg"/>
                    </div>

                </div>
                <div className="col-2">
                    <h4 className="text-muted mb-4">Account</h4>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Signup</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Open demat account</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Minor demat account</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">NRI demat account</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">HUF demat account</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Commodity</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Dematerialisation</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Fund transfer</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">MTF</a></p>
                </div>
                <div className="col-2">
                    <h4 className="text-muted mb-4">Support</h4>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Contact us</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Support portal</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">How to file a complaint?</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Status of your complaints</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Bulletin</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Circular</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Z-Connect blog</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Downloads</a></p>
                </div>
                <div className="col-2">
                    <h4 className="text-muted mb-4">Company</h4>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">About</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Philosophy</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Press & media</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Careers</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Zerodha Cares (CSR)</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Zerodha.tech</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Open source</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Referral program</a></p>
                </div>
                <div className="col-2">
                    <h4 className="text-muted mb-4">Quick links</h4>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Upcoming IPOs</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Brokerage charges</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Market holidays</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Economic calendar</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Calculators</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Markets</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Sectors</a></p>
                    <p><a className="text-muted fs-6 f-links" aria-current="page" href="#">Gift Nifty</a></p>
                </div>
        </div>
        <div className="mt-5 p-2 pb-0 text-muted" style={{fontSize:"12px"}}>
        <p>Zerodha Broking Ltd.: Member of NSE BSE MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

<p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

<p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

<p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

<p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
        </div>
        </div>
        </footer>
     );
}

export default Footer;