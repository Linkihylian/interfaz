@extends('layouts/layout')
@section('pestaña','Login')
@section('card_class')
col-md-4 rounded
@endsection 
@section('extras')
style="background:url(assets/images/fondo_azul1024.png)"
@endsection

@section('contenido')
	<div class="row">
		<div class="col-md-12 mb-3">


			

			 {{shell_exec("python /var/www/html/our/Backups/echo.py '".$var."'")}}

		

    	</div>
    </div>
@endsection