function modal_agregar_rang_act(){
  $("#modal_titulo").html("Agregar Rangos de Actuación para el personal Administrativo, Técnico - Profesional y Supervisorio")

  $("#modal_input_id_ra").val(null);
  $("#modal_input_r_inicio").val(null);
  $("#modal_input_r_final").val(null);
  $("#modal_textarea_ra").val(null);
  $("#modal_textarea_descripcion").val(null);

  var pie = `
    <button type="button" class="btn btn-primary" onclick="ra_guardar_emp()">Guardar</button>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
  `;
  $("#modal_pie").html(pie)

  $('#modal').modal("show")
}
