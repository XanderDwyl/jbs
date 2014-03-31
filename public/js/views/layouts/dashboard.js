define( function ( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );
	var $          = require( 'jquery' );

	var template   = require( 'text!templates/layouts/dashboard.html' );

	return Marionette.Layout.extend( {

		'initialize' : function ( options ) {

		},

		'template'  : _.template( template ),

		'tagName'   : 'div',
		'className' : 'dashboard-layout',

		'regions'   : {},

		'ui': {},

		'events': {}

	} );

} );
