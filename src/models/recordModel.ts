import mongoose, { Document, Schema } from "mongoose";

export interface IRecord extends Document {
  name: string;
  amount: number;
  type: "entrada" | "saída";
  category: string;
  date: Date;
}

const recordSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["entrada", "saída"],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Record = mongoose.model<IRecord>("Record", recordSchema);

export default Record;
