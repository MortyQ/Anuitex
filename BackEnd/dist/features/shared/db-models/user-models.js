"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var roles_1 = require("../enums/roles");
var schema = mongoose_1.default.Schema;
;
exports.UserSchema = new schema({
    email: { type: String, required: true, },
    avatar: { type: String, required: false },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password_hash: { type: String, required: true },
    roles: { type: roles_1.Roles, required: true, default: roles_1.Roles.user },
    removed_at: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    confirmed_email: { type: Boolean, default: false }
});
var userModel = mongoose_1.default.model('User', exports.UserSchema);
exports.default = userModel;
//# sourceMappingURL=user-models.js.map