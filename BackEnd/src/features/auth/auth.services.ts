import { register, confirmEmail } from './auth.repository';
import { User } from '../shared/db-models/user-models';



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
