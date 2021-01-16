import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    votes: { type: Number, required: true },
    creatorId: { type: ObjectId, ref: "Account", required: true }
  },
  { toJSON: { virtuals: true } }
)

Post.virtual('user', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Post