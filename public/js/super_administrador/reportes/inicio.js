$(function(){

  $('#dir_oficina').selectize({
      create: false,
      sortField: 'text'
  });

  $('#coordinacion').selectize({
      create: false,
      sortField: 'text'
  });

  $('#periodo').selectize({
      create: false,
      sortField: 'text'
  });


  
  $('#tabla_personal_no_eval').DataTable({
    "language": {
      "url": base_url+"/js/Spanish.json"
    }
  });


});
