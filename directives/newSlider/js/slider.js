 angular.module("NewSlider",[])
    .directive("newslider",function(){
        
       return{
            
            restrict: "E",
            templateUrl: 'directives/newslider/templates/slider.html',
            scope: {
                titulo:"@",
                log:"@",
                tipo:"@",
                fotos:"@",
                texto:"@"
            },
            controller : function($scope,$interval,$timeout){
            $scope.$watch("fotos",function(fotos) {
                if (fotos) {
                    console.log($scope.fotos);
                    console.log($scope.tipo);
                    $scope.setTime = 5000;
                    $scope.selected = 0;
                        $timeout(function callAtTimeout() {
                            $scope.textos = angular.fromJson($scope.texto);
                            $scope.foto = angular.fromJson($scope.fotos);
                             
              //       console.log($scope.foto, $scope.textos);
                        }, 100);
                    $scope.setTime = 4000;
                    $scope.selected = 0;
                    $scope.textos = angular.fromJson($scope.texto);
              //  console.log($scope.tipo);
                    $scope.rueda = function(){
                        if($scope.selected===$scope.foto.length-1){
                            $scope.selected = 0;
                        }else{
                            $scope.selected ++;
                        }
                    //console.log($scope.selected);
                    };
                    $scope.ruedatexto = function(mas){
                        if (mas==="suma"){
                            if($scope.selected===$scope.foto.length-1){
                                $scope.selected = 0;
                            }else{
                                $scope.selected ++;
                            }
                        }
                        if (mas==="resta"){
                            if($scope.selected<=0){
                                $scope.selected = $scope.foto.length-1;
                            }else{
                                $scope.selected --;
                            }
                        }
                    };
                
                    $scope.isThis = function(index){
                        if(index===$scope.selected){
                            return true;
                        }else{
                            return false;
                        }
                    };
                
                    $scope.elegir = function(index){
                        $scope.selected = index;
                        };
                }
                
            });
            
           
            }
        };
    });
        
    
   
  

