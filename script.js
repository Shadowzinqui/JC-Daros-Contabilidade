//esconder abas
function hideAllMenuItens() {
  const itens = document.querySelectorAll(".menuItens");
  itens.forEach((item) => {
    item.style.display = "none";
  });
  const fraseLogan = document.querySelectorAll("#frase");
  fraseLogan.forEach((item) => {
    item.style.display = "none";
  });
}
//abrir abas
function openHistory() {
  hideAllMenuItens();
  historiaInformacoes();
  const btnRes = document.querySelectorAll("#btn-reset");
  btnRes.forEach((item) => {
    item.style.display = "block";
  });
  // lógica específica da História aqui
}

function openPurpose() {
  hideAllMenuItens();
  propostaInformacoes();
  const btnRes = document.querySelectorAll("#btn-reset");
  btnRes.forEach((item) => {
    item.style.display = "block";
  });
  // lógica específica do Propósito aqui
}

function openService() {
  hideAllMenuItens();
  servicosInformacao();
  const btnRes = document.querySelectorAll("#btn-reset");
  btnRes.forEach((item) => {
    item.style.display = "block";
  });
  // lógica específica de Serviços aqui
}
//informacoes abas
function historiaInformacoes() {
  const itens = document.querySelectorAll(".divhistoria");
  itens.forEach((item) => {
    item.style.display = "block";
  });
}
function propostaInformacoes() {
  const itens = document.querySelectorAll(".divproposito");
  itens.forEach((item) => {
    item.style.display = "block";
  });
}
function servicosInformacao() {
  const itens = document.querySelectorAll(".divServicos");
  itens.forEach((item) => {
    item.style.display = "block";
  });
}
//voltar
function reset() {
  const menu = document.querySelectorAll(".menuItens");
  menu.forEach((item) => {
    item.style.display = "flex";
  });
  const fraseLogan = document.querySelectorAll("#frase");
  fraseLogan.forEach((item) => {
    item.style.display = "flex";
  });

  const serv = document.querySelectorAll(".divServicos");
  serv.forEach((item) => {
    item.style.display = "none";
  });

  const prop = document.querySelectorAll(".divproposito");
  prop.forEach((item) => {
    item.style.display = "none";
  });

  const his = document.querySelectorAll(".divhistoria");
  his.forEach((item) => {
    item.style.display = "none";
  });
  const res = document.querySelectorAll("#btn-reset");
  res.forEach((item) => {
    item.style.display = "none";
  });
}

function mostrarReset() {
  const res = document.querySelectorAll("#btn-reset");
  res.forEach((item) => {
    item.style.display = "block";
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

function hideFrase() {}
