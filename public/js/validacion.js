

var nav4 = window.Event ? true : false;

val = {

	acceptNum: function(evt){
		var key = nav4 ? evt.which : evt.keyCode; 
		return (key <= 13 || (key >= 48 && key <= 57 ) || key==46);
	},
	uppercase: function(txt,id){
		txt = txt.toUpperCase();
		$('#'+id).val(txt);
	},
	valemail: function(id,divid,value){
		if(value == ''){
			return;
		}
		var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

		if (regex.test($('#'+id).val().trim())) {
			$('#valcamp3').html('');
		} else {
			$('#valcamp3').html('<font color="red" size="1px">La direccion de correo ingresada no es valida</font>');
			return;
		}
	},
	soloLetras: function (e) {
		key = e.keyCode || e.which;
		tecla = String.fromCharCode(key).toLowerCase();
		letras = " �����abcdefghijklmnñopqrstuvwxyz";
		especiales = [8, 9];
		tecla_especial = false
		for (var i in especiales) {
			if (key == especiales[i]) {
				tecla_especial = true;
				break;
			}
		}
		if (letras.indexOf(tecla) == -1 && !tecla_especial) {
			return false;
		}
	},


}

