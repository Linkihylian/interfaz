$(document).ready(function(){

  $('#direccion_oficina').selectize({
      create: false,
      sortField: 'text'
  });


  $('#tabla_ev_realizadas').DataTable({
    "language": {
      "url": base_url+"/js/Spanish.json"
    }
  });

})
