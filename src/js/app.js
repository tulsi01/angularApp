var myApp=angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider){
    $routeProvider
    .when('/login',
        {
            controller: 'loginController',
            templateUrl: '/template/login.html'
        }
    )
.when('/home',{
    controller:'homeController',
    templateUrl:'./template/home.html'
})
.otherwise({ redirectTo: '/home' });
}])