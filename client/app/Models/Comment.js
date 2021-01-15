export class Comment {
  constructor(data) {
    this.author = data.author.name
    this.body = data.body
    this.votes = data.votes
    this.id = data.id
    this.postId = data.post
  }
  get Template() {
    return /*html*/`
    <div class="card p-3 container-fluid">
                    <span class="author comment-author">${this.author}</span>
                    <span class="comment-body">${this.body}</span>
                    <div class="post-buttons mt-3">
                        <i class="fas fa-chevron-up button-upvote m-1"></i>
                        <i class="fas fa-chevron-down button-downvote m-1"></i>
                        <span class="amount-votes">${this.votes}</span>
                    </div>
                </div>
    
    `
  }
}