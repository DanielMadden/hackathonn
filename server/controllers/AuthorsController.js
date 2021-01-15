import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { authorsService } from "../services/AuthorsService"
import { postsService } from '../services/PostsService'

export class AuthorsController extends BaseController {
  constructor() {
    super('api/authors')
    this.router
      .get("", this.getAll)
      .get('/:authorId', this.getById)
      // .get("/:authorId/Posts", this.getPosts)
      // .get("/:authorId/Comments", this.getComments)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await authorsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await authorsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }


  // async getPosts() {
  //   try {
  //     let data = await postsService.getPostsByAuthor({ author: req.params.id })
  //     res.send(data)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}