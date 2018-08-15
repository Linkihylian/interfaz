function actualizar_tabla(){
  swal.showLoading();
  $.ajax({
    type: "POST",
    url: base_url+"/super_administrador/evaluacion/configurar_excepcional/consultar",
    data:  {
      _token: $("[name='csrf-token']").attr('content'),
    },
    success: function(data){
      $("#tabla_excp > tbody > tr").remove();
      swal.close();

      if (data != 1) {
        var tabla = JSON.parse(data);
        var lng = tabla.length;
        for (var i = 0; i < lng; i++) {
          var tr = `
            <tr data-id-excp="`+tabla[i].id_eae+`">
              <td colspan="2">`+tabla[i].exposicion+`</td>
            </tr>
          `;
          $("#tabla_excp > tbody").append(tr);
        }
      }
      
      propiedades_tabla()

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
