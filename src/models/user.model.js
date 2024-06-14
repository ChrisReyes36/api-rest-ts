"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
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
}, {
    versionKey: false,
    timestamps: true,
});
const UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.default = UserModel;
