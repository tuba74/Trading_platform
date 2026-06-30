import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// import GeneralContext from "./GeneralContext";

const Orders = () => {
  const[allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios. get("http://localhost:8000/dashboard/orders/allOrders",  {
      withCredentials: true // important for cookies
    })
    .then((res) =>{
      setAllOrders(res.data);
    })
  } ,[]);

  // const generalContext = useContext(GeneralContext);
  // const handleBuyClick = () => {
  // generalContext.openBuyWindow(stock.id);
  // };          
  return (
    
    <>
    <Helmet><title>Dashboard | Orders</title></Helmet>
      <h3 className="title">Orders (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Qty.</th>
            <th>Percent</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) =>{
           

          return(
            <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty.toFixed(2)}</td>
            <td>{stock.percent}</td>
            <td>{stock.mode}</td>
          </tr>
          );
          })}
        </table>

           <button className="btn">Get Started</button>
       
      </div>
    </>
  );
};


export default Orders;
