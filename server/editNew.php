<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since");
header('Access-Control-Allow-Methods: GET, POST, PUT');
include_once 'class_sql_new.php';

$objDatos = json_decode(file_get_contents("php://input"));

$tabla = $objDatos->tabla;
$datos = $objDatos->datos;
$id = $objDatos->id;
$where = $objDatos->where;

$array = json_decode(json_encode($datos), True);

    if(empty($where)){
        $where = 'id_necesidades';
    }

$ccsi = new Sql;
foreach($array as $key=>$dato){
    if(!empty($dato)){
        $ccsi->editNew($tabla,$key,$dato,$where,$id);
    }
}

$mal = $ccsi->getMal();
if($mal>0){
    echo "Hubo $mal errores, pruebe mas tarde...";
}else{
    echo "Realizamos la edicion con exito!";
}

?>
