'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  //job descp
  jobtitle: {
    type: String,
    default: '',
    trim: true
  },

  locat: {
    type: String,
    default: '',
    trim: true
  },
  salary: {
    type: String,
    default: '',
    trim: true
  },
  contract: {
    type: String,
    default: '',
    trim: true
  },
  companybackground: {
    type: String,
    default: '',
    trim: true
  },
  role: {
    type: String,
    default: '',
    trim: true
  },


//candidate 
  fname: {
    type: String,
    default: '',
    trim: true
  },
  lname: {
    type: String,
    default: '',
    trim: true
  },
  gender: {
    type: String,
    default: '',
    trim: true
  },
  age: {
    type: Number,
    default: '',
    trim: true
  },
  postalcode: {
    type: Number,
    default: '',
    trim: true
  },
  address: {
    type: String,
    default: '',
    trim: true
  },
  tnumber: {
    type: String,
    default: '',
    trim: true
  },
  mnumber: {
    type: Number,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },


  //candidate education
  finalyear: {
    type: Boolean,
    default: '',
    trim: true
  },
  undergraduate: {
    type: Boolean,
    default: '',
    trim: true
  },
  tepassyear: {
    type: Number,
    default: '',
    trim: true
  },
  tegrade: {
    type: String,
    default: '',
    trim: true
  },
  twpassyear: {
    type: Number,
    default: '',
    trim: true
  },
  twgrade: {
    type: String,
    default: '',
    trim: true
  },
  anygap: {
    type: String,
    default: '',
    trim: true
  },


  //referal



  reffname: {
    type: String,
    default: '',
    trim: true
  },
  reflname: {
    type: String,
    default: '',
    trim: true
  },
  refcompany: {
    type: String,
    default: '',
    trim: true
  },
  refdesignation: {
    type: String,
    default: '',
    trim: true
  },
  refaddress: {
    type: String,
    default: '',
    trim: true
  },
  reftnumber: {
    type: Number,
    default: '',
    trim: true
  },
  refrelation: {
    type: String,
    default: '',
    trim: true
  },
  refemail:{
    type: String,
    default: '',
    trime: true
  },

  //interview record
  position: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  stime: {
    type: String,
    default: '',
    trim: true
  },
  ftime: {
    type: String,
    default: '',
    trim: true
  },

  //panel member
  pfname: {
    type: String,
    default: '',
    trim: true
  },
  plname: {
    type: String,
    default: '',
    trim: true
  },
  pdepartment: {
    type: String,
    default: '',
    trim: true
  },
  pdesignation: {
    type: String,
    default: '',
    trim: true
  },

  //interview  summary
  natureofinterview: {
    type: String,
    default: '',
    trim: true
  },
  satisfyability: {
    type: String,
    default: '',
    trim: true
  },
  ratingscale: {
    type: String,
    default: '',
    trim: true
  },
  select: {
    type: Boolean,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
