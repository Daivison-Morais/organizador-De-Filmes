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
import express from "express";
import connection from "./database/database.js";
import cors from "cors";
var server = express();
server.use(cors());
server.use(express.json());
server.post("/postFilm", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, genre, platform, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, genre = _a.genre, platform = _a.platform;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, connection.query("INSERT INTO films (name, genre, platform) \n    VALUES ($1, $2, $3);", [name, genre, platform])];
            case 2:
                _b.sent();
                res.status(200).send("filme inserido!");
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.log(error_1);
                res.sendStatus(500);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server["delete"]("/deleteFilm/:filmId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filmId, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                filmId = req.params.filmId;
                return [4 /*yield*/, connection.query("DELETE FROM films WHERE id=$1;", [filmId])];
            case 1:
                _a.sent();
                res.status(200).send("filme deletado!");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                res.sendStatus(500);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
server.post("/watcheFilmUser", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, filmId, userId, status, nota, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, filmId = _a.filmId, userId = _a.userId, status = _a.status, nota = _a.nota;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, connection.query("INSERT INTO filmUser (filmId, userId VALUES ($1, $2));", [filmId, userId])];
            case 2:
                _b.sent();
                return [4 /*yield*/, connection.query("INSERT INTO users (status, nota) VALUES ($1, $2) ;", [status, nota])];
            case 3:
                _b.sent();
                res.status(200).send("inserted film");
                return [3 /*break*/, 5];
            case 4:
                error_3 = _b.sent();
                console.log(error_3);
                res.sendStatus(500);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
server.put("/watchedFilm/:filmId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filmId, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filmId = req.params.filmId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, connection.query("UPDATE users SET status = true WHERE id=$1;", [filmId])];
            case 2:
                _a.sent();
                res.status(200).send("inserted film");
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                res.sendStatus(500);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.put("/noteFilm/:filmId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filmId, note, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filmId = req.params.filmId;
                note = req.body.note;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, connection.query("UPDATE films SET note = $1 WHERE id=$2;", [note, filmId])];
            case 2:
                _a.sent();
                res.status(200).send("ok");
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                res.sendStatus(500);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.get("/amountByPlatform/:platform", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var platform, result, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                platform = req.params.platform;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, connection.query("SELECT films.platform, COUNT(id) FROM films WHERE platform = $1 group by platform;", [platform])];
            case 2:
                result = _a.sent();
                res.send(result.rows[0]);
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.log(error_6);
                res.sendStatus(500);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.get("/amountByGender/:genre", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var genre, result, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                genre = req.params.genre;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, connection.query("SELECT films.genre, COUNT(id) FROM films WHERE genre = $1 group by genre;", [genre])];
            case 2:
                result = _a.sent();
                res.send(result.rows[0]);
                return [3 /*break*/, 4];
            case 3:
                error_7 = _a.sent();
                console.log(error_7);
                res.sendStatus(500);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.listen(4000, function () {
    console.log("linsten on 4000");
});
