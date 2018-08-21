(function(){
    var app = angular.module('config',['ngRoute']);
    
    app.config(function($routeProvider){
        $routeProvider
                .when("/",{
                    templateUrl:"templates/home.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/prueba",{
                    templateUrl:"templates/prueba.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/nosotros",{
                    templateUrl:"templates/personas.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/impacto",{
                    templateUrl:"templates/impacto.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/ayudar",{
                    templateUrl:"templates/ayudar.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/empresas",{
                    templateUrl:"templates/empresas.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/empresas/proyectos-externos",{
                    templateUrl:"templates/proyectos-externos.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/empresas/proyectos-internos",{
                    templateUrl:"templates/proyectos-internos.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/empresas/voluntariado-profesional",{
                    templateUrl:"templates/voluntariado-profesional.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/empresas/team-building",{
                    templateUrl:"templates/team-building.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/empresas/voluntariado-profesional",{
                    templateUrl:"templates/voluntariado-profesional.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/educacion",{
                    templateUrl:"templates/charlas.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/educacion/proyectos",{
                    templateUrl:"templates/proyectos-educacion.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/educacion/programa-integral-en-solidaridad",{
                    templateUrl:"templates/programa.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/educacion/charlas-talleres",{
                    templateUrl:"templates/charlas.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/organizaciones",{
                    templateUrl:"templates/organizaciones.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/contacto",{
                    templateUrl:"templates/contacto.html",
                    controller:"Ctrl",
                    controllerAs : "Ctrl"
                })
                .when("/instituciones",{
                    templateUrl:"templates/instituciones.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                
                
                        .otherwise("/");
    });
    })();
