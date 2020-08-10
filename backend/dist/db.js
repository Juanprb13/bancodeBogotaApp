"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DB_1 = __importDefault(require("./config/DB"));
mongoose_1.default.connect(DB_1.default.DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log("conexion establecida");
});
connection.on('error', (err) => {
    console.log("error en la DB", err);
    process.exit(0);
});
