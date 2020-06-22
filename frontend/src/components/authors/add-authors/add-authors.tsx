import React, { useState } from 'react';
import './add-authors.css'
import { createAuthor,  changeAuthor } from '../../../services/author';
const AddAuthors =({authorState, title, button,value})=>{
    const [state, setState] = useState({name:'',});



    const hide = ()=>{

        authorState({
            authorCreate: false,
        })
    }

    const  handle =(event)=>{
        setState({...state,name: event.target.value})
    }

    const takeAutor = async ()=>{
        let result;
        if(title === 'Change Author'){
        result =await changeAuthor(state.name, value.id)
        }
        if(title === 'Create Author'){
         result = await createAuthor(state.name)
        }
        if(!result){
           alert(`Имя автора ${state.name} Изменине`)
            // alert(result)
        }
        hide()
    }


   const authorComponent =()=>{
        return(
        <div className='authors-add' >
        <div className='btn-div-author' >
            <div className='btn-esc'>
                <button onClick={hide} ><i className="fas fa-times"></i></button>
            </div>
        </div>
    <div className='create-author-text'>
        <article className='plus-create-author' ><i className="fas fa-plus-circle "></i></article>
        <article className='text-add-new-author'>{title}</article>
    </div>

    <div className='author-name' ><input defaultValue={value.name}  onChange={handle} type="text"/></div>
    <div className='author-button'>
        <button className='cncl-btn' >Cancel</button>
        <button className='crt-btn' onClick={takeAutor} ><a className='authors-href' href='/authors' >{button}</a></button>
    </div>

</div>
        )}





    return(
    authorComponent()
    )
}

export default AddAuthors;