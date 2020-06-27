$(function(){

    var $emp = $('#tabela-empregados');
  
    $.ajax({
      type:'GET',
      dataType: 'json',
      url: 'https://rest-api-employees.jmborges.site/api/v1/employees',
      success: function(emp) {
        var emp1 = emp.data;
        $.each(emp1, function(i, empe){
          $emp.append('<tr> <td>'+ empe.id +'</td> <td>'+ empe.employee_name +'</td> <td>'+ empe.employee_salary +'</td> <td>'+ empe.employee_age +'</td> <td> <img src="'+ empe.profile_image +'"> </td> <td> <button onclick="editar()">Editar</button> <button onclick="remove()">Excluir</button> </td> </tr>');
        });
      }
    });
  });
  
  
  function enviar(){
    var dados = {
      name: document.getElementById("nome").value,
      salary: document.getElementById("salario").value,
      age: document.getElementById("idade").value
    };
    var d1 = JSON.stringify(dados);
    console.log(d1);
     $.ajax({
     url: 'https://rest-api-employees.jmborges.site/api/v1/create',
     type: 'POST',
     data: d1,
     success: function(resposta){
       var nome = resposta.data.name;
       alert("O empregado " + nome + " foi cadastrado com sucesso!!");
     }
    });
  };
  
  
  
  function editar(){
    alert("Preencha o formulario com a edição")
    var dados = {
      name: document.getElementById("nome").value,
      salary: document.getElementById("salario").value,
      age: document.getElementById("idade").value
    };
    var d1 = JSON.stringify(dados);
    console.log(d1);
  
    $.ajax({
     url: 'https://rest-api-employees.jmborges.site/api/v1/update/21',
     type: 'PUT',
     data: d1,
     success: function(resposta){
       var nome = resposta.data.name;
       alert("O empregado " + nome + " foi editado com sucesso!!");
     }
    });
  };
  
  
  function remove(){
      $.ajax({
     url: 'http://rest-api-employees.jmborges.site/api/v1/delete/2',
     type: 'DELETE',
     success: function(resposta){
       var nome = resposta.data.name;
       alert("O empregado " + nome + " foi removido com sucesso!!");
     }
    });
  
  };