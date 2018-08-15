function ra_actualizar_tabla_emp(){
  swal.showLoading();
  $.ajax({
    type: "POST",
    url: base_url+"/super_administrador/evaluacion/configurar_rango_actuacion/consultar_todo/"+$("[name='opcion']:checked").val(),
    data:  {
      _token: $("[name='csrf-token']").attr('content')
    },
    success: function(data){
      $("#tabla_ra_empleado > tbody > tr").remove();
      swal.close();

      if (data != 1) {
        var tabla = JSON.parse(data);
        var lng = tabla.length;
        for (var i = 0; i < lng; i++) {
          var tr = `
          <tr data-id-ra="`+tabla[i].id_rang_actuacion+`">
          <td>`+tabla[i].inicio+`</td>
          <td>`+tabla[i].final+`</td>
          <td>`+tabla[i].rango_actuacion+`</td>
          <td colspan="2">`+tabla[i].descripcion+`</td>
          </tr>`;
          $("#tabla_ra_empleado > tbody").append(tr);
        }
        propiedades_tabla_emp();
      }
      else{
        swal({
          type: 'error',
          title: 'Error',
          text: "Ocurrió un error",
        })
      }


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
