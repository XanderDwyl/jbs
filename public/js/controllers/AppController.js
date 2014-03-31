define(function(require) {
    'use strict';

    var $          = require('jquery');
    var _          = require('underscore');
    var Backbone   = require('backbone');
    var Bootstrap  = require('bootstrap');
    var Marionette = require('marionette');
    var async      = require('async');

    var layouts = {
        'Header'    : require('views/layouts/header'),
        'Dashboard' : require('views/layouts/dashboard'),
    };


    /*var applications = {
		'Tasks' : require( 'Tasks' )
	};*/
    /*var views = {
		'ErrorView'      : require( 'views/ErrorView' )
	};*/

    return Backbone.Marionette.Controller.extend({

        initialize: function(options) {

            _.bindAll(this);
            _.extend(this, options);

            return this;

        },

        'getHeaderLayout': function() {

			this.layout = new layouts.Header();
            this.App.header.show(this.layout);

        },

        'getDashboardLayout': function() {

            this.layout = new layouts.Dashboard();
            this.App.content.show(this.layout);

        },

        'showDefault': function() {
			this.getHeaderLayout();
            this.getDashboardLayout();
        },
        // ## sub application bootstraps

        /*'bootstrapTaskApp' : function ( actions ) {
			this.bootstrapApp( 'Task', applications.Tasks );
		},*/

        // app helper function
        'bootstrapApp': function(appName, app) {
            var self = this;

            if (!self[appName]) {
                self[appName] = app;
                self[appName].start({
                    'token': self.token,
                    'regions': {
                        'content': self.App.content
                    },
                    'Vent': self.Vent
                });
            }
        },

        // ## Region management methods
        '_setContent': function(View, options) {
            var view;
            if (typeof View === 'function') {
                options = options || {};
                view = new View(options);
            } else {
                view = View;
            }
            this.regions.content.show(view);

            return view;
        },
    });

});