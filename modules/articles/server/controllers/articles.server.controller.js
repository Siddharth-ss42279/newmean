'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a article
 */
exports.create = function (req, res) {
  var article = new Article(req.body);
  article.user = req.user;

  article.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};

/**
 * Show the current article
 */
exports.read = function (req, res) {
  res.json(req.article);
};

/**
 * Update a article
 */
exports.update = function (req, res) {
  var article = req.article;

  article.list = req.body.list;
  article.firstName = req.body.firstName;
  article.lastName = req.body.lastName;
  article.reffered = req.body.reffered;
  article.male = req.body.male;
  article.female = req.body.female;
  article.age = req.body.age;
  article.address = req.body.address;
  article.city = req.body.city;
  article.country = req.body.country;
  article.postalCode = req.body.postalCode;
  article.phone = req.body.phone;
  article.email = req.body.email;
  article.mon = req.body.mon;
  article.tue = req.body.tue;
  article.wed = req.body.wed;
  article.thu = req.body.thu;
  article.fri = req.body.fri;
  article.sat = req.body.sat;
  article.sund = req.body.sund;
  article.feeHourly = req.body.feeHourly;
  article.feeMonthly = req.body.feeMonthly;
  article.art = req.body.art;
  article.art = req.body.art;
  article.math = req.body.math;
  article.science = req.body.science;
  article.social = req.body.social;
  article.english = req.body.english;
  article.economic = req.body.economic;
  article.account = req.body.account;
  article.computer = req.body.computer;
  article.experience = req.body.experience;
  article.aboutYou = req.body.aboutYou;
  article.areaofStudy = req.body.areaofStudy;
  article.major = req.body.major;
  article.institute = req.body.institute;



  article.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var article = req.article;

  article.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
  Article.find().sort('-created').populate('user', 'displayName').exec(function (err, articles) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(articles);
    }
  });
};

/**
 * Article middleware
 */
exports.articleByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Article is invalid'
    });
  }

  Article.findById(id).populate('user', 'displayName').exec(function (err, article) {
    if (err) {
      return next(err);
    } else if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    req.article = article;
    next();
  });
};
