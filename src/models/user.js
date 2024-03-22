import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        index: true
    },
    apellido: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    edad: {
        type: Number
    }
})

const userModel = mongoose.model("usuarios", userSchema);

export default userModel;