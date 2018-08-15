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
			<img src="{{asset('assets/images/logo_saren.png')}}" width="60%" height="100%" alt="" style="margin-left:20%; margin-right:0px;">
    	</div>
    </div>
    <div class="row">
		<div class="col-md-12">

	    {{ Form::open(array('url' => '/inicio')) }}
	      <div class="form-group">
	        {{ Form::text('cedula', null, array('placeholder' => 'Cedula', 'class' =>'text-center form-control mb-1','id' =>'cedula' ,'maxlength'=>'8', 'required'=> 'required')) }} 
	        {{ Form::button('<a><i class="fas fa-user"></i> Enviar</a>',array('class'=> 'btn btn-danger btn-block login mb-1 mt-2','name'=>'test', 'type'=> 'submit'))  }}
	      </div>
	      {{ Form::close() }}
		</div>
    </div>

@endsection