 angular.module("Slider",[])
    .directive("slider",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/slider/templates/slider.html',
            scope: {
                tipo:"@",
                texto:"@",
                fotos:"@"
            },
            controller : function($scope,$interval,$timeout){
                
                console.log($scope.tipo, $scope.fotos);
                
                $scope.setTime = 5000;
                $scope.selected = 0;
                 $timeout(function callAtTimeout() {
                    $scope.textos = angular.fromJson($scope.texto);
                    $scope.foto = angular.fromJson($scope.fotos);
                 console.log($scope.foto, $scope.textos);
                }, 1000);
                
                
                
                console.log($scope.fotos);
                
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
                    
                        if($scope.selected===$scope.foto.length){
                            $scope.selected = 0;
                        }else{
                            $scope.selected ++;
                        }
                    }
                    if (mas==="resta"){
                        
                        if($scope.selected<=0){
                            $scope.selected = $scope.foto.length;
                        }else{
                            $scope.selected --;
                        }
                    }
                    //console.log($scope.selected);
                };
                
                $scope.isThis = function(index){
                   if(index===$scope.selected){
                       return true;
                   }else{
                       return false;
                   }
                    
                };
                
                
                
               if($scope.tipo==="foto"){
                    $interval($scope.rueda, $scope.setTime);
          //          console.log("entre foto");
                }
                if($scope.tipo==="texto"){
                    $interval($scope.ruedatexto('suma'), $scope.setTime);
           //         console.log("entre texto");
                }
               
            }
        };
    });
        
    
   
  

