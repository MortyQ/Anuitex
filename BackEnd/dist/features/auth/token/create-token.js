"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createToken(user) {
    var userData = {
        _id: user._id,
        roles: user.roles
    };
    var tokenAccess = jsonwebtoken_1.default.sign(userData, process.env.ACCESS_SECRET, { expiresIn: process.env.ACCESS_LIFE });
    var tokenRefresh = jsonwebtoken_1.default.sign(userData, process.env.REFRESH_SECRET, { expiresIn: process.env.REFRESH_LIFE });
    return { tokenAccess: tokenAccess, tokenRefresh: tokenRefresh };
}
exports.createToken = createToken;
//# sourceMappingURL=create-token.js.map