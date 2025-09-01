import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    images: [String],
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const Service = mongoose.model("Service", serviceSchema);
