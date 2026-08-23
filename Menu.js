const bosses = [
  { id: 1, nome: "Arlan", dificuldade: "Super-fácil", tier: 1, imagem: "Arlan.png" },
  { id: 2, nome: "Marcos", dificuldade: "Fácil", tier: 2, imagem: "Marcos.png" },
  { id: 3, nome: "Miguel", dificuldade: "Médio", tier: 3, imagem: "Miguel.png" },
  { id: 4, nome: "Carlos", dificuldade: "Difícil", tier: 4, imagem: "Carlos.png" },
  { id: 5, nome: "LucasPintoNunes", dificuldade: "Super-difícil", tier: 5, imagem: "LucasPintoNunes.png" },
  { id: 6, nome: "Davizao", dificuldade: "Impossível", tier: 6, imagem: "Davizao.png" },
  { id: 7, nome: "Arthur", dificuldade: "Nightmare", tier: 7, imagem: "Arthur.png" },
  { id: 8, nome: "Vinicius", dificuldade: "Absoluto 💀", tier: 8, imagem: "Vinicius.png" },
  { id: 9, nome: "GuilhermeChucro", dificuldade: "Imensurável ✨", tier: 9, imagem: "GuilermeChucro.png" },
  { id: 10, nome: "PaulaoDoPneu", dificuldade: "Além do limite 🌌", tier: 10, imagem: "PaulaoDoPneu.png" },
];

const coresTier = {
  1: "#9aa0a8", 2: "#5fd17a", 3: "#3fa9e0", 4: "#8a5fe0", 5: "#e08a2f",
  6: "#d63a3a", 7: "#ff5252", 8: "#c04dff", 9: "#f2d34a", 10: "#ff3fd8",
};

function hexParaRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}

let bossesDerrotados = [];
let moedasGlobais = 0;
let diamantesGlobais = 0;

const CHAVE_SALVAMENTO = "bossRushSave";

function salvarProgresso() {
  const dados = {
    moedasGlobais: moedasGlobais,
    diamantesGlobais: diamantesGlobais,
    bossesDerrotados: bossesDerrotados,
    possuidos: inventario.possuidos,
    equipados: inventario.equipados,
  };
  try { localStorage.setItem(CHAVE_SALVAMENTO, JSON.stringify(dados)); }
  catch (erro) { console.error("Não foi possível salvar o progresso:", erro); }
}

function carregarProgresso() {
  let bruto;
  try { bruto = localStorage.getItem(CHAVE_SALVAMENTO); } catch (erro) { return; }
  if (!bruto) return;
  try {
    const dados = JSON.parse(bruto);
    moedasGlobais = dados.moedasGlobais || 0;
    diamantesGlobais = dados.diamantesGlobais || 0;
    bossesDerrotados = dados.bossesDerrotados || [];
    inventario.possuidos = dados.possuidos || inventario.possuidos;
    inventario.equipados = Object.assign({}, inventario.equipados, dados.equipados || {});
  } catch (erro) { console.error("Save corrompido, ignorando:", erro); }
}

const jogador = { nome: "PaulaoCreator", imagem: "Paulo.jpg" };

let bossSelecionadoId = null;
let musicaLigada = true;

function mostrarTela(idTela) {
  document.querySelectorAll(".tela").forEach(function (tela) { tela.classList.remove("ativa"); });
  document.getElementById(idTela).classList.add("ativa");
}

document.querySelectorAll("[data-tela]").forEach(function (botao) {
  botao.addEventListener("click", function () { mostrarTela(botao.getAttribute("data-tela")); });
});
document.querySelectorAll("[data-voltar]").forEach(function (botao) {
  botao.addEventListener("click", function () { mostrarTela(botao.getAttribute("data-voltar")); });
});

function formatarNumero(numero) {
  if (numero >= 1000000) {
    const valor = numero / 1000000;
    return (Number.isInteger(valor) ? valor : valor.toFixed(1).replace(/\.0$/, "")) + "m";
  }
  if (numero >= 10000) {
    const valor = numero / 1000;
    return (Number.isInteger(valor) ? valor : valor.toFixed(1).replace(/\.0$/, "")) + "k";
  }
  return String(numero);
}

