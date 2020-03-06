"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
var auth_1 = __importDefault(require("./routes/auth"));
//setting
app.set('port', 3333);
//middlewares
app.use(morgan_1.default('dev'));
// routes
app.use(auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map