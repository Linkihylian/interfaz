function ra_modificar_emp(accion){
  swal.showLoading();
  $.ajax({
    type: "POST",
    url: base_url+"/super_administrador/evaluacion/configurar_rango_actuacion/modificar",
    data:  {
      _token: $("[name='csrf-token']").attr('content'),
      modal_input_id_ra: $("#modal_input_id_ra").val(),
      modal_input_r_inicio: $("#modal_input_r_inicio").val(),
      modal_input_r_final: $("#modal_input_r_final").val(),
      modal_textarea_ra: $("#modal_textarea_ra").val(),
      modal_textarea_descripcion: $("#modal_textarea_descripcion").val(),
      modal_textarea_descripcion: $("#modal_textarea_descripcion").val(),
      tipo: $("[name='opcion']:checked").val(),
      estado: accion
    },
    success: function(data){
      swal.close();
      if (data == 0) {
        $("#modal").modal("hide");
        swal({
          type: 'success',
          title: 'Ok',
          text: 'Operación realizada',
        })
      }
      else if (data == 1) {
        swal({
          type: 'error',
          title: 'Error',
          text: 'Ocurrió un error al realizar la operación',
        })
      }
      else {
        swal({
          type: 'error',
          title: 'Error',
          text: 'Error desconocido',
        })
      }

      ra_actualizar_tabla_emp();

    },
    error: function (xhr, ajaxOptions, thrownError) {
    swal.close();
      swal({
        type: 'error',
        title: 'Error',
        text: '¡Algo salió mal! - ' + xhr.status+" "+thrownError+"\n\n",
      })
    }
  });
}
