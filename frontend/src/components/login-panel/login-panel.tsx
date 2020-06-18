import React, {useState } from 'react';
import './login-panel.css'
import { login } from '../../services/auth';


  const LoginPanel = ({stateHeader}) =>  {

    const UserPick = (<div className='User-pick'><i className="fas fa-user-clock"></i></div>)
    const TextSingIn = (<div className='SingIn'><p>Sing-In</p></div>)

    const [state, setState] = useState({
        password_hash: '',
        email: ''
    });

    const handle =(event)=>{
        setState({ ...state, [event.target.name]: event.target.value})
    }

    const remember = ( <div className='remember'><input className='checkbox' type="checkbox"/><p>Remember me?</p></div>)
    const emailLogin = (<div className='email-login' ><p>Email</p><input name='email' onChange={handle} type="text"/></div>)
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

    const loginToken = async()=>{
        debugger;
        const result =await login(state.email, state.password_hash)
        if(!result){
            alert('FAILD')
        }
        localStorage.setItem('accessToken', result.tokenAccess )
        localStorage.setItem('refreshToken', result.tokenRefresh )
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
                    <input name='password_hash'  onChange={handle} type="text"/>
                </div>
               {remember}
               <div className='btn-SingIn'><button onClick={loginToken} ><p>SingIn</p></button></div>
               <p className='FinalTextLogin'>New to Book Publishing Company?</p>
               <button className='SingUp' onClick={openRegister} ><p>SingUp</p></button>
            </div>

        )

}

export default LoginPanel;