import { Schema, model } from "mongoose";

const tareaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    realizada: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Tareas", tareaSchema);
