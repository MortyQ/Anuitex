import { register, confirmEmail, confirmLogin } from './auth.repository';
import userModel, { User } from '../shared/db-models/user-models';
import { createToken } from './token/create-token';



export async function registerUser(user: User) : Promise <Boolean> {
    const result = await register(user);
    if (!result){
        return result
    }
    return result

}

export async function complitRegistr(id: String){
    const result = await confirmEmail(id);
    if(!result){
        return result
    }
    return result
}

export async function complitLogin(email:string, password_hash:string) {
    const result = await confirmLogin(email, password_hash);
    if(typeof result === 'string' ){
        return result
    }
    const tokenResult = createToken(result)
    return tokenResult
}

