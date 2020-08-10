import App from "./app";
import  "./db";

App.listen(App.get('port'),()=>{
    console.log("servidor corriendo ",App.get('port'));  
})