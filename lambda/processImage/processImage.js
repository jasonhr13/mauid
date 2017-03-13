'use strict';

var Jimp = require( 'jimp' );
var AWS = require( 'aws-sdk' );
var uuid = require('node-uuid');
var Parse = require( 'parse' );

var processImage {
  init: function( data, ctx ) {
    Parse.initialize("pHIBmc11WOlUD2WEVxZM956IoWhKKQcGyhPuOLB8");
    Parse.serverURL( 'https://parseapi.back4app.com/' );
    this.s3 = new AWS.S3();
    this.user_id = data.user_id;
    this.image = data.image;
    this.filter = data.filter;
    this.name = uuid.v4() + '.png';
    this.base_url = 'https://d32mj3p2u3cut5.cloudfront.net/';

    this._getFilter();
  },

  _getFilter: function() {
    Jimp.read( this.filter, this._getImage.bind( this ) );
  },

  _getImage: function( err, filter ) {
    Jimp.read( this.image, function( err, image ) {
      image.composite( filter, 0, 0 );
      image.write( '/tmp/' + this.name, this._saveImage.bind( this ) );
    }.bind( this ) );
  },

  _saveImage: function( err, image ) {
    // upload image to S3, then update parse with the reference to the image
  },

  _updateParse: function() {
    // update Images table in parse with the new image. Set url, user_id, feed_viewable
    var Image = Parse.Object.extend( 'Images' );
    var image = new Image();

    image.set( 'user_id', this.user_id );
    image.set( 'image_url', this.base_url + this.name );
    image.save( null, {
      success: function( image ) {
        // ctx.succeed
      },
      error: function( image, err ) {
        // ctx.succeed with error.
      }
    })
  }
}

exports.processImage = processImage.init;
