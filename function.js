
let credenciais = {
  nome: "Laura",
  senha: "1234",
};

let login = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");

function clicou() {
  let nomeCorreto = username.value == credenciais.nome;
  let senhaCorreta = password.value == credenciais.senha;
  
  if (nomeCorreto && senhaCorreta){
    alert("Logado!")
  } else{
    alert("Credenciais incorretas!")
  }
}
