import { register } from './auth.repository';
import { UserModel, User } from '../shared/db-models/user-models';



export async function registerUser(user:User) {
    const result = register();
    return 'hello'
}
