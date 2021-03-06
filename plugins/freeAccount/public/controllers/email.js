app
  .controller('MainController', function($scope, $http, $state) {
    console.log('main');
    $state.go('index');
  })
  .controller('IndexController', function($scope, $http, $state) {
   console.log('index');
   $scope.user = {};
   $scope.sendCode = function() {
     $http.post('/email', {
       email: $scope.user.email
     }).then(console.log);
   };
   $scope.checkCode = function() {
     $http.post('/code', {
       email: $scope.user.email,
       code: $scope.user.code
     }).then(console.log);
   };
  })
  .controller('AccountController', function($scope, $http, $state, $stateParams) {
    console.log($stateParams.id);
    $http.post('/account', {address: $stateParams.id}).then(function(success) {
      console.log(success.data);
    }, function(error) {
      console.log(error);
      $state.go('index');
    });
  })
;
