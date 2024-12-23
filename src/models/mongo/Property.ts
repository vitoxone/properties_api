import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  name: string;
  description: string;
  address: string;
  imageUrl: string;
  created: Date;
  value: number;
  type: "venta" | "arriendo";
}

const PropertySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  imageUrl: { type: String, required: true },
  created: { type: Date, default: Date.now },
  value: { type: Number, required: true },
  type: { type: String, enum: ["venta", "arriendo"], required: true },
});

export default mongoose.model<IProperty>("Property", PropertySchema);