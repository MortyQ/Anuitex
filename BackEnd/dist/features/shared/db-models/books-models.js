"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongodb_1 = require("mongodb");
var printing_1 = require("../enums/printing");
exports.BookSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    cover_image: { type: String, required: true },
    removed_at: { type: String, required: true },
    currency: { type: String, required: true },
    type: { type: printing_1.Print, required: true, default: printing_1.Print.book },
    price: { type: Number, required: true },
    author_ids: { type: mongodb_1.ObjectId, required: true }
});
exports.BookModel = mongoose_1.default.model('Book', exports.BookSchema);
//# sourceMappingURL=books-models.js.map