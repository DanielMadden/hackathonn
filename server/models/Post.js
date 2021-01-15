import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    votes: { type: Number, required: true },
    authorId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Post