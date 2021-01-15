import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"

function _drawComments() {

}

export default class CommentsController {
  constructor() {
    ProxyState.on("comments", _drawComments)
    this.getComments()
    _drawComments()
  }
  getComments() {

  }
  addComments() {

  }
  deleteComment() {

  }
  voteComment() {

  }
}
