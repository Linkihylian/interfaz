<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>ElasticSearch | @yield('pestaña')</title>
	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset("css/bootstrap.min.css") }}">
    <link rel="stylesheet" type="text/css" href="{{asset('fontawesome/css/all.css')}}" media="screen" />
	@yield('css')
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body background="{{asset('assets/images/fondo_azul1024.png')}}">
	<div class="container">
		<div class="row mt-3 mb-3">
			<div class="rounded-top" style="background:url({{asset('assets/images/fondo_blanco.png')}}"> 
				<img width="100%" data-holder-rendered="true" class="img-responsive mt-3 mb-3" src="{{asset('assets/images/cabecera3.png')}}" alt="Imagen banner1">

				<div class="panel panel-default mb-5">
					<div class="container @yield('card_class')">

						<div class="card" @yield('extras')>
							
							<div class="card-body">

								<div class="container">
									
										
										<!--Empieza el contenido de la pagina-->
            							<main role="main" class="container">
              							@yield('contenido')
            							</main>
            							<!--Acaba el contenido de la pagina-->
									
									
								</div>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
			<footer class="footer">
          		<img class="rounded-bottom" src="{{asset('assets/images/pie.png')}}" width="100%" data-holder-rendered="true" alt="Imagen banner1">
        	</footer>
			</div>
			
		</div>
		
	</div>
	<!-- JavaScript -->
    <script type="text/javascript">base_url = "{{ url("/") }}"; </script>
    <script src="{{ asset("js/jquery-3.3.1.min.js") }}"></script>
    <script src="{{ asset("js/popper.min.js") }}"></script>
    <script src="{{ asset("js/bootstrap.min.js") }}"></script>
    <script src="{{ asset("js/sweetalert2.all.min.js") }}" charset="utf-8"></script>
    @yield('js')
</body>
</html>
