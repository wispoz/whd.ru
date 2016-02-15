angular.module('starter.controllers', [])

.controller('RegistrationCtrl', function($scope, $state) {
    
})


.controller('RoutesCtrl', function($scope, $state,$http) {
    $http.get('http://www.whodrive.ru/api/get-routes?access_token=l-rSFSQsOE9Yb4Ibr_Cywdl2-t7_u04o').
    success(function(data, status, headers, config) {
        $scope.today = data.tomorrow;
    }).
    error(function(data, status, headers, config) {
        
    });
    
    $scope.routeClick = function(index) {
            console.log($scope);
    }
})

.controller('LoginCtrl', function($scope, $state,$http) {

    $scope.signIn = function(user) {

        var req = {
            method: 'POST',
            url: 'http://www.whodrive.ru/api/auth',
            headers: {
                'Content-Type': undefined
            },
            data: user
        }
        var auth = btoa(user.username + ':' + user.password);
        console.log(auth);
        $http(req)        
        .then(function(data, status, headers, config) {
              console.log(data);
              if(data.data.success == true) {
                  $state.go('tab.dash');  
              } else{ 
               //TODO TOAST   
              }
            //  $state.go('tab.dash');
        }, 
        function(data, status, headers, config) {
            
            
        });
        
    };
})