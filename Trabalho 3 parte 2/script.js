$(function(){

    var $alu = $('#tabela-alunos');
  
    $.ajax({
      type:'GET',
      dataType: 'json',
      url: 'https://virtserver.swaggerhub.com/SergioCanali/ColegioCanali1/1.0.0/aluno',
      success: function(alu) {
        var alu1 = alu.data;
        $.each(alu1, function(i, alun){
          $alu.append('<tr> <td>'+ alun.ci +'</td> <td>'+ alun.nome +'</td> <td>'+ alun.notas +'</td>  </td> <td> <button onclick="editar()">Editar</button> <button onclick="remove()">Excluir</button> </td> </tr>');
        });
      }
    });
  });
  
  
  function enviar(){
    var dados = {
      nome: document.getElementById("nome").value,
      ci: document.getElementById("ci").value,
      notas: [
        { 
          id: document.getElementById("id").value,
          nota: document.getElementById("nota").value
      }
    ]
    };
    var d1 = JSON.stringify(dados);
    console.log(d1);
     $.ajax({
     url: 'https://virtserver.swaggerhub.com/SergioCanali/ColegioCanali1/1.0.0/aluno',
     type: 'POST',
     data: d1,
     success: function(resposta){
       var nome = resposta.data.name;
       alert("O aluno " + nome + " foi cadastrado com sucesso!!");
     }
    });
  };
  
  
  
  function editar(){
    alert("Preencha o formulario com a edição")
    var dados = {
      nome: document.getElementById("nome").value,
      ci: document.getElementById("ci").value,
      notas: [
        { 
          id: document.getElementById("id").value,
          nota: document.getElementById("nota").value
      }
    ]
    };
    var d1 = JSON.stringify(dados);
    console.log(d1);
  
    $.ajax({
     url: 'https://virtserver.swaggerhub.com/SergioCanali/ColegioCanali1/1.0.0/aluno:id',
     type: 'PUT',
     data: d1,
     success: function(resposta){
       var nome = resposta.data.name;
       alert("O aluno " + nome + " foi editado com sucesso!!");
     }
    });
  };
  
  
  function remove(){
      $.ajax({
     url: 'https://virtserver.swaggerhub.com/SergioCanali/ColegioCanali1/1.0.0/aluno:id',
     type: 'DELETE',
     success: function(resposta){
       var nome = resposta.data.name;
       alert("O aluno " + nome + " foi removido com sucesso!!");
     }
    });
  
  };