function atualizarMoedasMenu() {
  document.getElementById("moedas-menu").textContent = formatarNumero(moedasGlobais);
  document.getElementById("diamantes-menu").textContent = formatarNumero(diamantesGlobais);
}

function iniciarLoading() {
  const barra = document.getElementById("barra-loading");
  const texto = document.getElementById("loading-percent");
  const botaoEntrar = document.getElementById("btn-entrar");
  let percent = 0;
  const intervalo = setInterval(function () {
    percent = percent + Math.random() * 12;
    if (percent >= 100) {
      percent = 100;
      clearInterval(intervalo);
      botaoEntrar.classList.remove("escondido");
    }
    barra.style.width = percent + "%";
    texto.textContent = Math.floor(percent) + "%";
  }, 180);
}

document.getElementById("btn-entrar").addEventListener("click", function () {
  atualizarMoedasMenu();
  mostrarTela("tela-menu");
});

iniciarLoading();

function bossEstaDesbloqueado(boss) {
  if (boss.id === 1) return true;
  return bossesDerrotados.includes(boss.id - 1);
}

function renderizarGridBosses() {
  const grid = document.getElementById("grid-bosses");
  grid.innerHTML = "";

  bosses.forEach(function (boss) {
    const desbloqueado = bossEstaDesbloqueado(boss);
    const cor = coresTier[boss.tier];
    const brilho = 6 + boss.tier * 3;

    const card = document.createElement("div");
    card.className = "card-boss" + (desbloqueado ? "" : " bloqueado");
    card.style.setProperty("--cor-tier-borda", cor);
    card.style.setProperty("--cor-tier-sombra", hexParaRgba(cor, 0.55));
    card.style.setProperty("--brilho-tier", brilho + "px");

    card.innerHTML =
      '<div class="numero-boss">Boss ' + boss.id + "</div>" +
      (desbloqueado ? "" : '<div class="cadeado">🔒</div>') +
      '<img class="img-boss" src="' + boss.imagem + '" alt="' + boss.nome + '">' +
      '<div class="nome-boss">' + boss.nome + "</div>" +
      '<div class="dificuldade-boss" style="color:' + cor + '">' + boss.dificuldade + "</div>";

    card.addEventListener("click", function () {
      if (!desbloqueado) { alert("Derrote o boss " + (boss.id - 1) + " primeiro."); return; }
      selecionarBoss(boss);
    });
    grid.appendChild(card);
  });
}

document.getElementById("btn-play").addEventListener("click", function () {
  renderizarGridBosses();
  mostrarTela("tela-bosses");
});

function selecionarBoss(boss) {
  bossSelecionadoId = boss.id;
  document.getElementById("nome-boss-hud").textContent = boss.nome;
  iniciarIntroDeLuta(boss);
}

function iniciarIntroDeLuta(boss) {
  const overlay = document.getElementById("tela-fight-intro");
  const numeroEl = document.getElementById("fight-intro-numero");
  const sequencia = [boss.nome, "3", "2", "1", "FIGHT!"];
  let i = 0;

  overlay.classList.remove("escondido");
  mostrarTela("tela-jogo");

  function proximoPasso() {
    if (i >= sequencia.length) {
      overlay.classList.add("escondido");
      if (typeof iniciarBatalha === "function") iniciarBatalha(boss, jogador, inventario, coresTier[boss.tier]);
      return;
    }
    numeroEl.textContent = sequencia[i];
    i = i + 1;
    setTimeout(proximoPasso, 700);
  }
  proximoPasso();
}

function limparTemaConsumido() {
  if (inventario.equipados.tema) {
    inventario.equipados.tema = null;
    salvarProgresso();
  }
}

function aoVencerBatalha(bossId, moedasGanhas, diamantesGanhos) {
  if (!bossesDerrotados.includes(bossId)) bossesDerrotados.push(bossId);
  moedasGlobais += moedasGanhas;
  diamantesGlobais += diamantesGanhos || 0;
  limparTemaConsumido();
  atualizarMoedasMenu();
  salvarProgresso();
  alert("Vitória! +" + moedasGanhas + " moedas" + (diamantesGanhos ? " e +" + diamantesGanhos + " diamantes" : ""));
  mostrarTela("tela-menu");
}

