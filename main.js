const forcaSenha = document.querySelector('.forca')

const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 1;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
if (tamanhoSenha > 1) {
tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
function aumentaTamanho() {
if (tamanhoSenha < 20) {
tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (i = 0; i < checkbox.length; i++){
checkbox[i].onclick = geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '#@!$%&§?';

geraSenha();

function geraSenha() {
let alfabeto = '';
if (checkbox [0].checked) {
alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox [1].checked) {
alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox [2].checked) {
alfabeto = alfabeto + numeros;
}
if (checkbox [3].checked) {
alfabeto = alfabeto + simbolos;
}



let senha = '';
for (let i = 0; i < tamanhoSenha; i++) {
let numeroAleatorio = Math.random() * alfabeto.length;
numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + alfabeto[numeroAleatorio];
}
campoSenha.value = senha;
classificaSenha ();
}

function classificaSenha (){
forcaSenha.classList.remove('fraca','media','forte');
if (tamanhoSenha > 11){
forcaSenha.classList.add ('forte');
}else if (tamanhoSenha >= 6 && tamanhoSenha<=11){
forcaSenha.classList.add ('media');

}else if (tamanhoSenha <= 5){
forcaSenha.classList.add ('fraca');
}

} 