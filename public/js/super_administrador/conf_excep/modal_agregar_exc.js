function modal_agregar_exc(){
  $("#modal_titulo").html("Agregar Exposición de asignación del rango excepcional")

  $("#modal_input_excepcional").val(null)
  $("#modal_input_id_excp").val(null)

  var pie = `
    <button type="button" class="btn btn-primary" onclick="guardar()">Guardar</button>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
  `;
  $("#modal_pie").html(pie)

  $('#modal').modal("show")

}
