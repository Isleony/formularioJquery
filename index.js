$(document).ready(function () {
    // Aplicando máscaras aos campos
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
});

// Aqui você pode adicionar um código JavaScript para enviar o formulário para o servidor.
$('#cadastro-form').submit(function (e) {
    e.preventDefault();
    // Adicione sua lógica de envio do formulário aqui.
});