function modal_agregar_odi(){
  $("#modal_titulo").html("Agregar Objetivos de desempeño individual")
  var cuerpo = `
    <div class="row">
      <div class="col-sm-10">
        <label>ODI</label>
        <input type="text" class="form-control" id="modal_input_odi">
      </div>
      <div class="col-sm-2">
        <label>Peso</label>
        <input type="number" class="form-control" id="modal_input_peso">
      </div>
    </div>
  `;
  $("#modal_cuerpo").html(cuerpo)

  var pie = `
    <button type="button" class="btn btn-primary">Guardar</button>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
  `;
  $("#modal_pie").html(pie)

  $('#modal').modal("show")
}
