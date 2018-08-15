function modal_editar_rang_act(id, inicio, final, ra, desc){
  $("#modal_titulo").html("Editar Rangos de Actuación para el personal Administrativo, Técnico - Profesional y Supervisorio")


  $("#modal_input_id_ra").val(id);
  $("#modal_input_r_inicio").val(inicio);
  $("#modal_input_r_final").val(final);
  $("#modal_textarea_ra").val(ra);
  $("#modal_textarea_descripcion").val(desc);


  var pie = `
    <button type="button" class="btn btn-primary" onclick="ra_modificar_emp(0)">Guardar</button>
    <button type="button" class="btn btn-danger" onclick="ra_modificar_emp(1)">Eliminar</button>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
  `;
  $("#modal_pie").html(pie)

  $('#modal').modal("show")
}
