import { dbContext } from "../db/DbContext";

class AuthorsService {
  create(body) {
    return await dbContext.Posts.create(body)
  }
  delete(id, id) {
    const author = await dbContext.Posts.findOneAndRemove({ _id: id, author })
  }
  edit(body) {
    throw new Error("Method not implemented.");
  }
  getById(id) {
    throw new Error("Method not implemented.");
  }
  getAll(query) {
    throw new Error("Method not implemented.");
  }

}
export const authorsService = new AuthorsService()