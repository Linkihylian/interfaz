function modal_editar_odi(id, odi, peso){
  $("#modal_titulo").html("Editar Objetivos de desempeño individual")
  var cuerpo = `
    <input type="hidden" id="id_odi_editar" value="`+id+`">
    <div class="row">
      <div class="col-sm-10">
        <label>ODI</label>
        <input type="text" class="form-control" id="modal_input_odi" value="`+odi+`">
      </div>
      <div class="col-sm-2">
        <label>Peso</label>
        <input type="number" class="form-control" id="modal_input_peso" value="`+peso+`">
      </div>
    </div>
  `;
  $("#modal_cuerpo").html(cuerpo)

  var pie = `
    <button type="button" class="btn btn-primary">Guardar</button>
    <button type="button" class="btn btn-danger">Eliminar</button>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
  `;
  $("#modal_pie").html(pie)

  $('#modal').modal("show")
}
