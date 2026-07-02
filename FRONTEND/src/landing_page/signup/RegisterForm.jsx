import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate , Link} from "react-router-dom";
// import "./bootstrapValidation.js';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Helmet } from 'react-helmet';

function RegisterForm() {
    const navigate = useNavigate();
    const [popUp, setPopUp] = useState(false);
    const[popUpMsg, setPopUpMsg] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        contact: "",
        zerodhaApp: "Kite"
    });
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
        const res = await axios.post("http://localhost:8000/signup",formData);
        console.log(res.data);
        setFormData({
        username: "",
        email: "",
        password: "",
        contact: "",
        zerodhaApp: ""
        });

        if(res.status == 201){
            setPopUp(true);
            setPopUpMsg(true);
            setTimeout(() => {
                navigate("/login");
            }, 4000);
            
        }
        else if(res.status == 200){
            setPopUp(true);
            setPopUpMsg(false);
        }
    }catch(err){
            console.error(err);
        }
}
    return ( 
        <>
        <Helmet>
        <title>SignUp</title>
    </Helmet>
       <Snackbar open={popUp} autoHideDuration={4000} onClose={()=>setPopUp(false)}>
             {popUpMsg ? (<Alert severity="success">User registered successfully!</Alert>):
             (<Alert severity="info">User already exists!</Alert>)}
        </Snackbar>
        
        
        
      <div className="container">
        
            <div className="text-center p-5 mt-5 mb-5">
            <h1 className="fs-3">Open a free demat and trading account online</h1>
            <p className="mt-3  text-muted" style={{fontSize:"20px"}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>

            <div className="row ">
                <h1  className="fs-3">Signup now</h1>
                <p className="mt-3  text-muted" style={{fontSize:"20px"}}>Or track your existing application</p>
            <div className="col-5" >
                
               <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="col-6">
                <label htmlFor="inputPassword6" className="col-form-label">username</label>
                </div>
                <div className="col-6">
                <input type="text" id="inputPassword6" className="form-control" name="username" value={formData.username} onChange={handleChange}/>
                <div className="invalid-feedback">
        Please choose a username.
      </div>
                </div>
                <div className="col-6">
                <label htmlFor="inputPassword6" className="col-form-label">Email</label>
                </div>
                <div className="col-6">
                <input type="email" id="inputPassword6" className="form-control"  name="email" value={formData.email} onChange={handleChange}/>

                </div>
                <div className="col-6">
                <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                </div>
                <div className="col-6">
                <input type="password" id="inputPassword6" className="form-control"  name="password" value={formData.password} onChange={handleChange}/>

                </div>
                <div className="col-6">
                <label htmlFor="inputPassword6" className="col-form-label">Contact</label>
                </div>
                <div className="col-6">
                <input type="tel" pattern="[0-9]{10}" id="inputPassword6" className="form-control"   name="contact"onChange={handleChange} value={formData.contact} pattern="[0-9]{10}" maxLength={10}/>

                </div>
                <div className="col-6">
                <label htmlFor="inputPassword6" className="col-form-label">Zerodha App</label>
                </div>
                
                <div className="col-6">
                <select id="inputState" className="form-select"  name="zerodhaApp" value={formData.zerodhaApp} onChange={handleChange}>
                <option value="kite connect" >Kite Connect</option>
                <option value="coin">Coin</option>
                <option value="console">Console</option>
                <option value="kite">Kite</option>
                </select>
                </div>
                  <div className="col-6 p-2">
                        <button type="submit"className="btn btn-primary mt-4 ">Sign Up</button>
                </div>
        </form>
            <Link to="/login" className="fs-6 mt-5 p-3" style={{textDecoration:"none"}}>Sign In</Link>
              

        </div>
        
        <div  className="col-7">
            <img  src="media/account_open.svg" style={{width: "100%"}} alt="Home page"/>
            </div>
            </div>
        </div>
        </>
     );
}

export default RegisterForm;

