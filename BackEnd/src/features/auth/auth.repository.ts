import userModel, { User } from '../shared/db-models/user-models';
import bcrypt from 'bcrypt';
import { sendingEmail } from './email.helper';



export async function register(user:User): Promise<boolean> {
    const checkUser = await userModel.findOne({ email: user.email })
    if (checkUser) {
        return false
    }


    const salt = await bcrypt.genSaltSync(10);
    user.password_hash = await bcrypt.hashSync(user.password_hash, salt);


    const result = await userModel.create(user)
    if(result === null){
        return false
        }
        sendingEmail(result)
         return true
}

export async function confirmEmail(id:String){
    const user = userModel.findOne({_id: id})
    if(await(!user)){
        return false
    }
    let newUser = await user
    newUser.confirmed_email = true;
    const confirmEm = await userModel.update(user, newUser )
}

export async function confirmLogin(email:string, password_hash:string):Promise<userModel| string> {
    const loginEmail = await userModel.findOne({email: email})
    if(!loginEmail){
        return 'User not found'
    }
    const isMatch = await bcrypt.compare(password_hash, loginEmail.password_hash)
    if(!isMatch){
        return 'Password is not Valid'
    }
    return loginEmail
}
