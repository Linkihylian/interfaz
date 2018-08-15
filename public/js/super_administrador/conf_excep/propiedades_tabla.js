function propiedades_tabla(){
  $("#tabla_excp tbody td").mouseover(function(e) {
    $(this).css("cursor", "pointer");
  });

  $("#tabla_excp tbody td").click(function(e) {
    var clickedCell= $(e.target).closest("tr");
    var a      = clickedCell.find("td")
    var id_excp = clickedCell.attr("data-id-excp")

    modal_editar_exc( id_excp, $(a[0]).text())

  });

}
