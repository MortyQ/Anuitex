import React, { Component, useState } from 'react';
import './head.css'
import B from './img/VectorB.png'
import O from'./img/VectorO.png'
import K from'./img/VectorK.png'
import TextImg from './img/Text.png'
import LoginPanel from '../login-panel/login-panel';
import RegisterPage from '../register-page/register-page';
import ConfirmEmail from '../confirm-email-adress/confirm-email-adress';

const Head =()=> {


    const [state, setState] =useState({
        loginOpen: false,
        registerOpen: false,
        showConfirmEmail: false,

    });

  const  openLogin =()=>{
            setState({
                loginOpen: true,
                registerOpen: false,
                showConfirmEmail: false,
            })
    }



        return(
                <header className='header'>
                    <div className='logo'>

                    <div className='book'>
                        <img src={B} />
                        <img src={O} />
                        <img src={O} />
                        <img src={K} />
                        </div>
                        <div className='text' >
                        <img src={TextImg} />
                        </div>
                    </div>

                        <nav>
                            <div className='login'>
                                {/* eslint-disable-next-line*/}
                                  <a  onClick={openLogin} >login</a>
                                {state.loginOpen&& <LoginPanel stateHeader={setState} />}
                                {state.registerOpen&& <RegisterPage stateHeader={setState} />}
                                {state.showConfirmEmail&& <ConfirmEmail stateHeader={setState} />}
                            </div>
                            <div className='person'>
                            <a ><i className="fas fa-user-check"></i></a>
                            </div>
                            <div className='shope' >
                                <a ><i className="fas fa-cart-arrow-down"></i></a>
                            </div>
                        </nav>

                </header>

        )

}

export default Head;