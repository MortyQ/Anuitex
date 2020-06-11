"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var printing_1 = require("../enums/printing");
exports.bookSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, },
    description: { type: String, required: true },
    cover_image: { type: String, required: true },
    removed_at: { type: Boolean, required: true },
    currency: { type: String, required: true },
    type: { type: printing_1.Print, required: true, default: printing_1.Print.book },
    price: { type: Number, required: true },
});
exports.BookModel = mongoose_1.default.model('Book', exports.bookSchema);
//# sourceMappingURL=books-models.js.map