define( function ( require ) {
	'use strict';

	var AppController = require( 'controllers/AppController' );

	describe( 'AppController Controller', function () {

		it('should be an instance of AppController Controller', function () {
			var appController = new AppController();
			appController.should.be.an.instanceof( AppController );
		} );

		it('should have more test written', function () {
			( false ).should.be.ok;
		} );
	} );

} );