app.controller('myController', function($scope, myFactory) {
	$scope.userData = myFactory.getData;

	$scope.populateUsers = function() {
		$scope.users = $scope.userData();
	}
});