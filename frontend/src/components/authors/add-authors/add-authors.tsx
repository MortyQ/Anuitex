import React from 'react';
import './add-authors.css'

const AddAuthors =({authorState})=>{

    const hide = ()=>{

        authorState({
            authorCreate: false,
        })
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

            <div className='author-name' ><input type="text"/></div>
            <div className='author-button'>
                <button className='cncl-btn' >Cancel</button>
                <button className='crt-btn' >Create</button>
            </div>

        </div>
    )
}

export default AddAuthors;