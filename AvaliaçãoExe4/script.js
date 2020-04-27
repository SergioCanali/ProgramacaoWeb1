
function Filme(titulo, ano, genero){
    this.tituloFilme = titulo;
    this.anoFilme = ano;
    this.generoFilme = genero;
}

var filme1 = new Filme("Matrix", 1999, "Ação");
var filme2 = new Filme("Indiana Jones", 1981, "Aventura");
var filme3 = new Filme("O Exorcista", 1974, "Terror");

function percorreLista(Filme, nomeLista){
var ficha, texto, fLen, i;
ficha = [Filme.tituloFilme, Filme.anoFilme, Filme.generoFilme];
fLen = ficha.length;
texto = "<ul class=destaque>";
for (i = 0; i < fLen; i++) {
  texto += "<li>" + ficha[i] + "</li>";
}
texto += "</ul>";
document.getElementById(nomeLista).innerHTML = texto;
}

percorreLista(filme1, "lista1");
percorreLista(filme2, "lista2");
percorreLista(filme3, "lista3");
