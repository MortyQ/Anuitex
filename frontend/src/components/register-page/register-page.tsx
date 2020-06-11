import React, { useState } from 'react';
import './register-page.css'
import { UserModel } from '../../shared/models/user-models';
import { register } from '../../services/auth';
import LoginPanel from '../login-panel/login-panel';
import ConfirmEmail from '../confirm-email-adress/confirm-email-adress';


const RegisterPage =({stateHeader})=>{

    const UserPick = (<div className='User-pick'><i className="fas fa-user-clock"></i></div>)


        const [state, setState] = useState({
            password_hash: '',
            first_name: '',
            last_name: '',
            email: ''
        });


    const hide = ()=>{

        stateHeader({
            loginOpen: false,
            showConfirmEmail: false,
        })
    }
    const returnSingIn = ()=>{

        stateHeader({
            loginOpen: true,
            showConfirmEmail: false,

        })
    }


    const handle =(event)=>{
        setState({ ...state, [event.target.name]: event.target.value})
    }

    const registerUser = async ()=>{
        const user:UserModel = {
            first_name: state.first_name,
            last_name: state.last_name,
            email: state.email,
            password_hash:state.password_hash}

        const result = await register(user)
        if(!result){
            alert("this email already used")
        }
        if (result) {
            hide()
            stateHeader({
                showConfirmEmail: true,
            })
        }
    }

    return(
        <div className='RegisterPage' >
             <div className='btn-div' >
                    <div className='btn-esc'>
                        <button onClick={hide} ><i className="fas fa-times"></i></button>
                        </div>
                        {UserPick}
                        <span className='CreateAccount' ><p>Create Account</p></span>
                            <div className='FrstName register-input'>
                                    <span>Your First Name</span>
                                    <input onChange={handle}  type="text" name='first_name' />
                            </div>
                            <div className='LastName register-input'>
                            <span>Your Last Name</span>
                                    <input onChange={handle}  type="text" name='last_name'/>
                            </div>
                            <div className='Email-register register-input' >
                            <span>Email</span>
                                    <input onChange={handle}  type="text" name='email' />
                            </div>
                            <div className='Pswrd-register register-input'>
                            <span>Password</span>
                                    <input onChange={handle} type="text" name='password_hash' />
                            </div>
                            <div className='Conf-pswrd register-input' >
                            <span>Confirm Password</span>
                                    <input type="text"/>
                            </div>
                                <button onClick={registerUser} className='CreateAccount'><p>Sing Up Your Account</p></button>
                            <div className='FinalText-Register'>
                                    <span>Alredy have an Account?</span>
                                    <a onClick={returnSingIn} >Sing In</a>
                            </div>
                    </div>



        </div>
    )
}

export default RegisterPage;