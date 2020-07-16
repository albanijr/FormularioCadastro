// JavaScript source code create by Albani Júnior

function mascaraCpf(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que nao seja n�mero
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

}

function mascaraCep(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que nao seja n�mero
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "9");
    if (v.length == 5) i.value += "-";

}

function buscarCepDados() {

    $.getJSON("https://api.postmon.com.br/v1/cep/" + $("#inputCEP").val(),
        function (result) {
            document.getElementById("inputLogra").value = result['logradouro'];
            document.getElementById("inputBairro").value = result['bairro'];
            document.getElementById("inputCidade").value = result['cidade'];
            document.getElementById("inputEstado").value = result['estado'];
            document.getElementById("inputLogra").disabled = true;
            document.getElementById("inputBairro").disabled = true;
            document.getElementById("inputCidade").disabled = true;
            document.getElementById("inputEstado").disabled = true;
        });
}

function onSubmitClick() {
    var dadoscorretos = ["Nome Completo:", "Data de Nascimento", "CPF", "Celular", "E-mail", "CEP", "Logradouro", "Número", "Complemento", "Bairro", "Cidade", "UF", "Descrição(Bio)"];
    var dados = [$("#inputNome").val(), $("#inputDataNascimento").val(), $("#inputCpf").val(), $("#inputCelular").val(), $("#inputEmail").val(), $("#inputNumero").val(), $("#inputComplemento").val(), $("#inputBairro").val(), $("#inputCidade").val(), $("#inputEstado").val(), $("#inputDescricao").val()];
    Console.log(dadoscorretos + dados);
}