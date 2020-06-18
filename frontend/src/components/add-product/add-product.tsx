import React, { useState, useEffect } from 'react';
import './add-product.css'
import CreateProduct from './create-product/create-product';
import { getBooks } from '../../services/printing';
import { Authors } from '../../shared/models/authors-model';


const AddProduct =()=>{

    const [state, setState] =useState({
        productCreate: false,
    });

    const [data, setData] = useState({
        books:[] as any
    })

    const openCreateProduct =()=>{
        setState({
            productCreate: true,
        })
    }

    useEffect(()=> {
        func()
},[])
const func =async ()=>{
    const resultData =await getBooks();
    setData({
        books: resultData
    })
}


let count = 0;
const BooksTable = data.books.map(item => {
    return(
        <tr>
        <td className='frs main-frs' >{count++}</td>
    <td className='sec main-sec' >{item.title}</td>
    <td className='sec main-sec' >{item.description}</td>
    <td className='sec main-sec' >{item.type}</td>
    <td className='sec main-sec' >{item.price}</td>
    <td className='thr main-thr' >{item.author_ids.map(item =>{
            return (<span>{item.name}</span>)
        })}</td>
          <td className='fr  main-fr' ><a><i className="fas fa-pencil-alt"></i></a><a><i className="fas fa-times times-fa"></i></a></td>
         </tr>
        )
});




    return(
        <div className='add-product'>
            <h3 className='catalog-text' >Catalogs</h3>
            <div className='add-product-text'>

            <h2>Product Management</h2>
            <div className='plus-authors plus-books' >
               <a onClick={openCreateProduct} >
                    <i className="fas fa-plus-circle "></i>
               </a>
               {state.productCreate&& <CreateProduct createProductState={setState} />}
           </div>
            </div>
            <div className='table-main'>
                    <table>
                    <tr>
                        <td className='table-top frs' >ID</td>
                        <td className='table-top  frs name-add-product' >Name</td>
                        <td className='table-top thr' >Description</td>
                        <td className='table-top fr' >Category</td>
                        <td className='table-top fr' >Price</td>
                        <td className='table-top fr' >Authors</td>
                        <td className='table-top fr' >    </td>
                        </tr>
                            {BooksTable}
                    </table>
                </div>

        </div>
    )
}

export default AddProduct;