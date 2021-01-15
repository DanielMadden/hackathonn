export default class SetCommentController {

  setPostId(postId) {
    document.getElementById("comment-form").onsubmit = function () {
      window.app.commentsController.addComment(postId)
    }
  }
}