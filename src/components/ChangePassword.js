import { useState } from "react"
import UserService from "../services/UserService"

function ChangePassword(props){
    const changepasswordobj={
        email:props.match.params.email,
        password:''
    }

    const[changepassword,setChangepassword]=useState(changepasswordobj)

    const changePasswordHandle=(event)=>{
        setChangepassword({...changepassword,[event.target.name]:event.target.value})
    }

    const updatePassword=(event)=>{
         const email=props.match.params.email
         event.preventDefault()
         let newpassword={password:changepassword.password}
         console.log('newpassword => '+JSON.stringify(newpassword));

         UserService.setNewPassword(email,newpassword).then(res=>{
             alert("Password updated")
                props.history.push('/login')
         })

    }


    return(
        <div className="center">
            <h1>Set new password</h1>
            <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"  placeholder="name@example.com" name="email" onChange={changePasswordHandle} required/>
                    <span></span>
                    <label htmlFor="floatingInput">Email Address</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"  placeholder="Password" name="password" onChange={changePasswordHandle} required/>
                    <span></span>
                    <label htmlFor="floatingPassword">New Password</label>
                </div>

                <div className="login">
                    <input className="btn btn-primary" type="submit" value="Set Password" onClick={updatePassword}/>
                </div>

                {/* <div className="register_link">Not a member?
                    <Link to="/register">Register</Link>
                </div> */}
            </form>
        </div>
    )
}

export default ChangePassword