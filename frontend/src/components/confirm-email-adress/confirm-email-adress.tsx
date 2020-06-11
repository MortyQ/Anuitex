import React from 'react';
import './confirm-email-adress.css'
import imgConfirm from './img/Login.png'
import discript from './img/Description.png'

const ConfirmEmail =({stateHeader})=>{


    const hide = ()=>{

        stateHeader({
            loginOpen: false,
            registerOpen: false,
            showConfirmEmail: false,
        })
    }



    return(
        <div className='login-panel confirm-email'>
             <div className='btn-div' >
                    <div className='btn-esc'>
                        <button onClick={hide} ><i className="fas fa-times"></i></button>
                    </div>
                    <div >
                    <img className='img-confirm' src={imgConfirm} alt=""/>
                    </div>
                    <div>
                        <img className='img-disc' src={discript} alt=""/>
                    </div>
                </div>


        </div>
    )
}

export default ConfirmEmail;