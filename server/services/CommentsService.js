import { dbContext } from "../db/DbContext";

class CommentsService {
  create(body) {
    return await dbContext.Comments.create(body)
  }
  delete(id, id) {
    const comment = await dbContext.Comments.findOneAndRemove({ _id: id, comment })
  }
  edit(body) {
    let updated = await dbContext.Comments.findOneAndUpdate({ _id: updated.id }, update, { new: true })
  }
  getById(id) {
    let comment = await dbContext.Comments.findById(id)
  }
  getAll(query) {
    return await dbContext.Comments.findById(query)
  }

}
export const commentsService = new CommentsService()