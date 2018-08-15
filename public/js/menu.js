$(function(){

  var url = window.location.href

  var pat = /normas/;
  if ( pat.test(url) ) {
    $("#nav_super_administrador").addClass("active");
  }

  var pat = /evaluacion\//;
  if ( pat.test(url) ) {
    $("#nav_evaluacion").addClass("active");
  }

  var pat = /evaluaciones_realizadas/;
  if ( pat.test(url) ) {
    $("#nav_ev_realizadas").addClass("active");
  }


})
