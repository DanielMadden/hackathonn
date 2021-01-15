export class Comment {
  constructor(data) {
    this.author = data.author.name
    this.body = data.body
    this.rating = data.rating
    this.id = data.id
  }
  get Template() {
    return `
    <div class="card p-3 container-fluid">

                    <span>${this.author}</span>
                    <span>${this.body}</span>
                    <div class="post-buttons mt-3">
                        <i class="fas fa-chevron-up button-upvote m-1"></i>
                        <i class="fas fa-chevron-down button-downvote m-1"></i>
                        <span class="amount-votes">${this.rating}</span>
                        <div class="comment-holder mr-3">
                            <span class="amount-comments"></span>
                            <i class="fas fa-comment button-comment m-1"></i>
                        </div>
                    </div>

                </div>
    
    `
  }
}