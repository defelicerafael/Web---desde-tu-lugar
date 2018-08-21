 angular.module("Timeline",[])
    .directive("timeline",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/timeline/templates/timeline.html',
            scope: {
                tabla:"@"
            },
            link:{
                post: function(scope,iElement,iAttributes,controller){
                }
                        
            },
            controller : function($scope,$mdDialog,Sql){
                $scope.timeline = [];
                $scope.sliders = [];
                /*$scope.timeline = [
                    {'fecha':'Martes 7 de Agosto','texto':'Proyecto Externo: Voluntariado en AM-TEMA con DirecTV','class':'container left','img':'img/timeline/amtema/dtv-am-tema.jpg','galeria':'1'},
                    {'fecha':'Viernes 3 de Agosto','texto':'Proyecto interno: F\u00e1brica de juguetes con S&C Johnson','class':'container right','img':'img/timeline/scj/3.jpg','galeria':'2'},
                    {'fecha':'Viernes 27 de Julio','texto':'Proyecto interno: Mochilas antifrio en Directv Call Center','class':'container left','img':'img/timeline/dtv-mochilas-ant-frio-2018-subsuelo/tapa.jpg','galeria':'3'},
                    {'fecha':'Jueves 19 de Julio','texto':'Proyecto interno: Mochilas antifrio en Directv','class':'container right','img':'img/timeline/dtv-mochilas-antifrio-2018/27.jpg','galeria':'4'},
                    {'fecha':'Mi\u00e9rcoles 18 de Julio','texto':'Proyecto externo: Voluntariado en escuela de Pilar, S&C Johnson','class':'container left','img':'img/timeline/scj-escuela-pilar/1.jpg','galeria':'5'}
                    
                ];*/
            
                $scope.showPrerenderedDialog = function(ev) {
                    $mdDialog.show({
                      contentElement: '#myDialog',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      clickOutsideToClose: true
                    });
                };
               $scope.Select = function (galeria){
                    console.log(galeria);
                    var filtro = {'galeria':galeria};
                    var link = 'server/columnasNew.php';
                    var tabla = 'fotos';
                    var filtro_por = 'id';
                    var orden = "ASC";
                    var limit = "100";
                    Sql.async(filtro,link,tabla,filtro_por,orden,limit).then(function(d) {
                    console.log(d);
                    $scope.sliders = d;
                        
                    
                        
                    });
                };
                $scope.SelectTimeline = function (){
                    
                    var filtro = 'no';
                    var link = 'server/columnasNew.php';
                    var tabla = 'timeline';
                    var filtro_por = 'fecha';
                    var orden = "DESC";
                    var limit = "999";
                    Sql.async(filtro,link,tabla,filtro_por,orden,limit).then(function(d) {
                    console.log(d);
                    $scope.timeline = d;
                        
                    
                        
                    });
                };
                
                $scope.SelectTimeline();
                
                /*$scope.sliders = [
                    {"id": 1,"img": "img/timeline/amtema/1.jpg","alt": "Directv AMTEMA","link": "","texto": ""},
                    {"id": 1,"img": "img/timeline/amtema/2.jpg","alt": "Directv AMTEMA","link": "","texto": ""},
                    {"id": 2,"img": "img/timeline/amtema/3.jpg","alt": "Directv AMTEMA","link": "","texto": ""}
                ]; */
                
                
            }
        };
    });
        
    
   
  