function aoPerderBatalha() {
  limparTemaConsumido();
  alert("Game Over");
  mostrarTela("tela-menu");
}

document.getElementById("btn-pause").addEventListener("click", function () {
  document.getElementById("modal-pause").classList.remove("escondido");
  if (typeof pausarBatalha === "function") pausarBatalha();
});
document.getElementById("btn-continuar").addEventListener("click", function () {
  document.getElementById("modal-pause").classList.add("escondido");
  if (typeof continuarBatalha === "function") continuarBatalha();
});
document.getElementById("btn-musica").addEventListener("click", function (evento) {
  musicaLigada = !musicaLigada;
  evento.target.textContent = musicaLigada ? "🔊 Música: Ligada" : "🔇 Música: Desligada";
});
document.getElementById("btn-sair").addEventListener("click", function () {
  document.getElementById("modal-pause").classList.add("escondido");
  document.getElementById("modal-confirmar-saida").classList.remove("escondido");
});
document.getElementById("btn-cancelar-sair").addEventListener("click", function () {
  document.getElementById("modal-confirmar-saida").classList.add("escondido");
  document.getElementById("modal-pause").classList.remove("escondido");
});
document.getElementById("btn-confirmar-sair").addEventListener("click", function () {
  document.getElementById("modal-confirmar-saida").classList.add("escondido");
  if (typeof pararBatalha === "function") pararBatalha();
  limparTemaConsumido();
  atualizarMoedasMenu();
  mostrarTela("tela-menu");
});

const escalaRaridadePorTier = ["comum", "comum", "incomum", "raro", "raro", "epico", "lendario", "lendario", "mitico", "secreto"];

const chavesEquipadas = {
  skill1: "skill1", skill2: "skill2", ultimate: "ultimate",
  imagens: "imagem", temas: "tema", melhorias: null,
};

