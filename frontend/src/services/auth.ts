import axios from 'axios';
import { UserModel } from '../shared/models/user-models';

export async function register(user:UserModel) {
       const result = await axios.post('http://localhost:3333/auth/register', {user})
       return result.data
}

export async function login(email:string, password_hash:string){
       debugger;
       const result = await axios.post('http://localhost:3333/auth/login', {email, password_hash})
       return result.data
}