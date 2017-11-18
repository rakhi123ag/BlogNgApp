

app.controller('appCtrl', function($scope,$http) 
{
	$http.get("https://assignment-server.herokuapp.com/posts").then(function (response)
	{
        $scope.posts = response.data;
		
		console.log("response ",response.data);
		
    });
});