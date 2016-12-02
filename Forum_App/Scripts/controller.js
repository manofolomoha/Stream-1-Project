angular.module('RouteControllers', [])
    .controller('postController', function($scope) {

    	$scope.postContent = {};

    	$scope.newPost = function() {
    		console.log("Form Submitted");
    		console.log($scope.post.title);
    		console.log($scope.post.description);
    	};
    });