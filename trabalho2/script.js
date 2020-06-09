
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function dropIt() {
  toggleClass(document.getElementById('dropdown'), "hide");
}


function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



        function confirmaFormulario() {
            var n = document.getElementById("nome").value;
            n = n + ""
            var Senha = document.getElementById("senha").value;
            var Senha = Senha + "";
            if (Senha == "") {
                alert("Insira uma senha");
                return false;
            }
            var s = window.location.href;
            var s = s + "";
            var num = s.lastIndexOf("/");
            var String = s.substr(num, s.length - 1);
            s = s.replace(String, "/index.html");
            window.location.href = s;
           

        }
