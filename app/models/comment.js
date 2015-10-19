/**
 * Created by ning on 2015/10/18.
 */
var mongoose = require('mongoose')
var CommentSchema = require('../schemas/comment')
var Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment