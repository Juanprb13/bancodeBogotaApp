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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Person_1 = __importDefault(require("../models/Person"));
const router = express_1.Router();
router.get('/person/:query', (req, res) => {
    try {
        const { query } = req.params;
        const validate = query == undefined ? {} : { typePerson: query };
        console.log(validate, query, req.body);
        Person_1.default.find(validate, (err, person) => {
            if (err) {
                return res.send({
                    message: "Ha ocurrido un error en la consulta"
                });
            }
            return res.send(person);
        });
    }
    catch (error) {
        return res.send({
            error
        });
    }
});
router.post('/person', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let flag = false;
    var { fullname, birth, adopt, typePerson } = req.body;
    const validate = Person_1.default.findOne({ birth }, (err, person) => {
        if (err) {
            return res.send({
                message: "Ha ocurrido un error en la consulta"
            });
        }
        if (person) {
            flag = true;
        }
    });
    if (flag == false) {
        const person = new Person_1.default({ fullname, birth, adopt, typePerson });
        yield person.save((err, person) => {
            if (err) {
                return res.send({
                    message: "Ha ocurrido un error en la consulta"
                });
            }
            return res.send(person);
        });
    }
    else {
        return res.send({
            message: "no pueden haber cumpleaños repetido "
        });
    }
}));
router.put('/person/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var { fullname, birth, adopt, typePerson, adopter } = req.body;
    const { id } = req.params;
    const person = yield Person_1.default.findByIdAndUpdate(id, { fullname, birth, adopt, typePerson, adopter }, { new: true }, (err, person) => {
        if (err) {
            return res.send({
                message: "Ha ocurrido un error en la consulta"
            });
        }
        return res.send(person);
    });
}));
router.delete('/person/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const person = yield Person_1.default.findByIdAndDelete(id, (err, person) => {
        if (err) {
            return res.send({
                message: "Ha ocurrido un error en la consulta"
            });
        }
        return res.send(person);
    });
}));
router.get('/person-query/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const person = yield Person_1.default.findById(id, (err, person) => {
        if (err) {
            return res.send({
                message: "Ha ocurrido un error en la consulta"
            });
        }
        return res.send(person);
    });
}));
exports.default = router;
