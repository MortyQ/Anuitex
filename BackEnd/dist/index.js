"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var mongoose_1 = __importDefault(require("mongoose"));
var initial_1 = require("./dataAccess/initial");
var init = initial_1.Test.prototype;
init.AdminUserFirst();
mongoose_1.default.connect("mongodb://localhost/bookshopdb", { useCreateIndex: true, useNewUrlParser: true });
function main() {
    app_1.default.listen(app_1.default.get('port'));
    console.log('Server on port', app_1.default.get('port'));
}
main();
//# sourceMappingURL=index.js.map