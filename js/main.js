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


app.factory('player', ['audio', function(audio) {
  var player = {
    playing: false,
    current: null,
    ready: false,

    play: function(program) {
      // If we are playing, stop the current playback
      if (player.playing) player.stop();
      var url = program.audio[0].format.mp4.$text; // from the npr API
      player.current = program; // Store the current program
      audio.src = url;
      audio.play(); // Start playback of the url
      player.playing = true
    },

    stop: function() {
      if (player.playing) {
        audio.pause(); // stop playback
        // Clear the state of the player
        player.ready = player.playing = false; 
        player.current = null;
      }
    }
  };
  return player;
}]);

app.controller('PlayerController', ['$scope', 'player',
  function($scope, player) {
  $scope.player = player;
}]);