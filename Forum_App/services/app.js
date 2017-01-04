var forumApp = angular.module('forumApp', ['ui.router']);
 
forumApp.config(function($stateProvider) {

    $stateProvider.state('/', {
    	url: '/home',
        templateUrl: 'view/home.html',
    })

    .state('newPost', {
    	url: '/new_post',
    	templateUrl: 'view/createPost.html',
    	controller: 'postController',
    })

    .state('logIn', {
        url: '/LogIn',
        templateUrl: 'view/signin.html'
    })
});