angular.module('forumApp', ['ngRoute', 'RouteControllers']);
 
angular.module('forumApp').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'Templates/Home.html',
    })

    $routeProvider.when('/NewPost', {
    	templateUrl: "Templates/Create_Post.html",
    	controller: "postController"
    })
});