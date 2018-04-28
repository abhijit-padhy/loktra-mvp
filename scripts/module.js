var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/home.html",
        controller : "homeLoanCtrl"
    })
    .when("/homeLoan",{
        templateUrl : "./views/homeLoan.html",
    })
    .when("/eduLoan",{
        templateUrl : "./views/homeLoan.html"
    })
    .when("/personalLoan",{
        templateUrl : "./views/homeLoan.html"
    })
    .otherwise({
        redirecTo : "/"
    });
});

app.controller('indexCtrl',function($scope){
    $scope.message = "index message";
    $scope.navAccess = function(){
        $("#navContainer").removeClass('navContainer');
        $("#navContainer").removeClass('slideOut');
        $("#navContainer").addClass('slideIn');
        $("#container").addClass("opac"); 
    }
    $scope.navCollapse = function(){
        if($('#navContainer').hasClass('slideIn')){
            $("#container").removeClass("opac");    
            $("#navContainer").removeClass('slideIn');
            $("#navContainer").addClass('slideOut');
        }
    }
});

app.controller('homeLoanCtrl',function($scope,$http){
    $scope.loans = [];
    //Factory call
     $http.get("./data/data.json")
    .then(function(response) {
        $scope.loans = response.data.data;
        console.log($scope.loans);
    });
    var welcome_text = "Start your destination here...";
    var i=0;
    $scope.home_message = "";
     setInterval(function(){
        $scope.home_message += welcome_text.charAt(i);
         i++;
        },1);  
//    if(i!=welcome_text.length){
//       for(i=0;i<welcome_text.length;i++){
//             
//       }
//    }
});