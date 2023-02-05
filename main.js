const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    let linha = `<tr>`;
    linha += `<tr>${inputNomeContato.value}</tr>`;
    linha += `<tr>${inputTelefoneContato.value}</tr>`;
    linha += `</tr>`

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputTelefoneContato = '';
});