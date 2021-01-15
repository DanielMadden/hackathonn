import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from "../services/PostsService"

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
    .get('',this.getAll)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.create)
    .get('/:id', this.getById)
    .put(':/id', this.edit)
    .delete('/:id', this.delete)
  }
    //where do the arguments for these parameters come from, aka where is this function/method called from?
  async getAll(req, res, next) {
    try {
      //why do we await in the controller AND in the service
      //what does the .send method do? what data is in the res variable/parameter?
      //what is next, a function?
      return res.send(await postsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await postsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      return res.send(await postsService.getById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await postsService.edit(req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      return res.send(await postsService.delete(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }




}