import mongoose from "mongoose";
import UserModel from "./models/user.js";
import "dotenv/config";


// const main = async () => {
//     await mongoose
//     .connect(
//       `mongodb+srv://Ferbadev:${process.env.PASSWORD}@cluster0.qaz6nck.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0`
//     )
//     .then(() => console.log("Conectado a Mongo DB"))
//     .catch((error) => console.log("Conexión a Mongo DB falló", error)); 

//     const respuesta = await UserModel.find({nombre: "Fernando"}).explain("executioStats");
//     //recordemos que find devuelve un array de objetos por lo tento podemos aplicar el metodo explain para ver las estaditicas de la consulta, exlpain puede llevar elparametro executionStats para obtener detalles d elos tiempos de demora de la consulta.
//     console.log(respuesta);
// }

// main();

//ejercicio

import alumnoModel from "./models/alumno.js";
import cursoModel from "./models/curso.js";

const start = async () => {
  await mongoose
  .connect(
    `mongodb+srv://Ferbadev:${process.env.PASSWORD}@cluster0.qaz6nck.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Conectado a Mongo DB"))
  .catch((error) => console.log("Conexión a Mongo DB falló", error)); 

  // const res= await alumnoModel.find();
  // console.log(res);

  //Busco estudiante y busco el curso de backend: 
    //const estudiante = await alumnoModel.findById("65fe47874cd360801b4a47ec");
    //console.log(estudiante);

    //const cursoBackend = await cursoModel.findById("65fe476f4cd360801b4a47ea")
    //console.log(cursoBackend);

    //Ahora ingreso el curso al alumno: 
    //estudiante.cursos.push(cursoBackend);

    //Actualizo el documento: 
    //await alumnoModel.findByIdAndUpdate("65fe47874cd360801b4a47ec", estudiante);

    //testeamos, como se ve el alumno y si se muestra el curso asignado: 

    const estudianteConCursoAsignado = await alumnoModel.findById("65fe47874cd360801b4a47ec")
    .populate("cursos");

    console.log(estudianteConCursoAsignado);
  }
  start();