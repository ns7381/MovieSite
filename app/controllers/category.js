/**
 * Created by ning on 2015/10/18.
 */
var mongoose = require('mongoose')
var Category = mongoose.model('Category')

// admin new page
exports.new = function(req, res) {
    res.render('category_admin', {
        title: '后台分类录入页',
        category: {}
    })
}

// admin post movie
exports.save = function(req, res) {
    var _category = req.body.category
    var category = new Category(_category)

    category.save(function(err, category) {
        if (err) {
            console.log(err)
        }

        res.redirect('/admin/category/list')
    })
}

// catelist page
exports.list = function(req, res) {
    Category.fetch(function(err, catetories) {
        if (err) {
            console.log(err)
        }

        res.render('categorylist', {
            title: '分类列表页',
            catetories: catetories
        })
    })
}