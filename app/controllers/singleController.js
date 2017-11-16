var app= angular.module('myApp', []);

app.controller('singleCtrl', function($scope,$http) 
{
	var blogId=getParameterByName("id");
	
	
	$http.get("http://assignment-server.herokuapp.com/posts/"+parseInt(blogId)).then(function (response)
	{
        $scope.post = response.data;
		
		console.log("response",response.data);
		
		$http.get("http://assignment-server.herokuapp.com/comments").then(function (responseComments)
      	{
		   
		   console.log("responseresponseComments",responseComments.data);
		   $scope.comments=[]
		   for(i=0;i<responseComments.data.length;i++)
		   {
			   if(responseComments.data[i].postId==parseInt(blogId))
			   {
				    $scope.comments.push(responseComments.data[i]);
					console.log("response.data[i]",responseComments.data[i]);
			   }
		   }
		  
		});
		
    });
	
	
	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
	
	
	

});