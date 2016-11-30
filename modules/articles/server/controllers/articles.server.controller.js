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

  article.jobtitle = req.body.jobtitle;
  article.locat = req.body.locat;
  article.salary = req.body.salary;
  article.contract = req.body.contract;
  article.companybackground = req.body.companybackground;
  article.role = req.body.role;
  article.fname = req.body.fname;
  article.lname = req.body.lname;
  article.age = req.body.age;
  article.gender = req.body.gender;
  article.postalcode = req.body.postalcode;
  article.address = req.body.address;
  article.tnumber = req.body.tnumber;
  article.email = req.body.email;
  article.mnumber = req.body.mnumber;
  article.finalyear = req.body.finalyear;
  article.undergraduate = req.body.undergraduate;
  article.tepassyear = req.body.tepassyear;
  article.tegrade = req.body.tegrade;
  article.twpassyear = req.body.twpassyear;
  article.twgrade = req.body.twgrade;
  article.anygap = req.body.anygap;
  article.reffname = req.body.reffname;
  article.reflname = req.body.reflname;
  article.refcompany = req.body.refcompany;
  article.refdesignation = req.body.refdesignation;
  article.refaddress = req.body.refaddress;
  article.reftnumber = req.body.reftnumber;
  article.refemail = req.body.refemail;
  article.refrelation = req.body.refrelation;
  article.position = req.body.position;
  article.created = req.body.created;
  article.stime = req.body.stime;
  article.ftime = req.body.ftime;
  article.pfname = req.body.pfname;
  article.plname = req.body.plname;
  article.pdepartment = req.body.pdepartment;
  article.pdesignation = req.body.pdesignation;
  article.natureofinterview = req.body.natureofinterview;
  article.satisfyability = req.body.satisfyability;
  article.ratingscale = req.body.ratingscale;
  article.select = req.body.select;

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
