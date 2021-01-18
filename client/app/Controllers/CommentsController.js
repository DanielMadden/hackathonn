import { ProxyState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"

function _drawComments(postId) {
  let template = ''
  console.log(ProxyState.comments)
  ProxyState.comments.filter(comment => comment.postId == postId).forEach(comment => {
    template += comment.Template
  })
  document.getElementById("comments").innerHTML = template
}

export default class CommentsController {
  constructor() {
    // ProxyState.on("comments", _drawComments)
    this.getComments()
  }
  getComments() {
    try {
      commentsService.getComments()
    } catch (error) {
      console.error(error)
    }
  }
  async addComment(postId) {
    window.event.preventDefault()
    let form = window.event.target
    let newComment = {
      body: form['body'].value,
      postId: postId
    }
    try {
      await commentsService.addComment(newComment)
      _drawComments(postId)
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
  filterComments(postId) {
    _drawComments(postId)
  }
}
