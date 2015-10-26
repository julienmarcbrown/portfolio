(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.work', {
        url: '/work',
        views: {
          '@': {
            templateUrl: 'src/app/work/work.tpl.html',
            controller: 'WorkCtrl as work',
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
   * @name  WorkCtrl
   * @description Controller
   */
  function WorkCtrl(data) {
    var work = this;
    work.data = data.data;
  }

  angular.module('work', [])
    .config(config)
    .controller('WorkCtrl', WorkCtrl);
})();
