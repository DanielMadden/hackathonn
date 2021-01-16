import { dbContext } from "../db/DbContext";
import Post from "../models/Post";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async getAll(query = {}) {
    let res = await dbContext.Post.find(query).populate('creatorId')
    return res.map(obj => {
      return {
        id: obj.id,
        title: obj.title,
        body: obj.body,
        votes: obj.votes,
        name: obj.creatorId.name
      }
    })
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

  async delete(id) {
    return {
      Deleted: await dbContext.Post.findOneAndRemove({ _id: id })
    }
  }
}

export const postsService = new PostsService
