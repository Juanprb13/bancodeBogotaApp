"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const Person_1 = __importDefault(require("./routes/Person"));
const App = express_1.default();
const PUERTO = process.env.PORT || 3000;
App.set('port', PUERTO);
//middleware 
App.use(cors_1.default());
App.use(morgan_1.default('dev'));
App.use(express_1.default.urlencoded({ extended: false }));
App.use(express_1.default.json());
//rutas 
App.use('/api', Person_1.default);
App.get('/', (req, res) => {
    return res.send("hola desde la prision");
});
exports.default = App;
