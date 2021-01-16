import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    votes: { type: Number, required: true },
    author: { type: ObjectId, ref: "Author", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Post