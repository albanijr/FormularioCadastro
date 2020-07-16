// JavaScript source code
$(() => {
	function mascara(i) {

		var v = i.value;

		if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que n�o seja n�mero
			i.value = v.substring(0, v.length - 1);
			return;
		}

		i.setAttribute("maxlength", "14");
		if (v.length == 3 || v.length == 7) i.value += ".";
		if (v.length == 11) i.value += "-";

	}

	$(function(){
		function onAjaxSuccess(data) {
			if(data.result == 200) {
				document.getElementById("inputLogra").value = data.data['logradouro'];
				document.getElementById("inputBairro").value = data.data.bairro;
				document.getElementById("inputCidade").value = data.data.cidade;
				document.getElementById("inputEstado").value = data.data.estado;
				document.getElementById("inputLogra").disabled = disabled;
				document.getElementById("inputBairro").disabled = disabled;
				document.getElementById("inputCidade").disabled = disabled;
				document.getElementById("inputEstado").disabled = disabled;
			} else {
				onAjaxError(data);
			} 
		}

		function onAjaxError(data) {
			$("#result_content")
				.empty()
				.append(JSON.stringify(data))
				.show("slow");
		}

		function onSubmitClick() {
			$("#result_content").hide("slow");
			alert("AQUI");
			$.getJSON("https://api.postmon.com.br/v1/cep/" + $("#inputCEP").val()).
					success(onAjaxSuccess).
					error(onAjaxError);
		}

		$("#button").click(onSubmitClick);
	});
});