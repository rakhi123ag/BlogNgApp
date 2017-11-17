var app=angular.module('myApp', []);

app.controller('createCtrl', function($scope,$http) 
{
	
	$scope.Message="";
	$scope.submit=function(){
		
		console.log($scope.title);
	    console.log($scope.author);
		
		var data={title:$scope.title,date:formatDate(new Date()),author: $scope.author};
		
		$http.post("http://assignment-server.herokuapp.com/posts",data,{headers: { 'Content-Type': 'application/json'}}).then(function (response)
	   {
		console.log("response ",response.data);
		
		$scope.Message="Post Created Successfully";
		$scope.title="";
		$scope.author="";
		
      });
		
	}
	

	function formatDate(date) {
         var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
     ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return  monthNames[monthIndex] +' ' + day + ',' + year;
}

});