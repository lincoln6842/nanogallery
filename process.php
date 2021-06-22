<?php
    require 'Medoo.php';
    require 'C:\Medoo-master\vendor\autoload.php';
    use Medoo\Medoo;
    $database = new Medoo([
        'type' => 'mariadb',
        'host' => 'localhost',
        'database' => 'music_database',
        'username' => 'root',
        'password' => 'Exzone69',
    ]);
    // $page = ($_GET["page"]-1) * $_GET["limit"]; // The array starts with 0
    // $limit = $_GET["limit"];
    // $id = $database->select('nanogallery','Trx_Det_Id',["LIMIT" => [0, 12]]);

    $list = $database->select('nanogallery',"*");
        //     {'Trx_Det_Id',
        //     'Trx_Id',
        //     'Project_Outlet_Name',
        //     'Project_Outlet_Code',
        //     'Region_Id',
        //     'Chain_Id',
        //     'Channel_Id',
        //     'Project_Outlet_Id',
        //     'Photo',
        //     'Trx_Date',
        //     'Full_Name',
        //     'Remarks',
        //     'Expiry_Date',
        //     'Effective_Date',
        //     'Filter_Category'}
    echo json_encode($list);
?>