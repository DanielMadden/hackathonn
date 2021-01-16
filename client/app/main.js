import { AuthController } from "./Controllers/AuthController.js";
import CommentsController from "./Controllers/CommentsController.js";
import PostsController from "./Controllers/PostsController.js";
import PwittyController from "./Controllers/PwittyController.js";
import SetCommentController from "./Controllers/SetCommentController.js";
class App {
  authController = new AuthController();
  commentsController = new CommentsController();
  postsController = new PostsController();
  setCommentController = new SetCommentController();
  pwittyController = new PwittyController();
}
window["app"] = new App();