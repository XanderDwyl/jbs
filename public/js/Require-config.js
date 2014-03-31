require.config( {

	'baseUrl' : 'js',

	'paths' : {

        'config'                   : 'config/index',

		// Libraries and utility scripts
		'jquery'                   : 'libs/jquery/jquery',
		'bootstrap'                : 'libs/bootstrap/dist/js/bootstrap',
		'underscore'               : 'libs/lodash/dist/lodash',
		'backbone'                 : 'libs/backbone-amd/backbone',
		'marionette'               : 'libs/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.babysitter'      : 'libs/backbone.babysitter/lib/amd/backbone.babysitter',
		'backbone.wreqr'           : 'libs/backbone.wreqr/lib/amd/backbone.wreqr',
		'text'                     : 'libs/requirejs-text/text',
		'async'                    : 'libs/async/lib/async',
		'jquery-cookie'            : 'libs/jquery.cookie/jquery.cookie',
		'modernizr'                : 'libs/modernizr/modernizr',
		'base64'                   : 'libs/base64', // *! utility to encode/decode
		'shim'                     : 'libs/shim', // *! utility for object prototypes


		// root folders
		'models'                   : 'models',
		'collections'              : 'collections',
		'views'                    : 'views',
        'templates'                : '../templates',

		// Base application level classes
		'App'                      : 'App',
		'Communicator'             : 'Communicator',
		'Router'                   : 'routers/AppRouter',
		'Controller'               : 'controllers/AppController'

	},

	'shim' : {
		'jquery-cookie' : {
			'deps' : [ 'jquery' ]
		},
		'bootstrap' : {
			'deps' : [ 'jquery']
		},
		'deps' : [ 'jquery', 'underscore', 'bootstrap']
	}
} );