const express = require ("express")  
const app = express()
const port =3000


app.use(express.json())

app.get("/productos",(req,res) =>{

    for(let i=0; i<= productos.lenght; i++){
        console.log(productos[i])
    };

     res.json("hola mundo")

})
const productos=[
    {id:1,nombre: "notebook", precio:500000},
    {id:2, nombre:"mouse",precio:10000},
     {id:3, nombre:"teclado",precio:25000},
      {id:4, nombre:"mopnitor",precio:120000}
];




app.listen (port,()=>{ console.log ("is ok")
})



    
    
   