import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Error from './Error.jsx';

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [errorData, setErrorData] = useState(null);
    const navigate = useNavigate();
  // useEffect(() => {
    // const verifyUser = async() =>{
    //     try{
    //         const res = await axios.get("http://localhost:8000/verify", {
    //         withCredentials: true // important for cookies
    //         })
    //         console.log(res);
    //         setIsAuth(true)
        
    //     }catch(err){
    //         console.log(err);
    //     const message = err?.response?.data?.message;
    //     const status = err?.response?.status;
    //     // console.log(err);
    //     setIsAuth(false)
    //     navigate( "/Error", {state: {
    //         status, message
    //     }})
    //     }
    // }
    // verifyUser();
    // },[]);
    useEffect(() => {
      axios.get("http://localhost:8000/verify", {
      withCredentials: true // important for cookies
    })
      .then((res) => {
        setIsAuth(true)}
    )
      .catch((err) => {
        const message = err?.response?.data?.message || "Something went wrong";
      const status = err?.response?.status || 500;

      setErrorData({ message, status }); 
      setIsAuth(false);
        // Navigate( "/Error", {state: {
        //     status, message
        // }})
    });
  }, []);
    

  if (isAuth === null) return <div>Looading...</div>;

  return isAuth ? children :  <Error message={errorData?.message} status={errorData?.status} />;
};

export default PrivateRoute;