const itensLoja = {
  skill1: [
    { id: "BalaMagicaSkill1", nome: "Bala Comum", raridade: "comum", preco: 0, moeda: "moedas", imagem: "BalaMagicaSkill1.gif" },
    { id: "artOnlineSkill1", nome: "Estrela Épico", raridade: "epico", preco: 150, moeda: "moedas", imagem: "artOnlineSkill1.gif" },
    { id: "BlackholeSkill1", nome: "BlackHole Mítico", raridade: "mitico", preco: 600, precoDiamantes: 9, moeda: "moedas", imagem: "BlackholeSkill1.gif" },
    { id: "DragaoSkill1", nome: "Dragon Secret", raridade: "secreto", preco: 3000, precoDiamantes: 20, moeda: "moedas", imagem: "DragaoSkill1.gif" },
  ],
  skill2: [
    { id: "BasicoSkill2", nome: "Brilho - Comum", raridade: "comum", preco: 5000, precoDiamantes: 50, moeda: "moedas", imagem: "BasicoSkill2.gif" },
    { id: "FogoSkill2", nome: "Fogo - Incomum", raridade: "incomum", preco: 4000, precoDiamantes: 50, moeda: "moedas", imagem: "FogoSkill2.gif" },
    { id: "BombaSkill2", nome: "Bomba - Raro", raridade: "raro", preco: 8000, precoDiamantes: 100, moeda: "moedas", imagem: "BombaSkill2.gif" },
    { id: "MeteoroSkill2", nome: "Meteoro - Épico", raridade: "epico", preco: 25000, precoDiamantes: 250, moeda: "moedas", imagem: "MeteoroSkill2.gif" },
    { id: "SolSkill2", nome: "SolCruel - Lendário", raridade: "lendario", preco: 70000, precoDiamantes: 500, moeda: "moedas", imagem: "SolSkill2.gif" },
    { id: "ExplosionSkill2", nome: "Explosion - Mítico", raridade: "mitico", preco: 180000, precoDiamantes: 1500, moeda: "moedas", imagem: "ExplosionSkill2.gif" },
    { id: "DragaoFinalSkill2", nome: "DragonTrueForm - Secret", raridade: "secreto", preco: 900000, precoDiamantes: 9000, moeda: "moedas", imagem: "DragaoFinalSkill2.gif" },
  ],
  ultimate: [
    { dano: 100, precoMoedas: 200, precoDiamantes: 3 },
    { dano: 250, precoMoedas: 750, precoDiamantes: 10 },
    { dano: 400, precoMoedas: 1500, precoDiamantes: 20 },
    { dano: 600, precoMoedas: 4000, precoDiamantes: 40 },
    { dano: 800, precoMoedas: 12000, precoDiamantes: 100 },
    { dano: 1200, precoMoedas: 30000, precoDiamantes: 250 },
    { dano: 2000, precoMoedas: 75000, precoDiamantes: 600 },
    { dano: 6000, precoMoedas: 180000, precoDiamantes: 1200 },
    { dano: 10000, precoMoedas: 700000, precoDiamantes: 40000 },
    { dano: 25000, precoMoedas: 10000000, precoDiamantes: 100000 },
  ].map(function (nivel, indice) {
    const boss = bosses[indice];
    return {
      id: "Ultimate" + boss.id, raridade: escalaRaridadePorTier[boss.id - 1],
      dano: nivel.dano, precoMoedas: nivel.precoMoedas, precoDiamantes: nivel.precoDiamantes,
      imagem: boss.imagem, video: "Boss" + boss.id + ".mp4",
    };
  }),
  temas: bosses.map(function (boss) {
    return {
      id: "Boss" + boss.id + "img", raridade: escalaRaridadePorTier[boss.tier - 1],
      preco: 250 * boss.tier, moeda: "moedas", imagem: "Boss" + boss.id + "img.png",
      requerBossDerrotado: boss.id,
    };
  }),
  imagens: [
    { id: "img1", raridade: "comum", preco: 500, moeda: "moedas", imagem: "img1.png" },
    { id: "img2", raridade: "raro", preco: 700, moeda: "moedas", imagem: "img2.png" },
    { id: "img3", raridade: "epico", preco: 900, moeda: "moedas", imagem: "img3.png" },
    { id: "img4", raridade: "lendario", preco: 1200, moeda: "moedas", imagem: "img4.png" },
    { id: "img5", raridade: "secreto", preco: 1600, moeda: "moedas", imagem: "img5.png" },
  ],
  melhorias: [
    { id: "Melhoria1", nome: "Melhoria +500 Vida", raridade: "comum", preco: 300, moeda: "moedas", bonusVida: 500, requerBossDerrotado: 1, imagem: "Arlan.png" },
    { id: "Melhoria2", nome: "Melhoria +1000 Vida", raridade: "incomum", preco: 1000, moeda: "moedas", bonusVida: 1000, requerBossDerrotado: 2, imagem: "Marcos.png" },
    { id: "Melhoria3", nome: "Melhoria +1500 Vida", raridade: "raro", preco: 2500, moeda: "moedas", bonusVida: 1500, requerBossDerrotado: 3, imagem: "Miguel.png" },
    { id: "Melhoria4", nome: "Melhoria +2000 Vida", raridade: "raro", preco: 5000, moeda: "moedas", bonusVida: 2000, requerBossDerrotado: 4, imagem: "Carlos.png" },
    { id: "Melhoria5", nome: "Melhoria +2500 Vida", raridade: "epico", preco: 12500, moeda: "moedas", bonusVida: 2500, requerBossDerrotado: 5, imagem: "LucasPintoNunes.png" },
    { id: "Melhoria6", nome: "Melhoria +3000 Vida", raridade: "lendario", preco: 50000, moeda: "moedas", bonusVida: 3000, requerBossDerrotado: 6, imagem: "Davizao.png" },
    { id: "Melhoria7", nome: "Melhoria +3500 Vida", raridade: "lendario", preco: 100000, moeda: "moedas", bonusVida: 3500, requerBossDerrotado: 7, imagem: "Arthur.png" },
    { id: "Melhoria8", nome: "Melhoria +4000 Vida", raridade: "mitico", preco: 210000, moeda: "moedas", bonusVida: 4000, requerBossDerrotado: 8, imagem: "Vinicius.png" },
    { id: "Melhoria9", nome: "Melhoria +10000 Vida", raridade: "secreto", preco: 1000000, moeda: "moedas", bonusVida: 10000, requerBossDerrotado: 9, imagem: "GuilermeChucro.png" },
  ],
};

