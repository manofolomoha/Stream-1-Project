// Initialize Firebase
var config = {
  apiKey: "AIzaSyDGmOUEr8uXOb05m9MpmdNZcwSr0H5fOQc",
  authDomain: "forum-app-17081.firebaseapp.com",
  databaseURL: "https://forum-app-17081.firebaseio.com",
  storageBucket: "forum-app-17081.appspot.com",
  messagingSenderId: "483040706899"
};

firebase.initializeApp(config);

var forumApp = angular.module('forumApp', ['ui.router']);
 
forumApp.config(function($stateProvider) {

    $stateProvider.state('/', {
    	url: '/home',
        templateUrl: 'app/view/home.html',
    })

    .state('newPost', {
    	url: '/new_post',
    	templateUrl: 'app/view/createPost.html',
    	controller: 'postController',
    })

    .state('logIn', {
        url: '/LogIn',
        templateUrl: 'app/view/signIn.html',
        controller: 'loginController',
    })
});