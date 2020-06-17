import React, { useState, useEffect } from 'react';
import './authors.css'
import AddAuthors from './add-authors/add-authors';
import { getAuthor, } from '../../services/author';



const AuthorsPage =()=>{


    const [state, setState] =useState({
        authorCreate: false,
    });

    const [data, setData] = useState({
        authors:[] as any
    })




    const openAuthorRegister =()=>{
        setState({
            authorCreate:true,
        })
    }

    useEffect(()=> {
            func()
    },[])
    const func =async ()=>{
        const resultData =await getAuthor();
        setData({
            authors: resultData
        })
    }

    let count = 0;
        const elementsTable = data.authors.map(item => {
            let result = ""
            item.product_ids.map(item =>{
                result = item.title
            })

        return(
            <tr>
            <td className='frs main-frs' >{count++}</td>
        <td className='sec main-sec' >{item.name}</td>
        <td className='thr main-thr' >{item.product_ids.map(item =>{
                return (<span>{item.title}</span>)
            })}</td>
              <td className='fr  main-fr' ><a><i className="fas fa-pencil-alt"></i></a><a><i className="fas fa-times times-fa"></i></a></td>
             </tr>
            )
    });

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
                            {elementsTable}

                    </table>
                </div>
            </div>
        </section>
    )
}

export default AuthorsPage;