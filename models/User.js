// Creating a model for the User collection
import mongoose from "mongoose";
import albumSchema from "./Album.js"; // Import the album schema form Album.js instead of having inline here!

{
  /**
    const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
});
     */
}

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true }, // Required field
  lastName: { type: String, required: true }, // Required field
  bands: [String],
  instruments: [String],
  albums: [albumSchema.schema], //Reference the album schema as a subdocument
  birthday: { type: Date, required: true }, // Required field
  createOn: { type: Date, default: Date.now }, // Default value
});

export default mongoose.model("User", userSchema);
