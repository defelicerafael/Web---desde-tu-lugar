(function(){
    var app = angular.module('dtlApp',['ngMaterial','config','controladores','SqlServices','ngFileUpload','panelItemTemplate','panelItemListTemplate','upload_icon','ngSanitize','paginas','NewSlider','ngAnimate','Iconos','Footer','Bloque','Banner','Fototexto','ngMessages','Timeline']);
    
    
    
    app.controller('Ctrl',['Upload','$timeout','$route','$routeParams','$scope','Sql','SqlInsertArray','SqlEdit','SqlDelete','$mdToast','$mdDialog','$mdSidenav',function(Upload,$timeout,$route,$routeParams,$scope,Sql,SqlInsertArray,SqlEdit,SqlDelete,$mdToast,$mdDialog,$mdSidenav){
        var dtl = this;
        dtl.data_eventos = [];
        dtl.icono = [];
        $scope.id = $routeParams.id;
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
          return function() {
            $mdSidenav(componentId).toggle();
          };
        }
        
       
            
            
            
            
        dtl.Select = function (tablas,quesoy){
        //  console.log(tablas,quesoy);
            var filtro = 'no';
            var link = 'server/columnasNew.php';
            var tabla = tablas;
            var filtro_por = 'id';
            var orden = "ASC";
            var limit = "100";
            Sql.async(filtro,link,tabla,filtro_por,orden,limit).then(function(d) {
            console.log(d);
                switch(quesoy) {
                    case 'icono':
                        dtl.icono = d;
                        break;
                    case 'slider':
                        dtl.sliders = d;
                    
                    break;

                    default:
                        dtl.datos = d;
                }
            });
        }; 
        dtl.sliders = [
                            {"id": 1,"img": "img/home/sliders/desdetulugar-rse-proyectos-sociales-pasaje-la-virtud.jpg","alt": "Ayud\u00E1 con un regalo del d\u00EDa del ni\u00F1o","link": "http://desdetulugar.org.ar/tulugar","texto": ""},
                            {"id": 1,"img": "img/home/sliders/slider1.png","alt": "\u00BFY tu lugar cu\u00E1l \u00E9s?","link": "http://desdetulugar.org.ar/tulugar","texto": ""},
                            {"id": 2,"img": "img/home/sliders/slider2.png","alt": "Dona online","link": "http://mpago.la/1jDEQo","texto": ""}
                        ]; 
            
        dtl.icono =   [ 
                            {'img':'img/home/iconos/personas.png','alt':'tu lugar','link':'http://www.desdetulugar.org.ar/tulugar','texto':'Hoy podes ayudar a quien m\u00E1s lo necesita, sin sacrificios y sin salir de tu zona de confort.'},
                            {'img':'img/home/iconos/empresas.png','alt':'empresas','link':'#/empresas','texto':'Desde tu lugar ayuda a las compa\u00F1\u00EDas a impactar positivamente en la sociedad.'},
                            {'img':'img/home/iconos/educacion.png','alt':'educacion','link':'#/educacion','texto':'Nuestro objetivo  es contar con futuras generaciones, comprometidas e involucradas, con los sectores m\u00E1s vulnerables de nuestra sociedad.'},
                            {'img':'img/home/iconos/organizaciones.png','alt':'organizaciones','link':'#/organizaciones','texto':'Vamos a repensar, potenciar e innovar la forma de llevar a cabo su labor y convertir sus necesidades en proyectos concretos.'}
                                    
                        ];
        
            dtl.fotos =    [ 
                            {'img':'img/home/fotos/desde-tu-lugar-5.jpg','alt':'desde tu lugar'},
                            {'img':'img/home/fotos/desde-tu-lugar-35.jpg','alt':'desde tu lugar'}
                                             
                        ];
            
            
            dtl.images =    [ 
                            {'img':'img/empresas/amadeus.png','alt':'Amadeus'},
                            {'img':'img/empresas/directv.png','alt':'Directv'},
                            {'img':'img/empresas/disney.png','alt':'Disney'},
                            {'img':'img/empresas/sura.png','alt':'Seguros sura'},
                            {'img':'img/empresas/gire.png','alt':'Gire, Mercado pago, Mercado libre'},
                            {'img':'img/empresas/metrogas.png','alt':'Metrogas'},
                            {'img':'img/empresas/just.png','alt':'Just'},
                            {'img':'img/empresas/microsoft.png','alt':'Microsoft'},
                            {'img':'img/empresas/johnsonsc.png','alt':'S&C Johnson'},
                            {'img':'img/empresas/telefe.png','alt':'Telefe'},
                            {'img':'img/empresas/pernod_ricard.png','alt':'Pernord Ricard'},
                            {'img':'img/empresas/remax.png','alt':'Remax'}                           
                        ];
        dtl.colegios =    [ 
                            {'img':'img/educacion/sanignacio.png','alt':'Colegio San Ignacio'},
                            {'img':'img/educacion/labarden.png','alt':'Colegio Labarden'},
                            {'img':'img/educacion/santaines.png','alt':'Colegio Santa In\u00E9s'},
                            {'img':'img/educacion/saintmary.png','alt':'Colegio Saint Mary Of The Hills'},
                            {'img':'img/educacion/sanandres.png','alt':'universidad de San Andr\u00E9s'} 
                        ];                
            
        
        dtl.youtube = "https://www.youtube.com/embed/DVPxKfHc-88";
        
        dtl.textoayudar =[
                        {'txt':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','firma':'Marian Kexel','empresa':'Directv'}
                        ,{'txt':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','firma':'Rafael Defelice','empresa':'Disney'}
                        ,{'txt':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','firma':'Pia Tatay','empresa':'johson'}
                    ];
        dtl.internos =[
                        {'img':'img/empresas/internos/mural.png','titulo':'Contagiemos alegr\u00EDa','texto':'Realizar un mural, para transformar un hogar de ni\u00F1os en un espacio alegre.','texto2':'El mural est\u00E1 dividido en bastidores. Cada empleado deber\u00E1 pintar uno, con las referencias correspondientes.','color':'#27c6b0'},
                        {'img':'img/empresas/internos/utiles.png','titulo':'F\u00E1brica de \u00FAtiles','texto':'Generar una fuente de autoestima y fortaleza para el encarar el a\u00F1o lectivo.','texto2':'Armado y decoraci\u00F3n de mochilas de tela, cartucheras cuadernos y carpetas.','color':'#27c6b0'},
                        {'img':'img/empresas/internos/conin.png','titulo':'Aprender jugando','texto':'Juegos did\u00E1cticos para los centros Con\u00EDn para familias con vulnerabilidad y pobreza.','texto2':'Pintura e intervenci\u00F3n de las piezas. Envolver cada juego.','color':'#27c6b0'},
                        {'img':'img/empresas/internos/mochilas.png','titulo':'Mochilas anti frio','texto':'Con abrigos y art\u00EDculos de higiene personal. Para hombres en situaci\u00F3n de calle.','texto2':'Armado de gorro, bufanda y frazada de polar. Circuito con materiales para ingresar en la mochila.','color':'#27c6b0'},
                        {'img':'img/empresas/internos/usina.png','titulo':'Usina creativa','texto':'Generar contenido creativo, did\u00E1ctico y completo para transmitir los 17 objetivos de la ONU para el 2030.','texto2':'Realizar piezas digitales, gr\u00E1ficas, l\u00FAdicas y audiovisuales para generar conciencia en los barrios vulnerables.','color':'#27c6b0'},
                        {'img':'img/empresas/internos/abc.png','titulo':'Kit ABC','texto':'Kits de alfabetizaci\u00F3n para ni\u00F1os de 1\u00BA grado y que viven en situaci\u00F3n de vulnerabilidad.','texto2':'Armado y decoraci\u00F3n de: pizarr\u00F3n individual de tiza y magn\u00E9tico, borrador, tizas, consonantes, vocales y n\u00FAmeros con imanes.','color':'#27c6b0'},
                        {'img':'img/empresas/internos/amigdalos.png','titulo':'Banda de los Am\u00EDgdalos','texto':'Es un programa dirigido a trabajar las emociones y expresar el estado de \u00E1nimo.','texto2':'Armado de t\u00EDteres, frasco de calma y buz\u00F3n de reconocimiento.','color':'#27c6b0'}
                    ];
        dtl.externos =[
                        {'img':'img/empresas/externos/tipo-de-proyecto.png','titulo':'Tipo de proyecto','texto':'Educaci\u00F3n, salud, sustentabilidad etc. La empresa nos plantea que enfoque le quieren dar al proyecto.','color':'white'},
                        {'img':'img/empresas/externos/empleados.png','titulo':'Cantidad de empleados','texto':'Nos ense\u00F1a con cuantos voluntarios cuenta para la actividad, para encontrar un lugar acorde','color':'white'},
                        {'img':'img/empresas/externos/zona.png','titulo':'Zona','texto':'Relevamos las necesidades de comedores, centros de d\u00EDa, salitas medicas, hogares de ni\u00F1os, etc. En la zona que la empresa recomienda para la actividad.','color':'white'},
                        {'img':'img/empresas/externos/propuesta-customizada.png','titulo':'Propuesta customizada','texto':'En base a las necesidades relevadas, proponemos actividades a los voluntarios, para que se sientan c\u00F3modos y elijan cual es su lugar en la actividad.','color':'white'},
                        {'img':'img/empresas/externos/llave-en-mano.png','titulo':'Proyecto llave en mano','texto':'Desde tu lugar, se encarga de todo. Las comidas, transporte, herramientas... Todo lo necesario para que la actividad de voluntareado salga 100 puntos. ','color':'white'}
                        
                    ];              
            
            dtl.Edit = function (datos,tabla,id,show){
            console.log(datos,tabla,id,show);
            var where = 'id';
            var datos = datos;
            var link = 'server/edit.php';
            var tabla = tabla;
            var id = id;
            var show = show;
            SqlEdit.async(link,datos,tabla,id,where).then(function(d){
         //   console.log(d);
            dtl.showSimpleToast("Ha editado con EXITO");
            $scope.isLoading=true;
                if(show===1){
                    window.history.back(1);
                }
            });
        };
            
        dtl.insert = function (datos,tabla){
           // console.log("datos:" + datos + "tabla" + tabla);
            var datos = datos;
            var link = 'server/insert_array_datos.php';
            var tabla = tabla;
            SqlInsertArray.async(link,datos,tabla).then(function(d){
            //console.log(d);
            dtl.showSimpleToast("Ha ingresado correctamente en la base de datos.");
            $scope.isLoading=true;
            $route.reload();
            
            });
        };      
            
            
       
       
        
        
        
        
         dtl.showSimpleToast = function(text) {
            $mdToast.show(
            $mdToast.simple()
            .textContent(text)
            .position('bottom right' )
            .hideDelay(3000)
            );
        };
        
        
        dtl.removeItem = function (x) {
           // console.log(dtl.articulos);
            dtl.articulos.splice(x, 1);
           // console.log(dtl.articulos);
            $scope.guardar = {'json':dtl.articulos};
            dtl.guardarJson($scope.guardar,'presupuestos',dtl.id_presupuesto);
            
        }; 
        
        
        
        
        $scope.Delete = function (id,tabla){
           // console.log(id,tabla);
            var r = confirm("Esta seguro que desea ELIMINAR este dato?");
            if(r===true){
            var link = 'server/delete.php';
            var id = id;
            SqlDelete.async(link,id,tabla).then(function(d){
            //    console.log(d);
            dtl.showSimpleToast("Ha BORRADO un dato.");
            $scope.isLoading=true;
            $route.reload();
            });
            }
            
        };
       
       dtl.mail = function (datos,tabla){
           // console.log("datos:" + datos + "tabla" + tabla);
            var datos = datos;
            var link = 'server/contacto.php';
            var tabla = tabla;
            SqlInsertArray.async(link,datos,tabla).then(function(d){
           // console.log(d);
            dtl.showSimpleToast("Ha enviado un email a info@desdetulugar.com.ar");
            $scope.isLoading=true;
            $scope.firstname = "";
            $scope.lastname = "";
            $scope.email = "";
            $scope.comentario = "";
            if(d==='1'){
                $scope.mostrar = "si";
                $scope.respuesta = "Muchisimas gracias por contactarse con Desdetulugar";
            }else{
                $scope.mostrar = "si";
                $scope.respuesta = "No hemos podido completar en envio, intente nuevamente en unos minutos";
            }
            
            });
        };
       
        /// UPLOAD FILES CON ngFileUpload
        
        $scope.uploadFiles = function(files, errFiles,dir) {
        $scope.foto = [];
        $scope.files = files;
        $scope.errFiles = errFiles;
        //console.log(dir);
        angular.forEach(files, function(file) {
        if(dir==='sliders'){    
            file.upload = Upload.upload({
                url: 'server/server_reducir.php',
                data: {file: file,'dir':dir}
            });
        }else{
           file.upload = Upload.upload({
                url: 'server/server_no_reducir.php',
                data: {file: file,'dir':dir}
            }); 
        }
            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                    console.log(file.result);
                    //var foto = JSON.parse(file.result);
                    $scope.foto = file.result;
                    var d = new Date();
                    var n = d.getDate();
                    var y = d.getFullYear();
                    var m = d.getMonth()+1;
                    $scope.fecha = y+'-'+m+'-'+n;
                   // console.log($scope.fecha);
                    console.log($scope.foto.name);
                    var datos = {'img':$scope.foto.name,'mostrar':'si','fecha':$scope.fecha,'responsive':'si'};
                    var link = 'server/insert_array_sin_fecha.php';
                    var tabla = dir;
                    SqlInsertArray.async(link,datos,tabla).then(function(d){
                    console.log(d);
                    $scope.isLoading=false;
                    
                  
                        });
                    });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
              
                
            });
            
        });
        //store.DatosFotosGaleria();
    };
        
       // FIN DEL UPLOAD ANDA JOYA !!   
        
        
     }]);
    
})();


