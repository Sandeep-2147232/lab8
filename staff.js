var myapp = angular.module('Staff', []);
      /*Dependency Injection*/
      myapp.controller('staffctrl',function($scope,$http)
{
   $http.get('https://raw.githubusercontent.com/Sandeep-2147232/json/main/staff.json')
   .success(function(response)
{
  $scope.names=response.staff;
  $scope.rowlimit=6;
}
);
});