import { dbContext } from "../db/DbContext";

class CommentsService {
  async create(body) {
    return await dbContext.Comments.create(body)
  }
  async delete(id, id) {
    const comment = await dbContext.Comments.findOneAndRemove({ _id: id, comment })
  }
  async edit(body) {
    let updated = await dbContext.Comments.findOneAndUpdate({ _id: updated.id }, update, { new: true })
  }
  async getById(id) {
    let comment = await dbContext.Comments.findById(id)
  }
  async getAll(query = {}) {
    return await dbContext.Comments.find(query)
  }

}
export const commentsService = new CommentsService()