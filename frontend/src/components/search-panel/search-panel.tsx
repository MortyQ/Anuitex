import React, { Component } from 'react';
import './search-panel.css';


const SearchPanel =()=> {


        const home = <div> <a href="/home"> <p   className='page-scrin'>Home</p></a></div>
        const books = <div> <a href="/books"> <p className='page-second' >Books Catalog</p></a></div>
        const authors =  <div> <a href="/authors"> <p className='page-second' >Authors</p></a></div>
        const addProduct = <div> <a href="/add-product"> <p className='page-second' >Add Product</p></a></div>


        return(
            <div className='panel'>
                <nav className='nav-menu-search'>
                {home}
               {books}
               {authors}
               {addProduct}

                </nav>
            <div>

            <input  className='search-action'  type="text" placeholder="Search"/>
            </div>

            </div>
        )

}

export default SearchPanel;