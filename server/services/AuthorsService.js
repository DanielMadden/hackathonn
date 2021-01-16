import { dbContext } from "../db/DbContext";

class AuthorsService {
  getAll(query = {}) {
    return await dbContext.Authors.find(query)
  }

  getById(id) {
    let author = await dbContext.Authors.findById(id)
  }

  create(body) {
    return await dbContext.Posts.create(body)
  }

  delete(id, id) {
    const author = await dbContext.Posts.findOneAndRemove({ _id: id, author })
  }


  // edit(body) {
  //   throw new Error("Method not implemented.");
  // }



}
export const authorsService = new AuthorsService()