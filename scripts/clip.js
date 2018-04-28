// Directive
app.directive('reverse',function(){
    return{
        restrict: 'E',
        scope:{
            message : '=',
            // link : '&onLink'
        },
        templateUrl: './views/form_template.html',
        controller: function($scope) {
          $scope.reverseName = function(){
            $scope.name = $scope.name.split('').reverse().join('');
          };      
        $scope.submit = function(){
            $scope.msgFlag = true;
            $scope.message = 'Submitted successfully';
            setTimeout(function(){ $scope.msgFlag = false; }, 20);
        };
        }
    };
});