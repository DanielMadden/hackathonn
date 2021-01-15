import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService{
  async getAll(query = {}) {
    return await dbContext.Post.find(query)
  }
  async create(body) {
    return await dbContext.Post.create(body)
  }
  async getById(id) {
    const newPost = await dbContext.Post.findById(id)
    if(!newPost){
      throw new BadRequest
    }
    return newPost
  }
  async edit(post) {
    const updatedPost = await dbContext.Post.findOneAndUpdate({_id: post.id, authorId: post.authorId}, post, {new: true}).populate('authorId')
  }
  async delete(postId, userId) {
    
  }

}
export const postsService = new PostsService()