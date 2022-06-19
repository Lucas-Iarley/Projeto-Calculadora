function Valores(item) {
		Tela =document.querySelector("input").value;
		document.querySelector("input").value = item ;
		document.querySelector("input").value = Tela + item;
	}

	function limpar( ){
	 document.querySelector("input").value = "";
	
	}
	
	function operacoes(){
		var tela = document.querySelector("input").value;
		var adicao = document.querySelector(".soma").value;
		var sub = document.querySelector(".sub").innerHTML;
		var numero = document.querySelectorAll(".numero").innerHTML;
	/*	if(tela == adicao){
			tela = parseInt(numero)+parseInt(numero);
			return tela.value ;
		}else if (tela == sub){
			tela = parseInt(numero)-parseInt(numero);
			returntela.value;
		};*/
		console.log(typeOf(adicao));

		

	}



function limpar( ){
	 document.querySelector("input").value = "";
	
}
//por algum motivo eesse código não funciona no navegador, porem em outros
//sites que codan, funciona

