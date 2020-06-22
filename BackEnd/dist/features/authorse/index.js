"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authors_handler_1 = require("./authors.handler");
exports.authorRouter = express_1.Router();
exports.authorRouter.post('/create', authors_handler_1.createHandler);
exports.authorRouter.post('/getAuthors', authors_handler_1.getAuthorsHandler);
exports.authorRouter.post('/changeAuthor', authors_handler_1.changeAuthorsHandler);
//# sourceMappingURL=index.js.map