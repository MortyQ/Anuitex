import React, { useState , useEffect} from 'react';
import './create-product.css'
import FileBase from "react-file-base64";
import { enumSelector } from '../../../shared/enum-extend';
import { Currency } from '../../../shared/enums';
import { Print } from '../../../shared/printing';
import { getAuthor } from '../../../services/author';
import { Authors } from '../../../shared/models/authors-model';
import { PrintingEdition } from '../../../shared/models/printiong-models';
import { createPrinting } from '../../../services/printing';

const CreateProduct =({createProductState})=>{

const [img , setImg] = useState('');
const [authors , setAuthors] = useState([]);
const [books, setBooks] = useState({
    title: '',
    description:'',
    type: Print.book,
    price: 0,
    currency: Currency.UAH,
    author_ids: '',
});


    const handle =(e)=>{
        setBooks({...books, [e.target.name]: e.target.value })
    }

    const createPrintEdition = async ()=>{
        debugger;
        const resultAuthors = [] as any
        resultAuthors.push(books.author_ids)
        const book:PrintingEdition = {
    title: books.title,
    description: books.description,
    cover_image: img,
    type: books.type,
    price: books.price,
    currency: books.currency,
    author_ids: resultAuthors,
        }
        const result = await createPrinting(book)
    }



const hide = ()=>{

createProductState({
productCreateOpen: false,
})
}

const func =async ()=>{
const resultData =await getAuthor();
setAuthors(resultData)
}
useEffect(()=> {
func()
},[])

const currency = enumSelector(Currency)
const printing = enumSelector(Print)

const createImage =(e)=>{
setImg(e.base64)
}

return(
<div className='createPage'>
    <div className='btn-div-author'>
        <div className='btn-esc'>
            <button onClick={hide}><i className="fas fa-times"></i></button>
        </div>
    </div>
    <h2 className='add-new-product-text'>Add New Product</h2>
    <div className='create-product-body'>

        <div className='create-left'>
            <form>
                <span className='text-create-left'>
                    <p>Title </p>
                </span>
                <label>
                    <textarea className='text-input-create' onChange={handle}  name="title"> </textarea>

                </label>
            </form>
            <form>
                <span className='text-create-left-sec'>
                    <p>Description</p>
                </span>
                <label>
                    <textarea className='text-input-create-sec' onChange={handle}  name="description"> </textarea>

                </label>

            </form>
        </div>
        <div className='create-right'>
            <div className='select-img'>
            <img className='book-img' src={img} />
            <FileBase type='file' multiple={false} onDone={createImage} />
            </div>
            <div className='select-body'>

                <div className='select whrite-prise'>
                    <p>Category</p>
                    <select onChange={handle} name='type' >
                        {printing.map((item, i)=>{
                        return(<option>{item}</option>)
                        })}
                    </select>
                </div>
                <div className='select whrite-prise'>
                    <p>Authors</p>
                    <select onChange={handle} name='author_ids' >
                        {authors.map((item: Authors, i)=>{
                            debugger
                        return(<option value={item._id} >{item.name}</option>)
                        })}
                    </select>
                </div>
                        <div className='whrite-prise'>
                            <p>Prise</p>
                            <input type="number" onChange={handle} name="price"/>
                        </div>
                <div className='select whrite-prise'>
                    <p>Currency</p>
                    <select onChange={handle} name='currency' >
                        {currency.map((item, i)=>{

                        return(<option>{item}</option>)
                        })}
                    </select>
                </div>
            </div>
        </div>

    </div>
    <div className='create-button'>
        <button className='cncl-prod'>
            <p>Cancel</p>
        </button>
        <button className='cncl-prod-right' onClick={createPrintEdition} >
            <p>Create</p>
        </button>
    </div>
</div>
)
}

export default CreateProduct;