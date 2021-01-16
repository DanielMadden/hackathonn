import { ProxyState } from "../AppState.js"

export class Post {
  constructor(data) {
    this.name = data.name
    this.title = data.title
    this.body = data.body
    this.id = data.id
    this.votes = data.votes
  }

  get Template() {
    return /*html*/`
    <div class="card p-3 container-fluid">
                    <span class="author post-author">${this.name}</span>
                    <h3 class="title">${this.title}</h3>
                    <span class="post-body">${this.body}</span>
                    <div class="post-buttons mt-3">
                        <i class="fas fa-chevron-up button-upvote m-1"></i>
                        <i class="fas fa-chevron-down button-downvote m-1"></i>
                        <span class="amount-votes">${this.votes}</span>
                        <div class="comment-holder mr-3">
                            <span class="amount-comments">${this.countComments()}</span>
                            <i class="fas fa-comment button-comment m-1" onclick="app.setCommentController.setPostId('${this.id}')" ></i>
                        </div>
                    </div>
                </div>
    `
  }

  countComments() {
    return ProxyState.comments.filter(comment => comment.postId = this.id).length
  }
}