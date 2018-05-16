<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\EmailContact;
class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
$id        = request()->ip();
$ch = curl_init("http://api.hostip.info/country.php?ip=$id");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$country_code = curl_exec($ch);
/*
switch ($country_code) {
    case "VE":
        return view ('home.principal');
        break;
    case "CO":
        return view ('home.principal');
        break;
    case "ES":
        return view ('home.principal');
        break;
        case "AR":
        return view ('home.principal');
        break;
        case "CU":
        return view ('home.principal');
        break;
        case "CL":
        return view ('home.principal');
        break;
        case "MX":
        return view ('home.principal');
        break;
        case "GT":
        return view ('home.principal');
        break;
        case "NI":
        return view ('home.principal');
        break;
        case "PR":
        return view ('home.principal');
        break;
        case "EC":
        return view ('home.principal');
        break;
                case "PE":
        return view ('home.principal');
        break;
                case "BO":
        return view ('home.principal');
        break;
                case "PY":
        return view ('home.principal');
        break;
                case "UY":
        return view ('home.principal');
        break;
    default:
       return view ('home.principal');
       break;

}
*/
     return view('home.principal'); 
  }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $nombre = 'Nombre: '.$request->data[0];
        $correo = ' Correo: '.$request->data[1];
        $telefono =' Telefono: '.$request->data[2];
        $compañia =' Compañia: '.$request->data[3];
        $pais = ' Pais: '.$request->data[4];
        $saltoLinea="\r\n";

        $contenido = "$nombre,$correo,$telefono,$compañia,$pais". $saltoLinea;
        $archivo="Asset/text/datos.txt";

        $file=fopen($archivo,"a");
        fwrite($file,$contenido);

        $para      = $request->data[2];
$titulo    = 'prueba desde laravel';
$mensaje   = 'el mensaje llego correctamente';
$cabeceras = 'From: admin@cointigo.io' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
