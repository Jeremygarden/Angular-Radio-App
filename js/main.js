var app = angular.module('radioApp',[]);

app.controller('PlayerCtrl', ['$scope', function($scope){

	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = '/media/file.mp4';




app.controller('RelatedCtrl', ['$scope', function($scope){
	
}]);