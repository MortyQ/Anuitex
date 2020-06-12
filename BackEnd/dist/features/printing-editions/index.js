"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var printing_edition_handler_1 = require("./printing-edition.handler");
exports.bookRouter = express_1.Router();
exports.bookRouter.post('/create', printing_edition_handler_1.createHandler);
//# sourceMappingURL=index.js.map