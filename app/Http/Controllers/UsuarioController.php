<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsuarioController extends Controller
{
     public function index(){
    	return view("usuario.inicio");
    }

    public function enviar(Request $request){
    	
    	$var = $request->input('cedula');

	    return view("usuario.test")->with('var',$var);
    }

}
