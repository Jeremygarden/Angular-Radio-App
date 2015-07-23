var app = angular.module('radioApp',[]);


var apiKey ='MDE5OTQzNDg5MDE0Mzc1MTMxOThlNzM0NA001',
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';




app.factory('audio', ['$document', function($document) {
  var audio = $document[0].createElement('audio');
  return audio;
}]);


app.controller('PlayerController', ['$scope', '$http', 'audio',
  function($scope, $http, audio) {
  $scope.audio = audio;


app.factory('player', ['audio', function(audio) {
  var player = {};
  return player;
}]);


/*app.controller('PlayerController', function($scope, $http) {
  var audio = document.createElement('audio');
  $scope.audio = audio;
  $http({
	method: 'JSONP',
	url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
	}).success(function(data, status) {

  $scope.channels = data.list.story;
	}).error(function(data, status) {

	});

  $scope.play = function(channel) {
    if ($scope.playing) $scope.audio.pause();
    var url = channel.audio[0].format.mp4.$text;
    $scope.audio.src = url;
    $scope.audio.play();
    $scope.playing = true;
  };



});
*/

app.controller('RelatedCtrl', ['$scope', function($scope){
	
}]);