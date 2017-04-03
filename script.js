   angular
  .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute'])
  .config(function($locationProvider, $routeProvider) {
  	$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "imdb.html",
        controller : "repoCtrl"
    });
  })
  .controller('repoCtrl', function($scope,$http) {
    $scope.repo = {};
    $scope.waiting = false;
    $scope.repo.Response = 'False';
    $scope.fetchdata = function(){
    var url = "https://api.github.com/users/"+$scope.userinput+"/repos";
fetch(url)
   .then(data => { 
        return data.json();
   }).then(data => { 
        $scope.repo = data.map((data)=>{
        return {name : data.name, url : data.html_url};
   });
});
}; 
});



