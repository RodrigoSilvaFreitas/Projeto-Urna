const { request } = require("express");

function entrar() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const sessao = document.getElementById("sessao").value;

    // Chamar o backend passando usuario/senha/sessao

    // Se não retornar, mostrar msg de erro

    if (usuario && senha && sessao) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `http://localhost:5000/login/${usuario}/${senha}/${sessao}`, false);
        xhttp.send();

        if (xhttp.status == 200) {
            window.localStorage.setItem("politicoSessao", xhttp.responseText)
            window.location.replace("index.html");
        } else {
            alert(xhttp.responseText);
        }
    }
}

function inserir(valor) {
    document.getElementById("campo5").value = valor;
}

function corrige() {
    document.getElementById("campo5").value = "";
}

function votar() {
    var resposta = document.getElementById("campo5").value;
    if (resposta == "sim") {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", `http://localhost:5000/sessao/id/qtd_votospos`, false);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send();
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", `http://localhost:5000/sessao/id/qtd_votosneg`, false);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send();
    }
}

function resultado() { var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:5000/sessao/id/qtd_votos`, false);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
}

function cadastrarPolitico() {

    var usuario = document.getElementById("usuario").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", `http://localhost:5000/politico`, false);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        usuario: usuario,
        login: login,
        senha: senha
    }));

    if (xhttp.status == 200) {
        alert('Politico cadastrado!');
    } else {
        alert('Falha ao cadastrar');
    }
}

function cadastrarSessao() {

    var nomeSessao = document.getElementById("nomeSessao").value;
    var descricao = document.getElementById("descricao").value;
    var dataInicio = document.getElementById("dataInicio").value;
    var dataFim = document.getElementById("dataFim").value;
    

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", `http://localhost:5000/sessao`, false);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        nome: nomeSessao,
        descricao: descricao,
        data_inicial: dataInicio,
        data_final: dataFim,
        tipo: "A",
        opcao1: "A",
        opcao2: "B",
        participacao: "s",
        controle: "A",
        qtd_max: 10,
        estado: "s",
        qtd_votospos: 0,
        qtd_votosneg: 0
    }));

    if (xhttp.status == 200) {
        alert('Sessao cadastrada!');
    } else {
        alert('Falha ao cadastrar');
    }
}





// function resultado() {
//     document.getElementById("resultado").innerHTML=""
//     for(i=0;i<100;i++){
//         if (sessionStorage.getItem(i) !== null) {
//             //alert(i);
//             document.getElementById("resultado").innerHTML += "Cantidado "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
//         }
//     }
// }

//function votar() {
  //  var voto = parseInt(document.getElementById("campo5").value);
    //var  = (voto * 10) + valor2;
    //if (sessionStorage.getItem(candidado) !== null) {
      //  votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        //sessionStorage.setItem(candidado, votos);
    //} else {
      //  sessionStorage.setItem(candidado, 1);

    //}
    //alert("Confirmado voto no candidato " + candidado)
    //document.getElementById("campo1").value = "";
    //document.getElementById("campo2").value = "";
//}