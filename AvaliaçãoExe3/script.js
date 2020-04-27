
var fruits, text, fLen, i;
fruits = ["Papel Higienico", "Macarrao", "Carne", "Repolho"];
fLen = fruits.length;

text = "<ul class=destaque>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("lista").innerHTML = text;
