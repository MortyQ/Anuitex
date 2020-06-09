import React, { Component } from 'react';
import './app.css'
import Head from '../head';
import SearchPanel from '../search-panel/search-panel';
import { BrowserRouter } from 'react-router-dom';





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