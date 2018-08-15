$(document).ready(function() {

  $('#dir_oficina').selectize({
      create: false,
      sortField: 'text'
  });

  $('#coordinacion').selectize({
      create: false,
      sortField: 'text'
  });

  $('#tipo').selectize({
      create: false,
      sortField: 'text'
  });

  $('#cargo').selectize({
      create: false,
      sortField: 'text'
  });

  $('#categoria').selectize({
      create: false,
      sortField: 'text'
  });

  $('#categoria_cargo').selectize({
      create: false,
      sortField: 'text'
  });

  $('#comp_categoria').selectize({
      create: false,
      sortField: 'text'
  });




  $("#tabla_odi tbody td").mouseover(function(e) {
    $(this).css("cursor", "pointer");
  });

  $("#tabla_odi tbody td").click(function(e) {
    var clickedCell= $(e.target).closest("tr");
    var a      = clickedCell.find("td")
    var id_odi = clickedCell.attr("data-id-odi")

    modal_editar_odi(id_odi, $(a[0]).text(), $(a[1]).text())
  });








  $("#pills-periodo-tab").click(function(){
      $("#progressbar").css("width", "20%")
  })

  $("#pills-odi-tab").click(function(){
      $("#progressbar").css("width", "40%")
  })

  $("#pills-categeorias-tab").click(function(){
      $("#progressbar").css("width", "60%")
  })

  $("#pills-competencias-tab").click(function(){
      $("#progressbar").css("width", "80%")
  })

  $("#pills-duracion-tab").click(function(){
      $("#progressbar").css("width", "100%")
  })




  $("#lista_competencias_periodo").fadeOut();
  $("#div_tabla_competencias").fadeOut();
  $("#div_competencias_categoria").fadeOut();

  // competencias | lista periodos antiguos
  $("#lista_competencias_periodo button").click(function(e) {
    $("#lista_competencias_periodo button").removeClass("active");
    $(this).addClass("active");
  });

});
