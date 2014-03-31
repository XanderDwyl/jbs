define(function(require) {
    'use strict';

    var Marionette = require('marionette');
    var _          = require('underscore');
    var $          = require('jquery');

    var template   = require('text!templates/layouts/header.html');

    return Marionette.Layout.extend({

        'initialize': function(options) {

        },

        'template': _.template(template),

        'tagName': 'div',
        'className': 'header-layout',

        'regions': {},

        'ui': {},

        'events': {},

        'onShow': function() {
			$('#nav').affix({
                offset: {
                    top: $('header').height()
                }
            });
        }

    });

});