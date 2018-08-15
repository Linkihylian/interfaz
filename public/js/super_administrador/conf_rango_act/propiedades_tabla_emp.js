function propiedades_tabla_emp(){
  $("#tabla_ra_empleado tbody td").mouseover(function(e) {
    $(this).css("cursor", "pointer");
  });

  $("#tabla_ra_empleado tbody td").click(function(e) {
    var clickedCell= $(e.target).closest("tr");
    var a      = clickedCell.find("td")
    var id_excp = clickedCell.attr("data-id-ra")
    modal_editar_rang_act(id_excp, $(a[0]).text(), $(a[1]).text(), $(a[2]).text(), $(a[3]).text()  )
  });
}
