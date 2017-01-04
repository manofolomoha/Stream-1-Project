forumApp.controller('postController',  function($scope) {

	$scope.postContent = {[

		$scope.newPost = function() {
			console.log("Form Submitted");
			$scope.postContent.title = $scope.post.title;
			$scope.postContent.description = $scope.post.description;

    		console.log($scope.postContent.title);
    		console.log($scope.postContent.description);
        }
    ]};
});