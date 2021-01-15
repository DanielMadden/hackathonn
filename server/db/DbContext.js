import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import AuthorSchema from "../models/Author";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Post = mongoose.model('Post', PostSchema);
  Comment = mongoose.model('Comment', CommentSchema);
  Author = mongoose.model('Author', AuthorSchema);
}

export const dbContext = new DbContext()
