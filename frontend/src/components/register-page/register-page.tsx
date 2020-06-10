import React, { useState } from 'react';
import './register-page.css'
import { UserModel } from '../../shared/models/user-models';
import { register } from '../../services/auth';


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
        })
    }
    const returnSingIn = ()=>{

        stateHeader({
            loginOpen: true,
        })
    }

//  const handle = (event: any) =>{
//      debugger
//     setState({ [event.target.name]: event.target.value } as any);}


    const registerUser =()=>{
        const user:UserModel = {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            password_hash:password_hash.current.value}
        const result = register(user)

    }

    const first_name = React.createRef() as any;
    const last_name = React.createRef() as any;
    const email = React.createRef() as any;
    const password_hash = React.createRef() as any;

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
                                    <input ref={first_name}  type="text" name='first_name' />
                            </div>
                            <div className='LastName register-input'>
                            <span>Your Last Name</span>
                                    <input ref={last_name} type="text" name='last_name'/>
                            </div>
                            <div className='Email-register register-input' >
                            <span>Email</span>
                                    <input ref={email} type="text" name='email' />
                            </div>
                            <div className='Pswrd-register register-input'>
                            <span>Password</span>
                                    <input ref={password_hash} type="text" name='password_hash' />
                            </div>
                            <div className='Conf-pswrd register-input' >
                            <span>Confirm Password</span>
                                    <input type="text"/>
                            </div>
                                <button onClick={registerUser} className='CreateAccount'><p>Sing Up Your Account</p></button>
                            <div className='FinalText-Register'>
                                    <span>Alredy have an Account?</span>
                                    <a onClick={returnSingIn} >Sing In</a>
{state.first_name}
{state.last_name}
{state.email}
{state.password_hash}
                            </div>
                    </div>



        </div>
    )
}

export default RegisterPage;