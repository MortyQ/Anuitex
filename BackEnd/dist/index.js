"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var index_1 = require("./features/auth/index");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var index_2 = require("./features/authorse/index");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
// Test();
// BookTest();
// FirstAuthorTest();
mongoose_1.default.connect("mongodb://localhost/bookshopdb", { useCreateIndex: true, useNewUrlParser: true });
console.log("WE are here");
app.use('/auth', index_1.authRouter);
app.use('/author', index_2.authorRouter);
function main() {
    app.listen(3333);
    console.log('Server on port', 3333);
}
main();
//# sourceMappingURL=index.js.map