const inventario = {
  possuidos: ["BalaMagicaSkill1"],
  equipados: { skill1: "BalaMagicaSkill1", skill2: null, ultimate: null, imagem: null, tema: null },
};

carregarProgresso();

function calcularBonusVidaPermanente() {
  return itensLoja.melhorias.reduce(function (total, melhoria) {
    return inventario.possuidos.includes(melhoria.id) ? total + melhoria.bonusVida : total;
  }, 0);
}

function itemEstaBloqueado(item) {
  if (!item.requerBossDerrotado) return false;
  return !bossesDerrotados.includes(item.requerBossDerrotado);
}

function renderizarLoja(categoria, idContainer) {
  const container = document.getElementById(idContainer || "loja-conteudo");
  container.innerHTML = '<div class="grid-loja"></div>';
  const grid = container.querySelector(".grid-loja");
  const chaveEquipado = chavesEquipadas[categoria];

  itensLoja[categoria].forEach(function (item) {
    const possuido = inventario.possuidos.includes(item.id);
    const equipado = chaveEquipado ? inventario.equipados[chaveEquipado] === item.id : false;
    const bloqueado = itemEstaBloqueado(item);

    const custoMoedas = item.precoMoedas !== undefined ? item.precoMoedas : item.preco;
    const custoDiamantes = item.precoDiamantes || 0;

    const card = document.createElement("div");
    card.className = "card-item" + (equipado ? " equipado" : "") + (item.raridade ? " raridade-" + item.raridade : "");

    const previewHtml = item.video
      ? '<video class="img-item" src="' + item.video + '" poster="' + item.imagem + '" muted loop autoplay playsinline></video>'
      : '<img class="img-item" src="' + item.imagem + '" alt="' + item.id + '">';

    let textoBotao, classeBotao = "btn-comprar";
    if (bloqueado) { textoBotao = "🔒 Derrote o boss " + item.requerBossDerrotado; classeBotao += " bloqueado"; }
    else if (categoria === "melhorias" && possuido) { textoBotao = "✅ Comprado"; classeBotao += " comprado"; }
    else if (equipado) { textoBotao = "✅ Equipado"; classeBotao += " comprado"; }
    else if (possuido) { textoBotao = "Equipar"; classeBotao += " comprado"; }
    else if (custoMoedas === 0 && custoDiamantes === 0) { textoBotao = "Grátis"; }
    else { textoBotao = (custoMoedas ? "🪙" + formatarNumero(custoMoedas) + " " : "") + (custoDiamantes ? "💎" + formatarNumero(custoDiamantes) : ""); }

    const rotuloCategoria = categoria === "skill1" ? "Skill 1" : categoria === "skill2" ? "Skill 2" : categoria === "melhorias" ? "Melhoria" : "";
    const nomeExibido = item.nome || item.id;

    card.innerHTML =
      previewHtml +
      (rotuloCategoria ? '<div class="rotulo-categoria">' + rotuloCategoria + "</div>" : "") +
      '<div class="nome-item nome-raridade">' + nomeExibido + "</div>" +
      (item.raridade ? '<div class="selo-raridade">' + item.raridade + "</div>" : "") +
      '<button class="' + classeBotao + '">' + textoBotao + "</button>";

    card.querySelector("button").addEventListener("click", function () {
      if (bloqueado) return;
      if (categoria === "melhorias") { if (!possuido) comprarItem(categoria, item, idContainer); return; }
      if (equipado) return;
      if (possuido) { equiparItem(categoria, item.id); renderizarLoja(categoria, idContainer); return; }
      comprarItem(categoria, item, idContainer);
    });

    grid.appendChild(card);
  });
}

