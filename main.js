const form = document.getElementById('lista')
const contatos  = [];
const nomes =[];

let linhas ='';
form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualiza();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputContato = document.getElementById('contato')

    if(contatos.includes(inputContato.value)){
        alert(`O contato: ${inputContato.value} já é existente`)
    } else{
        contatos.push(inputContato.value);
        nomes.push(inputNome.value);

        let linha = '<tr>'
        linha += `<td> ${inputNome.value} </td>`
        linha += `<td> ${inputContato.value} </td>`
        linha += '</tr>'

        linhas += linha;
    }

    inputNome.value = '';
    inputContato.value = '';

}

function atualiza(){
    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas;
}