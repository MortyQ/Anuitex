import React, { useState } from 'react';
import './authors.css'
import AddAuthors from './add-authors/add-authors';


const AuthorsPage =()=>{

    const [state, setState] =useState({
        authorCreate: false,
    });

    const openAuthorRegister =()=>{
        setState({
            authorCreate:true,
        })

    }
    // const elementsTable = author.map((item)=>{

    //         let count = 0;

    //     return(
    //          <tr>
    //         <td className='frs' >{count++}</td>
    //         <td className='sec' >Author1</td>
    //         <td className='thr' >Book1</td>
    //         <td className='fr' >Book1</td>
    //         </tr>
    //         )
    // })

    return(
        <section className='authors'>
                <div className='authors-logo' >
            <h1>Author Page</h1>
           <div className='plus-authors' >
               <a onClick={openAuthorRegister} >
            <i className="fas fa-plus-circle "></i>
               </a>
               {state.authorCreate&& <AddAuthors authorState={setState} />}

           </div>
            </div>
            <div className='authors-main' >
                <div className='table-main'>
                    <table>
                    <tr>
                        <td className='table-top frs' >ID</td>
                        <td className='table-top  sec' >Authors</td>
                        <td className='table-top thr' >Product</td>
                        <td className='table-top fr' >    </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default AuthorsPage;