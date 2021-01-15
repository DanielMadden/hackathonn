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
      // .put("/:id", this.edit)
      .post("", this.create)
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

  async create(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      res.send(await authorsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await authorsService.delete(req.params.id, req.userInfo.id))
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