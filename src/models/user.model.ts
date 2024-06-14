import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "No hay descripción",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel: Model<User> = model("User", UserSchema);
export default UserModel;