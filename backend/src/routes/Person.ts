import { Router } from "express";
import Person from "../models/Person";
import moment from "moment";
const router = Router()

router.get('/person/:query',(req,res)=>{
    try {
        const {query}= req.params
        const validate =  query == undefined ?{} :{typePerson:query}
        console.log(validate,query,req.body);
        
        Person.find(validate,(err,person)=>{
            if (err) {
                return res.send({
                    message:"Ha ocurrido un error en la consulta"
                })
            }
            return res.send(person)
        })
    } catch (error) {
        return res.send({
            error
        })
    }
})
router.post('/person',async (req,res)=>{
    let flag : boolean = false
    var { fullname,birth,adopt,typePerson } = req.body
    
    const validate = Person.findOne({birth},(err,person)=>{
        if (err) {
            return res.send({
                message:"Ha ocurrido un error en la consulta"
            })
        }
        if (person) {
            flag = true
        }
    })
    if (flag == false ) {
        const person = new Person({fullname,birth,adopt,typePerson})
        await person.save((err,person)=>{
            if (err) {
                return res.send({
                    message:"Ha ocurrido un error en la consulta"
                })
            }
            return res.send(person)
        })
    }else{
        return res.send({
            message:"no pueden haber cumpleaños repetido "
        })
    }
})
router.put('/person/:id',async (req,res)=>{
    var { fullname,birth,adopt,typePerson,adopter} = req.body
    const {id} = req.params
    const person = await Person.findByIdAndUpdate(id,{fullname,birth,adopt,typePerson,adopter},{new:true},(err,person)=>{
        if (err) {
            return res.send({
                message:"Ha ocurrido un error en la consulta"
            })
        }
        return res.send(person)
    })
})
router.delete('/person/:id',async (req,res)=>{
    const {id} = req.params
    const person = await Person.findByIdAndDelete(id,(err,person)=>{
        if (err) {
            return res.send({
                message:"Ha ocurrido un error en la consulta"
            })
        }
        return res.send(person)
    })
})
router.get('/person-query/:id',async (req,res)=>{
    const {id} = req.params
    const person = await Person.findById(id,(err,person)=>{
        if (err) {
            return res.send({
                message:"Ha ocurrido un error en la consulta"
            })
        }
        
        return res.send(person)
    })
})
export default router