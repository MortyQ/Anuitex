"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../features/shared/db-models/user");
var roles_1 = require("../features/shared/enums/roles");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.AdminUserFirst = function () {
        var UserFirst = new user_1.User({
            email: 'yas@gmail.com',
            avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            first_name: 'Sergey',
            last_name: 'Yasenev',
            password_hash: 'TrueFalse',
            roles: roles_1.Roles[0],
        });
        var result = user_1.User.create(UserFirst);
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=initial.js.map