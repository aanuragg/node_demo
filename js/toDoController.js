 var app = angular.module('myApp',[]);
	 app.controller('toDoCtrl',function($scope){
	 	$scope.toDoList = [];
	 	$scope.index ='';
	 	$scope.AddToDo = function(){
	 		if($scope.todoData.length > 0){
	 			$scope.toDoList.push({'textToDo':$scope.todoData,'done':false});
	 			$scope.todoData ='';	
	 			$scope.toDoCount = $scope.toDoList.length;
	 		}else{
	 			alert("please specify some task");
	 		}
	 	};
	 	$scope.pressKeyEvent = function(event){
	 		if(event.charCode == 13) $scope.AddToDo();
	 		//console.log(event.charCode);
	 	};
	 	$scope.stateChanged = function(a){
	 	};
	 	$scope.RemoveToDo = function(a){
	 		 console.log(a);
	 		 var index = $scope.toDoList.indexOf(a);
	 		 $scope.toDoList.splice(index, 1);
	 		 $scope.toDoCount = $scope.toDoList.length;
	 	};
  });