function comprarItem(categoria, item, idContainer) {
  const custoMoedas = item.precoMoedas !== undefined ? item.precoMoedas : item.preco;
  const custoDiamantes = item.precoDiamantes || 0;

  if (moedasGlobais < custoMoedas || diamantesGlobais < custoDiamantes) {
    alert("Você não tem moedas/diamantes suficientes.");
    return;
  }
  moedasGlobais -= custoMoedas;
  diamantesGlobais -= custoDiamantes;
  inventario.possuidos.push(item.id);
  if (categoria !== "melhorias") equiparItem(categoria, item.id); else salvarProgresso();
  atualizarMoedasMenu();
  renderizarLoja(categoria, idContainer);
}

function equiparItem(categoria, id) {
  const chave = chavesEquipadas[categoria];
  if (!chave) return;
  inventario.equipados[chave] = id;
  salvarProgresso();
}

document.querySelectorAll(".aba-loja").forEach(function (aba) {
  aba.addEventListener("click", function () {
    document.querySelectorAll(".aba-loja").forEach(function (a) { a.classList.remove("ativa"); });
    aba.classList.add("ativa");
    renderizarLoja(aba.getAttribute("data-aba"));
  });
});

document.querySelector('[data-tela="tela-loja"]').addEventListener("click", function () { renderizarLoja("skill1"); });
document.querySelector('[data-tela="tela-temas"]').addEventListener("click", function () { renderizarLoja("temas", "temas-conteudo"); });

function renderizarInventario() {
  const container = document.getElementById("inventario-conteudo");
  const slots = [
    { chave: "skill1", rotulo: "Skill 1" },
    { chave: "skill2", rotulo: "Skill 2" },
    { chave: "ultimate", rotulo: "Ultimate" },
    { chave: "imagem", rotulo: "Personagem" },
    { chave: "tema", rotulo: "Cenário (vale só pra próxima luta)" },
  ];

  container.innerHTML = '<div class="grid-loja"></div>';
  const grid = container.querySelector(".grid-loja");

  slots.forEach(function (slot) {
    const idEquipado = inventario.equipados[slot.chave];
    const card = document.createElement("div");
    card.className = "card-item";
    card.innerHTML =
      '<div class="nome-item">' + slot.rotulo + "</div>" +
      '<div class="preco-item">' + (idEquipado ? idEquipado : "— vazio —") + "</div>";
    grid.appendChild(card);
  });

  const bonusVida = calcularBonusVidaPermanente();
  const cardBonus = document.createElement("div");
  cardBonus.className = "card-item";
  cardBonus.innerHTML =
    '<div class="nome-item">Vida máx. atual</div>' +
    '<div class="preco-item">' + formatarNumero(500 + bonusVida) + " (base 500 + " + formatarNumero(bonusVida) + " de melhorias)</div>";
  grid.appendChild(cardBonus);
}
document.querySelector('[data-tela="tela-inventario"]').addEventListener("click", renderizarInventario);

function renderizarInfoBosses() {
  const container = document.getElementById("boss-info-conteudo");
  if (!bossesDerrotados.includes(2)) {
    container.innerHTML = '<p class="aviso-fase">🔒 Derrote o boss 2 (Marcos) pra desbloquear as informações dos bosses.</p>';
    return;
  }
  container.innerHTML = '<div class="grid-loja"></div>';
  const grid = container.querySelector(".grid-loja");
  bosses.forEach(function (boss) {
    const stats = statsPorTier[boss.tier];
    const cor = coresTier[boss.tier];
    const card = document.createElement("div");
    card.className = "card-item";
    card.style.setProperty("--cor-tier-borda", cor);
    card.innerHTML =
      '<img class="img-item" src="' + boss.imagem + '" alt="' + boss.nome + '">' +
      '<div class="nome-item">' + boss.nome + "</div>" +
      '<div class="preco-item" style="color:' + cor + '">' + boss.dificuldade + "</div>" +
      '<div class="preco-item">Vida: ' + formatarNumero(stats.vida) + "</div>";
    grid.appendChild(card);
  });
}
document.querySelector('[data-tela="tela-boss-info"]').addEventListener("click", renderizarInfoBosses);