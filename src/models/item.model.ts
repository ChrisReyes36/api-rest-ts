import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    gas: {
      type: String,
      enum: ["diesel", "gasoline", "electric"],
      required: true,
    },
    year: { type: Number, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel: Model<Car> = model("Item", ItemSchema);

export default ItemModel;
