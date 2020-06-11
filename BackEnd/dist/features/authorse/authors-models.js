"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
;
exports.AuthorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    removed_at: { type: Boolean, default: false },
    product_ids: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Book', }]
});
exports.AuthorModel = mongoose_1.default.model('Authors', exports.AuthorSchema);
//# sourceMappingURL=authors-models.js.map