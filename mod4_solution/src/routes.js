(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesListState', {
    url: '/categories',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      itemsResolve: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('detailCategoryState', {
    url: '/items',
    templateUrl:'src/templates/main-items.template.html',
    controller:'ItemsController as detailCategoryList',
    resolve:{
      itemsDetailResolve: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory();
      }]
    }
  });


  ;
}

})();
