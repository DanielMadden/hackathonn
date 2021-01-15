import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    body: { type: String, required: true },
    votes: { type: Number, required: true },
    authorId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Comment