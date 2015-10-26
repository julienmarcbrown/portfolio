(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.contact', {
        url: '/contact',
        views: {
          '@': {
            templateUrl: 'src/app/contact/contact.tpl.html',
            controller: 'ContactCtrl as contact',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  ContactCtrl
   * @description Controller
   */
  function ContactCtrl(data) {
    var contact = this;
    contact.data = data.data;
  }

  angular.module('contact', [])
    .config(config)
    .controller('ContactCtrl', ContactCtrl);
})();
