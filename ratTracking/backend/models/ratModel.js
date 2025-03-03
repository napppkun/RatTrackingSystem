import mongoose from "mongoose";

const ratSchema = new mongoose.Schema(
    {
        species: { type: String, required: true },
        weight: { type: Number, required: true },
        medicine: { type: String, required: true },
        dose: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Rat", ratSchema);