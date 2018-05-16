registro = {

  contacto : function(){
    var data = new Array(5);
    data[0] = $('#camp1').val();
    data[1] = $('#camp2').val();
    data[2] = $('#camp3').val();
    data[3] = $('#camp4').val();
    data[4] = $('#camp5').val();
    var token = $("#token").val();
    var vald='false';
    if(data[0] == ''){
      $('#valcamp1').html('<font color="red" size="1px;" >Debe ingresar su Nombre completo antes de enviar la informacion</font>');
    }else{
      $('#valcamp1').html('');
    }
    if(data[1] == ''){
     $('#valcamp2').html('<font color="red" size="1px">Debe ingresar su Numero de telefono antes de enviar la informacion</font>');
   }else{
    $('#valcamp2').html('');
  }
  if(data[2] == ''){
   $('#valcamp3').html('<font color="red" size="1px">Debe ingresar su Correo antes de enviar la informacion</font>');
 }else{
  var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

  if (regex.test($('#camp3').val().trim())) {
   $('#valcamp3').html('');
 } else {
  $('#valcamp3').html('<font color="red" size="1px">La direccion de correo ingresada no es valida</font>');
  vald='true';
}
}
if(data[4] == 0){
  $('#valcamp5').html('<font color="red" size="1px">Debe seleccionar su País antes de enviar la informacion</font>');
}else{
  $('#valcamp5').html('');
}

if(data[0] == '' || data[1] == '' || data[2] == '' || data[4] == 0 || vald == 'true'){
  return;
}

$.ajax({
  url: 'home',
  headers: {'X-CSRF-TOKEN':token},
  data:{data:data},
  type: 'POST',
  beforeSend: function () {

  },
  success: function(respuesta){
   alert('Envio Exitoso');
 },
 error: function(respuesta){
   alert('Ha Surgido un Error.');
 },
});
},
}