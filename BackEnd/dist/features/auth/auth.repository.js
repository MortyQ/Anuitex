"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_models_1 = __importDefault(require("../shared/db-models/user-models"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var email_helper_1 = require("./email.helper");
function register(user) {
    return __awaiter(this, void 0, void 0, function () {
        var checkUser, salt, _a, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, user_models_1.default.findOne({ email: user.email })];
                case 1:
                    checkUser = _b.sent();
                    if (checkUser) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, bcrypt_1.default.genSaltSync(10)];
                case 2:
                    salt = _b.sent();
                    _a = user;
                    return [4 /*yield*/, bcrypt_1.default.hashSync(user.password_hash, salt)];
                case 3:
                    _a.password_hash = _b.sent();
                    return [4 /*yield*/, user_models_1.default.create(user)];
                case 4:
                    result = _b.sent();
                    if (result === null) {
                        return [2 /*return*/, false];
                    }
                    email_helper_1.sendingEmail(result);
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.register = register;
function confirmEmail(id) {
    return __awaiter(this, void 0, void 0, function () {
        var user, newUser, confirmEm;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = user_models_1.default.findOne({ _id: id });
                    return [4 /*yield*/, (!user)];
                case 1:
                    if (_a.sent()) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, user];
                case 2:
                    newUser = _a.sent();
                    newUser.confirmed_email = true;
                    return [4 /*yield*/, user_models_1.default.update(user, newUser)];
                case 3:
                    confirmEm = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.confirmEmail = confirmEmail;
function confirmLogin(email, password_hash) {
    return __awaiter(this, void 0, void 0, function () {
        var loginEmail, isMatch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_models_1.default.findOne({ email: email })];
                case 1:
                    loginEmail = _a.sent();
                    if (!loginEmail) {
                        return [2 /*return*/, 'User not found'];
                    }
                    return [4 /*yield*/, bcrypt_1.default.compare(password_hash, loginEmail.password_hash)];
                case 2:
                    isMatch = _a.sent();
                    if (!isMatch) {
                        return [2 /*return*/, 'Password is not Valid'];
                    }
                    return [2 /*return*/, loginEmail];
            }
        });
    });
}
exports.confirmLogin = confirmLogin;
//# sourceMappingURL=auth.repository.js.map