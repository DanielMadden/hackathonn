import { dbContext } from "../db/DbContext";
import Post from "../models/Post";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async getAll(query = {}) {
    return await dbContext.Post.find(query).populate('author')
  }
  async create(post) {
    return await dbContext.Post.create(post)
  }
  async getById(id) {
    const newPost = await dbContext.Post.findById(id)
    if (!newPost) {
      throw new BadRequest("invalid id")
    }
    return newPost
  }
  async edit(post) {
    let updatedPost = await dbContext.Post.findOneAndUpdate({ _id: post.id, authorId: post.authorId }, post, { new: true }).populate('authorId')
    if (!updatedPost) {
      throw new BadRequest("invalid post")
    }
    return updatedPost
  }

  async delete() {
    const deleted = await dbContext.Post.findOneAndRemove({ _id: id, authorId: authorId })
    if (!deleted) {
      throw new BadRequest('You are not the creator, or this is not a valid post :(')
    }
  }
}

export const postsService = new PostsService
