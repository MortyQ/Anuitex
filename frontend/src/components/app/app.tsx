import React, { Component } from 'react';
import './app.css'
import Head from '../head';
import SearchPanel from '../search-panel/search-panel';
import { BrowserRouter } from 'react-router-dom';
import ConfirmEmail from '../confirm-email-adress/confirm-email-adress';





export default class App extends Component {


    render(){



        return(
            <BrowserRouter>
            <div className='wrapper'>
            <Head />
            < SearchPanel/>
            </div>
            </BrowserRouter>
        )
    }
}