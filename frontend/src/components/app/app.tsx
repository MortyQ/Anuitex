import React, { Component } from 'react';
import './app.css'
import Head from '../head';
import SearchPanel from '../search-panel/search-panel';
import { BrowserRouter, Route } from 'react-router-dom';
import ConfirmEmail from '../confirm-email-adress/confirm-email-adress';
import BooksPage from '../books/books'
import AuthorsPage from '../authors/authors';
import AddProduct from '../add-product/add-product';




export default class App extends Component {


    render(){



        return(
            <BrowserRouter>
            <main>
            <Head />
            < SearchPanel/>
            <div className='wrapper'>
            <Route path = '/books'
            component = {BooksPage}/>
            <Route path = '/authors'
            component = {AuthorsPage}/>
            <Route path = '/add-product'
            component = {AddProduct}/>
            </div>
            </main>
            </BrowserRouter>
        )
    }
}