define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	return Backbone.Marionette.AppRouter.extend( {

		'appRoutes' : {

			// sub application bootstraps
			// 'tasks*actions' : 'bootstrapTaskApp',

			// default application
			'*actions'      : 'showDefault'

		}

	} );

} );
