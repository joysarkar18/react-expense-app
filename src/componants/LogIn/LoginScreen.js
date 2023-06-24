import React from "react";
import "./LoginScreen.css"
const LoginScreen = (props)=>{
 
  const onClickHandeler = () => {
    localStorage.setItem("isLogin" , "1");
    props.setisLogin(true);
  }

    return (
        <div className="login-div">
          <form action="">
            <label >Enter Your Email</label>
            <input type="email" />
            <label >Enter Your Password</label>
            <input type="text" />
            <div>
              <button type="submit" onClick={onClickHandeler}>submit</button>
            </div>
          </form>
        </div>
    )
}

export default LoginScreen;