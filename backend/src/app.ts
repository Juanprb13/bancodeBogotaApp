import express from "express" 
import morgan from 'morgan'
import cors from "cors";
import Person from "./routes/Person";

const App = express()
const PUERTO   = process.env.PORT || 3000

App.set('port',PUERTO)

//middleware 
App.use(cors() )
App.use(morgan('dev'))
App.use(express.urlencoded({extended:false}))
App.use(express.json())

//rutas 
App.use('/api',Person)
App.get('/',(req,res )=>{
    return res.send("hola desde la prision")
})

export default App