function guardar_periodo(){

  swal.showLoading();

  $.ajax({
      type: "POST",
      url: base_url+"/super_administrador/guardar_periodo",
      data:  {
        fecha_inicio: $("#fecha_inicio").val(),
        fecha_fin   : $("#fecha_fin").val(),
        _token: $("[name='csrf-token']").attr('content')
      },
      success: function(data){
        swal.close();
        $("#salida_periodo").html(data);


        $('#pills-odi-tab').removeClass('disabled');
        $('#guardar_btn').fadeOut();
        $('#fecha_inicio').prop('disabled', true);


     },
     error: function (xhr, ajaxOptions, thrownError) {
         //alert(xhr.status+" "+thrownError+"\n\n", "Ocurrió un error ");
         swal.close();
         swal({
           type: 'error',
           title: 'Error',
           text: '¡Algo salió mal! - ' + xhr.status+" "+thrownError+"\n\n",
         })

     }
   });

}
