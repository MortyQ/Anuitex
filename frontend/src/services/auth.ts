import axios from 'axios';
import { UserModel } from '../shared/models/user-models';

export async function register(user:UserModel) {
       debugger
       const result = await axios.post('http://localhost:3333/auth/register', {user})
       return result.data
}