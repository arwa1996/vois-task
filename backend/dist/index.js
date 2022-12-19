"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/polygons', (_req, res) => {
    var jsonPath = path_1.default.join(__dirname, '..', 'src', 'data', 'polygons.json');
    var jsonString = fs_1.default.readFileSync(jsonPath, 'utf8');
    res.send(JSON.parse(jsonString));
});
app.listen(3001, () => {
    console.log('listening on', 3001);
});
