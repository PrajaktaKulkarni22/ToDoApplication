import { useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import UserService from '../services/UserService';

function HomePage(props){

    // const isLoggedIn=props.isLoggedIn;
    
    
    const loginObj={
        email:'',
        password:''
    }

    const [login,setLogin]=useState(loginObj);

    // if(isLoggedIn){
    //     return <Redirect to="/viewtask" />
    // }
    const handleChange=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value})
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(login);

        var x=document.getElementById("floatingInput").value;
        var y=document.getElementById("floatingPassword").value;
        if(x=="" || y==""){
            alert("Please enter the details")
            props.history.push('/login')
        }
        
        else
        UserService.checkLogin(login).then(res=>{
            
            console.log(res.status);
            if(res.status==200 ){
                props.history.push('/viewtask')
            }
            if(res.status==400)
                alert("Invalid Credentials")
           
        })
        
    
    }


    return(
        <div className="center1">
            <h1>Login</h1>
            <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"  placeholder="name@example.com" name="email" value={login.email} onChange={handleChange} required/>
                    <span></span>
                    <label htmlFor="floatingInput">Email Address</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"  placeholder="Password" name="password" value={login.password} onChange={handleChange} required/>
                    <span></span>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="login">
                    <input className="btn btn-primary" type="submit" value="Login" onClick={handleLogin}/>
                </div>

                <div className="forgetpassword">
                    <Link to="/changepassword">Forget Password</Link>
                </div>

                <div className="register_link">Not a member?
                    <Link to="/register">Register</Link>
                </div>
            </form>

        </div>
    )
}

export default HomePage