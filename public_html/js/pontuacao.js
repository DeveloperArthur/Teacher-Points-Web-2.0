function calcularPontuacao(){
	var mes_cargo = document.getElementById("mes_cargo").value;
	var mes_lotacao = document.getElementById("mes_lotacao").value;
	var mes_adjunto = document.getElementById("mes_adjunto").value;
	var mes_titular = document.getElementById("mes_titular").value;
	var magisterio = document.getElementById("magisterio").value;

	//Tratativa de erro caso usuario deixe algum campo vazio
	if(mes_cargo == ''){
		document.getElementById('erroCargo').innerHTML = 'Preencha todos os campos!';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}
	if(mes_lotacao == ''){
		document.getElementById('erroLotacao').innerHTML = 'Preencha todos os campos!';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}
	if(mes_adjunto == ''){
		document.getElementById('erroAdjunto').innerHTML = 'Preencha todos os campos!';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	} 
	if(mes_titular == ''){
		document.getElementById('erroTitular').innerHTML = 'Preencha todos os campos!';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}   
	if(magisterio == ''){
		document.getElementById('erroMagisterio').innerHTML = 'Preencha todos os campos!';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}

	//Tratativa de erro se usuario digitar numero negativo
	if(mes_cargo < 0){
		document.getElementById('erroCargo').innerHTML = 'Digite somente números positivos';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}
	if(mes_lotacao < 0){
		document.getElementById('erroLotacao').innerHTML = 'Digite somente números positivos';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}
	if(mes_adjunto < 0){
		document.getElementById('erroAdjunto').innerHTML = 'Digite somente números positivos';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	} 
	if(mes_titular < 0){
		document.getElementById('erroTitular').innerHTML = 'Digite somente números positivos';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}   
	if(magisterio < 0){
		document.getElementById('erroMagisterio').innerHTML = 'Digite somente números positivos';
		document.getElementById('total1').innerHTML = '';
	    document.getElementById('total2').innerHTML = '';
	}
	
	if(
		mes_cargo != '' && 
		mes_lotacao != '' && 
		mes_adjunto != '' && 
		mes_titular != '' && 
		magisterio != '' && 
		mes_cargo > 0 && 
		mes_lotacao > 0 && 
		mes_adjunto > 0 && 
		mes_titular > 0 && 
		magisterio > 0
	){
		document.getElementById('erroCargo').innerHTML = '';
		document.getElementById('erroLotacao').innerHTML = '';
		document.getElementById('erroAdjunto').innerHTML = '';
		document.getElementById('erroTitular').innerHTML = '';
		document.getElementById('erroMagisterio').innerHTML = '';

		var valor_mes_cargo = mes_cargo * 6;
		var valor_mes_lotacao = mes_lotacao * 5;
		var valor_mes_carreira_adjunto = mes_adjunto * 1;
		var valor_mes_carreira_titular = mes_titular * 3;
		var valor_mes_magisterio = magisterio * 0.5;

	    var total1 = valor_mes_cargo+valor_mes_lotacao+valor_mes_carreira_adjunto+valor_mes_carreira_titular+valor_mes_magisterio;
		var total2 = valor_mes_cargo+valor_mes_carreira_titular+valor_mes_magisterio;

		document.getElementById('total1').innerHTML = total1;
	    document.getElementById('total2').innerHTML = total2;
	}else{
		alert('Você não preencheu o formulário corretamente');
	}		
}
