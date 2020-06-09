import React from 'react';
import './register-page.css'


const RegisterPage =({stateHeader})=>{

    const UserPick = (<div className='User-pick'><i className="fas fa-user-clock"></i></div>)

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
                                    <input type="text"/>
                            </div>
                            <div className='LastName register-input'>
                            <span>Your Last Name</span>
                                    <input type="text"/>
                            </div>
                            <div className='Email-register register-input' >
                            <span>Email</span>
                                    <input type="text"/>
                            </div>
                            <div className='Pswrd-register register-input'>
                            <span>Password</span>
                                    <input type="text"/>
                            </div>
                            <div className='Conf-pswrd register-input' >
                            <span>Confirm Password</span>
                                    <input type="text"/>
                            </div>
                                <button className='CreateAccount'><p>Sing Up Your Account</p></button>
                            <div className='FinalText-Register'>
                                    <span>Alredy have an Account?</span>
                                    <a onClick={returnSingIn} >Sing In</a>

                            </div>
                    </div>



        </div>
    )
}

export default RegisterPage;