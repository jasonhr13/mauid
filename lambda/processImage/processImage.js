'use strict';

var Jimp = require( 'jimp' );
var AWS = require( 'aws-sdk' );
var uuid = require('node-uuid');

var processImage {
  init: function( data, ctx ) {
    this.s3 = new AWS.S3();
    this.user_id = data.user_id;
    this.image = data.image;
    this.filter = data.filter;
    this.name = uuid.v4();

    this._getFilter();
  },

  _getFilter: function() {
    Jimp.read( this.filter, this._getImage.bind( this ) );
  },

  _getImage: function( err, filter ) {
    Jimp.read( this.image, function( err, image ) {
      image.composite( filter, 0, 0 );
      image.write( '/tmp/' + this.name + '.png', this._saveImage.bind( this ) );
    }.bind( this ) );
  },

  _saveImage: function( err, image ) {
    // upload image to S3, then update parse with the reference to the image
  },

  _updateParse: function() {
    // update Images table in parse with the new image. Set url, user_id, feed_viewable
  }
}

exports.processImage = processImage.init;
