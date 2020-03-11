import { User } from '../features/shared/db-models/user';
import { Roles } from '../features/shared/enums/roles';


export class Test {


        AdminUserFirst (){
        const UserFirst = new User({
            email: 'yas@gmail.com',
            avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            first_name: 'Sergey',
            last_name: 'Yasenev',
            password_hash: 'TrueFalse',
            roles:  Roles[0],
        })
        const result =  User.create(UserFirst)
    }
}