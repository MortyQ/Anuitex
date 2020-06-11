import React, { Component } from 'react';
import './login-panel.css'


  const LoginPanel = ({stateHeader}) =>  {

    const UserPick = (<div className='User-pick'><i className="fas fa-user-clock"></i></div>)
    const TextSingIn = (<div className='SingIn'><p>Sing-In</p></div>)
    const emailLogin = (<div className='email-login' ><p>Email</p><input type="text"/></div>)
    const remember = ( <div className='remember'><input className='checkbox' type="checkbox"/><p>Remember me?</p></div>)
    const BtnSingIn = ( <div className='btn-SingIn'><button><p>SingIn</p></button></div>)



    const hide = ()=>{

        stateHeader({
            loginOpen: false,
        })
    }

    const openRegister =()=>{
        stateHeader({
            loginOpen: false,
            registerOpen: true
        })
    }


        return(

            <div className='login-panel'>
                <div className='btn-div' >
                    <div className='btn-esc'>
                        <button onClick={hide} ><i className="fas fa-times"></i></button>
                    </div>
                </div>
                {UserPick}
                {TextSingIn}
                {emailLogin}
                <div className='password-login'>
                    <div className='text-password'>
                    <p>Password</p>
                    <p className='forget-psw' ><a>Forget the password?</a></p>
                    </div>
                    <input type="text"/>
                </div>
               {remember}
               {BtnSingIn}
               <p className='FinalTextLogin'>New to Book Publishing Company?</p>
               <button className='SingUp' onClick={openRegister} ><p>SingUp</p></button>
            </div>
        
        )

}

export default LoginPanel;