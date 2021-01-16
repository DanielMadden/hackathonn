import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const ObjectId = mongoose.Types.ObjectId

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    votes: { type: Number, default: 0 },
    creatorId: { type: String, ref: "Account", required: true }
  },
  {
    // toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
)

Post.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

// Post.set('toObject', { virtuals: true });
// Post.set('toJSON', { virtuals: true })

export default Post