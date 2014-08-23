import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AppENV.locationType
});

Router.map(function() {
	this.resource('galleries',  function(){
		this.resource('gallery', { path: '/:gallery_id' }, function(){
			this.route('edit');
			this.route('delete');

		});
		this.route('new');
	});

	this.resource('account', function(){
		this.route('signup');
	});
	
	this.route('about');
	this.route('signin');
	this.route('component-test');
	this.route('helper-test');
});


export default Router;
