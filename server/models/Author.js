import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Author = new Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Author