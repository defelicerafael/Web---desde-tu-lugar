 angular.module("IconosSociales",[])
    .directive("iconossociales",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/iconos-sociales/templates/iconos.html',
            
            link:{
              post: function(scope,iElement,iAttributes,controller){
                      iElement.children(0).css("background-color", "grey");
                      
              }  
            },
            controller : function($scope,$element,$attrs,$timeout){
                $scope.redes = [];
                $scope.ir = $attrs.ir;
                console.log($attrs.iconos);
                if($attrs.iconos.includes("facebook")){
                    $scope.redes.push({'text':'facebook','img':'img/footer/facebook.png'});
                }
                if($attrs.iconos.includes("instagram")){
                    $scope.redes.push({'text':'instagram','img':'img/footer/instagram.png'});
                }
                if($attrs.iconos.includes("twitter")){
                    $scope.redes.push({'text':'twitter','img':'img/footer/twitter.png'});
                }
                console.log($scope.redes);
            }
        };
    });
        
    
   
  

