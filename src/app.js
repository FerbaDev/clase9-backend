import mongoose from "mongoose";
import UserModel from "./models/user.js";
import "dotenv/config";


const main = async () => {
    await mongoose
    .connect(
      `mongodb+srv://Ferbadev:${process.env.PASSWORD}@cluster0.qaz6nck.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("Conectado a Mongo DB"))
    .catch((error) => console.log("Conexión a Mongo DB falló", error)); 

    const respuesta = await UserModel.find({nombre: "Fernando"}).explain("executioStats");
    //recordemos que find devuelve un array de objetos por lo tento podemos aplicar el metodo explain para ver las estaditicas de la consulta, exlpain puede llevar elparametro executionStats para obtener detalles d elos tiempos de demora de la consulta.
    console.log(respuesta);
}

main();