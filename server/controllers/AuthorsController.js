import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { authorsService } from "../services/AuthorsService"

export class AuthorsController extends BaseController {
  constructor() {
    super('api/authors')
    this.router
    .get('',this.getAll)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.create)
    .get('/:id', this.getById)
    .put(':/id', this.edit)
    .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await authorsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await authorsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      return res.send(await authorsService.getById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await authorsService.edit(req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      return res.send(await authorsService.delete(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }