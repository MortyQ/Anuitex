"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_handler_1 = require("./auth.handler");
exports.authRouter = express_1.Router();
exports.authRouter.post('/compliteRegister', auth_handler_1.registerEmail);
exports.authRouter.post('/register', auth_handler_1.register);
//# sourceMappingURL=index.js.map