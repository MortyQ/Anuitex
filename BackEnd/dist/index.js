"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var index_1 = require("./features/auth/index");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
app_1.default.use(body_parser_1.default.urlencoded({ extended: false }));
app_1.default.use(body_parser_1.default.json());
app_1.default.use(cors_1.default());
// Test();
// BookTest();
// FirstAuthorTest();
// mongoose.connect("mongodb://localhost/bookshopdb", { useCreateIndex: true, useNewUrlParser: true })
app_1.default.use('/auth', index_1.authRouter);
function main() {
    app_1.default.listen(app_1.default.get('port'));
    console.log('Server on port', app_1.default.get('port'));
}
main();
//# sourceMappingURL=index.js.map