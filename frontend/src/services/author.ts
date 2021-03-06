import axios from 'axios';

export async function createAuthor(name: string){
    const result = await axios.post('http://localhost:3333/author/create', {name})
    return result.data
}

export async function getAuthor(){
    const result = await axios.post('http://localhost:3333/author/getAuthors')
    return result.data
}

export async function changeAuthor(name: string, id: string){
    debugger
    const result = await axios.post('http://localhost:3333/author/changeAuthor',{name, id})

    return result.data
}