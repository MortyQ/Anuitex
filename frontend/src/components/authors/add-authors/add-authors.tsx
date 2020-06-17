import React, { useState } from 'react';
import './add-authors.css'
import {createAuthor} from '../../../services/author'
const AddAuthors =({authorState})=>{

    const [state, setState] = useState({name:''});



    const hide = ()=>{

        authorState({
            authorCreate: false,
        })
    }

    const  handle =(event)=>{
        setState({name: event.target.value})
    }

    const takeAutor = async ()=>{
        const result = await createAuthor(state.name)
        if(!result){
            alert('Alert')
        }
        hide()
    }

    return(
        <div className='authors-add' >
                <div className='btn-div-author' >
                    <div className='btn-esc'>
                        <button onClick={hide} ><i className="fas fa-times"></i></button>
                    </div>
                </div>
            <div className='create-author-text'>
                <article className='plus-create-author' ><i className="fas fa-plus-circle "></i></article>
                <article className='text-add-new-author'>Add New Author</article>
            </div>

            <div className='author-name' ><input onChange={handle} type="text"/></div>
            <div className='author-button'>
                <button className='cncl-btn' >Cancel</button>
                <button className='crt-btn' onClick={takeAutor} ><a className='authors-href' href='/authors' >Create</a></button>
            </div>

        </div>
    )
}

export default AddAuthors;