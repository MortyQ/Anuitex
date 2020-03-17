"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var roles_1 = require("../enums/roles");
;
exports.UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password_hash: { type: String, required: true },
    roles: { type: roles_1.Roles, required: true, default: roles_1.Roles.user },
});
exports.UserModel = mongoose_1.default.model('User', exports.UserSchema);
//# sourceMappingURL=user-models.js.map