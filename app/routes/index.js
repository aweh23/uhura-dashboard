import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function (transition) {
    var s = this._super(transition);

    if (!this.get('session.isAuthenticated')) {
      transition.abort();
      if(window.cordova) {
        this.transitionTo('login');
      } else {
        this.transitionTo('explore');
      }
    }

    return s;
  }
});
