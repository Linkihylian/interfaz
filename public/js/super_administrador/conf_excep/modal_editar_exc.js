function modal_editar_exc(id, excp){
  $("#modal_titulo").html("Editar Exposición de asignación del rango excepcional")


  $("#modal_input_excepcional").val(excp)
  $("#modal_input_id_excp").val(id)

  var pie = `
    <button type="button" class="btn btn-primary" onclick="modificar(0)">Modificar</button>
    <button type="button" class="btn btn-danger" onclick="modificar(1)">Eliminar</button>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
  `;
  $("#modal_pie").html(pie)

  $('#modal').modal("show")
}
