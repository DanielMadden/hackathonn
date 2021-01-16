import { dbContext } from "../db/DbContext";

class CommentsService {
  async getAll(query = {}) {
    let res = await dbContext.Comments.find(query)
      .populate("creatorId")
      .populate("postId")
    return res.map(obj => {
      return {
        id: obj.id,
        body: obj.body,
        postId: obj.postId.id,
        votes: obj.votes,
        name: obj.creatorId.name
      }
    })
  }
  async create(body) {
    return await dbContext.Comments.create(body)
  }
  async delete(commentId, id) {
    const comment = await dbContext.Comments.findOneAndRemove({ _id: id, commentId })
  }
  async edit(body) {
    let updated = await dbContext.Comments.findOneAndUpdate({ _id: updated.id }, update, { new: true })
  }

}
export const commentsService = new CommentsService()