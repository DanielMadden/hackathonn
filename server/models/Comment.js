import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const Comment = new Schema(
  {
    body: { type: String, required: true },
    votes: { type: Number, default: 0 },
    postId: { type: ObjectId, ref: "Post", required: true },
    creatorId: { type: String, ref: "Account", required: true }
  },
  { toJSON: { virtuals: true } }
)

Comment.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

// Comment.virtual('sumfinDiffent', {
//   localField: 'creatorName',
//   ref: 'Account',
//   foreignField: 'name',
//   justOne: true
// })

export default Comment