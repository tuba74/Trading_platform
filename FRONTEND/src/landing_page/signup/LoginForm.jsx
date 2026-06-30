import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate , Link} from "react-router-dom";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Helmet } from 'react-helmet';


function LoginForm() {
    const [popUp, setPopUp] = useState(false);
    const[popUpMsg, setPopUpMsg] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
        const res = await axios.post("http://localhost:8000/login",formData,
  {
    withCredentials: true   //  REQUIRED
  });
        console.log(res);
        // setPopUpMsg(res.data.message);
        setFormData({
        email: "",
        password: ""
        });
        if(res.status == 201){
            setPopUp(true);
            setPopUpMsg(true);
            setTimeout(() => {
                window.location.href = "http://localhost:5173";
            }, 4000);
            
        }
        else if(res.status == 400){
            setPopUp(true);
            setPopUpMsg(false);
            setTimeout(() => {
                
                axios.get("http://localhost:5174/login"
                    , {
                    withCredentials: true
                }
            )
            }, 4000);
        }
        }catch(err){
            console.error(err);
        }

        };
    return ( 
        <>
        <Helmet>
        <title>Login</title>
    </Helmet>
        <Snackbar open={popUp}autoHideDuration={4000} onClose={()=>setPopUp(false)}>
             {popUpMsg ? (<Alert severity="success">Logged In Successfully</Alert>):(<Alert severity="warning">Invalid email or password</Alert>)}
        </Snackbar>

        <div className="container">
             
            <div className="text-center p-5 mt-5 mb-5">
            <h1 className="fs-3">Open a free demat and trading account online</h1>
            <p className="mt-3  text-muted" style={{fontSize:"20px"}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>

            <div className="row ">
                <h1  className="fs-3">Login</h1>
                <p className="mt-3  text-muted" style={{fontSize:"20px"}}>Or track your existing application</p>
            <div className="col-5" >
        
                <form onSubmit={handleSubmit}>
                <div className="col-6">
                <label htmlFor="inputPassword6" className="col-form-label">Email</label>
                </div>
                <div className="col-6">
                <input type="email" id="inputPassword6" className="form-control"  name="email" onChange={handleChange} value={formData.email}/>

                </div>
                <div className="col-6">
                <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                </div>
                <div className="col-6">
                <input type="password" id="inputPassword6" className="form-control"  name="password" onChange={handleChange} value={formData.password}/>

                </div>
                                
                  <div className="col-6 p-2">
                        <button type="submit"className="btn btn-primary mt-4 ">Login</button>
                </div>
        </form>
            <Link to="/signup" className="fs-6 mt-5 p-3" style={{textDecoration:"none"}}>Sign Up</Link>
              

        </div>
        
        <div  className="col-7">
            <img  src="media/account_open.svg" style={{width: "100%"}} alt="Home page"/>
            </div>
            </div>
        </div>
        </>
     );
};



export default LoginForm;