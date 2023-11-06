import express, { json } from 'express';
import Tipos from './emprestimos.js';
const porta = 3000;
const app = express();
const test = new Tipos();
app.use(json());
var lista = new Array;

app.get('/',(req,res)=>{
    res.send('Voce realizou um get!')
});
app.post('/',(req,res)=>{
    const body = req.body;

    if(test.testaSePessoal(body)!=false){
    lista.push(test.testaSePessoal(body));
    };

    if(test.testaSeConsiginado(body)!=false){
        lista.push(test.testaSeConsiginado(body));
    };

    if(test.testaSeGarantido(body)!=false){
        lista.push(test.testaSeGarantido(body));
    };

    const enviar = {
        "customer": body.name,
        "loans": lista
    };

    res.status(200).json(enviar)
   
})
const server = app.listen(porta,()=>{
    console.log('estou ovindo na porta '+porta)
})