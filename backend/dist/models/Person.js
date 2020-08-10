"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Person = new mongoose_1.Schema({
    fullname: {
        type: String,
        required: true
    },
    birth: {
        type: String
    },
    adopt: {
        type: Boolean,
        default: false
    },
    adopter: {
        type: String,
        default: false
    },
    typePerson: {
        type: String
    }
});
exports.default = mongoose_1.model('Person', Person);
