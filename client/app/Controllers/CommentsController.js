import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"

function _drawComments() {
  let comments = ProxyState.comments
  let template = ''
  comments.forEach(comment => {
    template += comment.Template
  })
  document.getElementById("comments").innerHTML = template
}

export default class CommentsController {
  constructor() {
    ProxyState.on("comments", _drawComments)
    this.getComments()
    _drawComments()
  }
  getComments() {
    try {
      commentsService.getComments()
    } catch (error) {
      console.error(error)
    }
  }
  addComment(id) {
    window.event.preventDefault()
    let form = window.event.target
    let newComment = {
      body: form['body'].value,
      postId: id
    }
    try {
      commentsService.addComment(newComment)
    } catch (error) {
      console.error(error)
    }
  }
  deleteComment(id) {
    try {
      commentsService.deleteComment(id)
    } catch (error) {
      console.errir(error)
    }
  }
  voteComment(id) {
    try {
      commentsService.voteComment(id)
    } catch (error) {
      console.error(error)
    }
  }
}
