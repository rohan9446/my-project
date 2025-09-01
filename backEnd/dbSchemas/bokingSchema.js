import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending"
    },
    totalAmount: { type: Number, required: true },
    paymentStatus: {
        type: String,
        enum: ["unpaid", "paid", "refunded"],
        default: "unpaid"
    }
}, { timestamps: true });

export const Booking = mongoose.model("Booking", bookingSchema);
