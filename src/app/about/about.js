(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.about', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/about/about.tpl.html',
            controller: 'AboutCtrl as about',
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
   * @name  AboutCtrl
   * @description Controller
   */
  function AboutCtrl(data) {
    var about = this;
    about.data = data.data;
  }

  angular.module('about', [])
    .config(config)
    .controller('AboutCtrl', AboutCtrl);
})();
