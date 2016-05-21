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

  list: {
    type: String,
    default: '',

  },
  
  firstName: {
    type: String,
    default: '',
    trim: true,
  },

  lastName: {
    type: String,
    default: '',
    trim: true,
  },
  reffered: {
    type: Boolean,
    default: '',
    trim: true,
  },

  male: {
    type: Boolean,
    default: '',
    trim: true,
  },

  female: {
    type: Boolean,
    default: '',
    trim: true,
  },

  age: {
    type: String,
    default: '',
    trim: true,
  },

  address: {
    type: String,
    default: '',
    trim: true,
  },

  city: {
    type: String,
    default: '',
    trim: true,
  },

  country: {
    type: String,
    default: '',
    trim: true,
  },

  postalCode: {
    type: String,
    default: '',
    trim: true,
  },

  phone: {
    type: String,
    default: '',
    trim: true,
  },

  email: {
    type: String,
    default: '',
    trim: true,
  },

  mon: {
    type: Boolean,
    default: '',
    trim: true,
  },
  tue: {
    type: Boolean,
    default: '',
    trim: true,
  },
  wed: {
    type: Boolean,
    default: '',
    trim: true,
  },
  thu: {
    type: Boolean,
    default: '',
    trim: true,
  },
  fri: {
    type: Boolean,
    default: '',
    trim: true,
  },
  sat: {
    type: Boolean,
    default: '',
    trim: true,
  },
  sund: {
    type: Boolean,
    default: '',
    trim: true,
  },


  feeHourly: {
    type: String,
    default: '',
    trim: true,
  },

  feeMonthly: {
    type: String,
    default: '',
    trim: true,
  },

  art: {
    type: Boolean,
    default: '',
    trim: true,
  },

  math: {
    type: Boolean,
    default: '',
    trim: true,
  },

  science: {
    type: Boolean,
    default: '',
    trim: true,
  },

  social: {
    type: Boolean,
    default: '',
    trim: true,
  },

  english: {
    type: Boolean,
    default: '',
    trim: true,
  },

  economic: {
    type: Boolean,
    default: '',
    trim: true,
  },

  account: {
    type: Boolean,
    default: '',
    trim: true,
  },

  computer: {
    type: Boolean,
    default: '',
    trim: true,
  },


  experience: {
    type: String,
    default: '',
    trim: true,
  },

  aboutYou: {
    type: String,
    default: '',
    trim: true,
  },

  areaofStudy: {
    type: String,
    default: '',
    trim: true,
  },

  major: {
    type: String,
    default: '',
    trim: true,
  },

  institute: {
    type: String,
    default: '',
    trim: true,
  },

  created: {
    type: Date,
    default: Date.now
  },
  

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
