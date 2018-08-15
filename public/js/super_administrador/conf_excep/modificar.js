function modificar(tipo){
  swal.showLoading();
  $.ajax({
    type: "POST",
    url: base_url+"/super_administrador/evaluacion/configurar_excepcional/modificar",
    data:  {
      _token: $("[name='csrf-token']").attr('content'),
      modal_input_excepcional:  $("#modal_input_excepcional").val(),
      modal_input_id_excp:      $("#modal_input_id_excp").val(),
      tipo: tipo
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


      actualizar_tabla();

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
