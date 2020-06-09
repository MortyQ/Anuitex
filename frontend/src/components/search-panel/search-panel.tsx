import React, { Component } from 'react';
import './search-panel.css';


const SearchPanel =()=> {


        const SecondPage = <a href="#"> <p className='page-second' >Book</p></a>
        const Page = <div> <a href="#"> <p   className='page-scrin'>Home /{SecondPage}</p></a></div>


        return(
            <div className='panel'>
                {Page}

            <input  className='search-action'  type="text" placeholder="Search"/>

            </div>
        )

}

export default SearchPanel;