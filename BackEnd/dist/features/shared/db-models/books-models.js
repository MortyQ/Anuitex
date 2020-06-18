"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var printing_1 = require("../enums/printing");
var currency_1 = require("../enums/currency");
exports.bookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    cover_image: { type: String },
    removed_at: { type: Boolean, default: false },
    type: { type: printing_1.Print, default: printing_1.Print[0] },
    price: { type: Number, required: true },
    currency: { type: currency_1.Currency, default: currency_1.Currency[0] },
    author_ids: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Authors', required: true }],
});
exports.BookModel = mongoose_1.default.model('Book', exports.bookSchema);
//# sourceMappingURL=books-models.js.map