const skill1Defs = {
  BalaMagicaSkill1: { largura: 70, altura: 70, velocidade: 6, dano: 25, gif: "BalaMagicaSkill1.gif" },
  artOnlineSkill1: { largura: 92, altura: 92, velocidade: 6.5, dano: 45, gif: "artOnlineSkill1.gif" },
  BlackholeSkill1: { largura: 130, altura: 130, velocidade: 7, dano: 90, gif: "BlackholeSkill1.gif" },
  DragaoSkill1: { largura: 210, altura: 110, velocidade: 7, dano: 280, gif: "DragaoSkill1.gif" },
};

const skill2Defs = {
  BasicoSkill2: { tipo: "esfera", largura: 110, altura: 110, velocidade: 6, dano: 180, gif: "BasicoSkill2.gif" },
  FogoSkill2: { tipo: "esfera", largura: 125, altura: 125, velocidade: 6.4, dano: 360, gif: "FogoSkill2.gif" },
  BombaSkill2: { tipo: "esfera", largura: 140, altura: 140, velocidade: 6.2, dano: 580, gif: "BombaSkill2.gif" },
  MeteoroSkill2: { tipo: "esfera", largura: 190, altura: 190, velocidade: 7.5, dano: 700, gif: "MeteoroSkill2.gif" },
  SolSkill2: { tipo: "esfera", largura: 205, altura: 205, velocidade: 7.5, dano: 900, gif: "SolSkill2.gif" },
  ExplosionSkill2: { tipo: "esfera", largura: 175, altura: 175, velocidade: 7.8, dano: 1900, gif: "ExplosionSkill2.gif" },
  DragaoFinalSkill2: { tipo: "feixe", comprimento: 340, largura: 140, dano: 350, gif: "DragaoFinalSkill2.gif" },
};

const COOLDOWN_SKILL1_PLAYER = 800;
const COOLDOWN_SKILL1_INIMIGO = 1500;

const cooldownSkill2Player = {
  BasicoSkill2: 4000, FogoSkill2: 4000, BombaSkill2: 4000,
  MeteoroSkill2: 5000, SolSkill2: 6000, ExplosionSkill2: 6000, DragaoFinalSkill2: 6500,
};
const cooldownSkill2Inimigo = {
  BasicoSkill2: 6000, FogoSkill2: 6000, BombaSkill2: 6000,
  MeteoroSkill2: 7500, SolSkill2: 8500, ExplosionSkill2: 9000, DragaoFinalSkill2: 10000,
};

const statsPorTier = {
  1: { vida: 800, recompensaMoedas: 50, recompensaDiamantes: 1, chanceDiamante: 0.5, danoUltimateFixo: 150,
    overridesDano: { BalaMagicaSkill1: { dano: 20, velocidade: 5.5 } } },
  2: { vida: 1600, recompensaMoedas: 200, recompensaDiamantes: 3, chanceDiamante: 0.5, danoUltimateFixo: 250,
    overridesDano: { artOnlineSkill1: { dano: 50, velocidade: 5.8 } } },
  3: { vida: 3800, recompensaMoedas: 300, recompensaDiamantes: 5, chanceDiamante: 0.5, danoUltimateFixo: 500,
    overridesDano: { BlackholeSkill1: { dano: 100, velocidade: 6.2 } } },
  4: { vida: 7000, recompensaMoedas: 900, recompensaDiamantes: 10, chanceDiamante: 0.5, danoUltimateFixo: 900,
    overridesDano: { DragaoSkill1: { dano: 200, velocidade: 6 }, BasicoSkill2: { dano: 250, velocidade: 5 } } },
  5: { vida: 12000, recompensaMoedas: 2000, recompensaDiamantes: 25, chanceDiamante: 0.5, danoUltimateFixo: 1300,
    overridesDano: { DragaoSkill1: { dano: 270, velocidade: 6.2 }, FogoSkill2: { dano: 320, velocidade: 6.2 } } },
  6: { vida: 17000, recompensaMoedas: 4500, recompensaDiamantes: 50, chanceDiamante: 0.5, danoUltimateFixo: 2000,
    overridesDano: { BlackholeSkill1: { dano: 400, velocidade: 6.5 }, BombaSkill2: { dano: 380, velocidade: 6.2 } } },
  7: { vida: 23000, recompensaMoedas: 10000, recompensaDiamantes: 125, chanceDiamante: 0.7, danoUltimateFixo: 3200,
    overridesDano: { DragaoSkill1: { dano: 300, velocidade: 6.4 }, BlackholeSkill1: { dano: 370, velocidade: 6.4 }, MeteoroSkill2: { dano: 400, velocidade: 7 } } },
  8: { vida: 30000, recompensaMoedas: 30000, recompensaDiamantes: 340, chanceDiamante: 0.7, danoUltimateFixo: 4000,
    overridesDano: { DragaoSkill1: { dano: 350, velocidade: 6.4 }, artOnlineSkill1: { dano: 280, velocidade: 6.4 }, MeteoroSkill2: { dano: 390, velocidade: 7 } } },
  9: { vida: 50000, recompensaMoedas: 100000, recompensaDiamantes: 1000, chanceDiamante: 0.7, danoUltimateFixo: 5000,
    overridesDano: { DragaoSkill1: { dano: 400, velocidade: 6.6 }, BlackholeSkill1: { dano: 420, velocidade: 6.6 }, ExplosionSkill2: { dano: 600, velocidade: 7.2 }, SolSkill2: { dano: 700, velocidade: 7.2 } } },
  10: { vida: 120000, recompensaMoedas: 1000000, recompensaDiamantes: 10000, chanceDiamante: 1, danoUltimateFixo: 8000,
    overridesDano: { DragaoSkill1: { dano: 500, velocidade: 6.8 }, BlackholeSkill1: { dano: 500, velocidade: 6.8 }, DragaoFinalSkill2: { dano: 800, velocidade: 6.8 }, ExplosionSkill2: { dano: 650, velocidade: 7.2 } } },
};

function statsDaSkillParaBoss(idSkill, def) {
  const tierStats = statsPorTier[bossAtual.tier];
  const override = tierStats.overridesDano && tierStats.overridesDano[idSkill];
  return {
    dano: override ? override.dano : def.dano,
    velocidade: override ? override.velocidade : def.velocidade,
  };
}

const bossKits = {
  1: { skill1: ["BalaMagicaSkill1"], skill2: [] },
  2: { skill1: ["artOnlineSkill1"], skill2: [] },
  3: { skill1: ["BlackholeSkill1"], skill2: [] },
  4: { skill1: ["DragaoSkill1"], skill2: ["BasicoSkill2"] },
  5: { skill1: ["DragaoSkill1"], skill2: ["FogoSkill2"] },
  6: { skill1: ["BlackholeSkill1"], skill2: ["BombaSkill2"] },
  7: { skill1: ["DragaoSkill1", "BlackholeSkill1"], skill2: ["MeteoroSkill2"] },
  8: { skill1: ["DragaoSkill1", "artOnlineSkill1"], skill2: ["MeteoroSkill2"] },
  9: { skill1: ["DragaoSkill1", "BlackholeSkill1"], skill2: ["ExplosionSkill2", "SolSkill2"] },
  10: { skill1: ["DragaoSkill1", "BlackholeSkill1"], skill2: ["DragaoFinalSkill2", "ExplosionSkill2"] },
};

function escolherAleatorio(lista) { return lista[Math.floor(Math.random() * lista.length)]; }
function clamp(valor, minimo, maximo) { return Math.max(minimo, Math.min(maximo, valor)); }

function ajustarEscalaJogo() {
  const viewport = document.getElementById("viewport-jogo");
  const area = document.getElementById("area-jogo");
  if (!viewport || !area) return;
  const escala = viewport.clientWidth / 800;
  area.style.transform = "scale(" + escala + ")";
  viewport.style.height = (600 * escala) + "px";
}
window.addEventListener("resize", ajustarEscalaJogo);
window.addEventListener("load", ajustarEscalaJogo);

const elementosSprites = {};

function posicionarSprite(id, src, xTela, yTela, largura, altura, classeExtra) {
  let el = elementosSprites[id];
  if (!el) {
    el = document.createElement("img");
    el.className = "sprite-jogo" + (classeExtra ? " " + classeExtra : "");
    document.getElementById("camada-sprites").appendChild(el);
    elementosSprites[id] = el;
  }
  if (el.dataset.src !== src) { el.src = src; el.dataset.src = src; }
  el.style.width = largura + "px";
  el.style.height = altura + "px";
  el.style.transform = "translate(" + (xTela - largura / 2) + "px," + (yTela - altura / 2) + "px)";
  return el;
}

function posicionarSpriteFeixe(id, src, origemXTela, origemYTela, comprimentoMax, largura, anguloRad, progresso) {
  let el = elementosSprites[id];
  if (!el) {
    el = document.createElement("img");
    el.className = "sprite-jogo sprite-feixe";
    document.getElementById("camada-sprites").appendChild(el);
    elementosSprites[id] = el;
  }
  if (el.dataset.src !== src) { el.src = src; el.dataset.src = src; }
  el.style.width = comprimentoMax + "px";
  el.style.height = largura + "px";
  const graus = (anguloRad * 180) / Math.PI;
  el.style.transform =
    "translate(" + origemXTela + "px," + (origemYTela - largura / 2) + "px) rotate(" + graus + "deg) scaleX(" + progresso + ")";
}

function limparSpritesNaoUsados(idsUsados) {
  Object.keys(elementosSprites).forEach(function (id) {
    if (!idsUsados.has(id)) { elementosSprites[id].remove(); delete elementosSprites[id]; }
  });
}

function piscarDano(idSprite) {
  const el = elementosSprites[idSprite];
  if (!el) return;
  el.classList.remove("piscar-dano");
  void el.offsetWidth;
  el.classList.add("piscar-dano");
}

function tremerTela() {
  const area = document.getElementById("area-jogo");
  area.classList.remove("tremendo");
  void area.offsetWidth;
  area.classList.add("tremendo");
}

function criarNumeroDano(valor, xMundo, yMundo, cor) {
  const camada = document.getElementById("camada-sprites");
  const el = document.createElement("div");
  el.className = "numero-dano";
  el.style.color = cor || "#fff";
  el.style.transform = "translate(" + (xMundo - camX) + "px," + (yMundo - camY) + "px)";
  el.textContent = "-" + Math.round(valor);
  camada.appendChild(el);
  setTimeout(function () { el.remove(); }, 820);
}

let proximoIdPoder = 1;

const canvasBatalha = document.getElementById("jogo");
const ctxBatalha = canvasBatalha.getContext("2d");

let camX = 0, camY = 0;
let limitesMundo = null;

const TAMANHO_PERSONAGEM = 205;
const TAMANHO_BOSS = 200;

const MARGEM_MUNDO = 140;

function calcularLimitesMundo() {
  if (!fundoImg || !fundoImg.naturalWidth) { limitesMundo = null; return; }
  const iw = fundoImg.naturalWidth, ih = fundoImg.naturalHeight;
  limitesMundo = {
    minX: MARGEM_MUNDO, minY: MARGEM_MUNDO,
    maxX: Math.max(MARGEM_MUNDO, iw - MARGEM_MUNDO),
    maxY: Math.max(MARGEM_MUNDO, ih - MARGEM_MUNDO),
  };
}

let movendoDireita = false, movendoEsquerda = false, movendoCima = false, movendoBaixo = false;

function configurarBotaoMovimento(botao, ligar) {
  botao.addEventListener("pointerdown", function (evento) {
    evento.target.setPointerCapture(evento.pointerId);
    ligar(true);
  });
  botao.addEventListener("pointerup", function () { ligar(false); });
  botao.addEventListener("pointercancel", function () { ligar(false); });
  botao.addEventListener("contextmenu", function (evento) { evento.preventDefault(); });
}

configurarBotaoMovimento(document.getElementById("Direita"), function (v) { movendoDireita = v; });
configurarBotaoMovimento(document.getElementById("Esquerda"), function (v) { movendoEsquerda = v; });
configurarBotaoMovimento(document.getElementById("Cima"), function (v) { movendoCima = v; });
configurarBotaoMovimento(document.getElementById("Baixo"), function (v) { movendoBaixo = v; });

window.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowRight") movendoDireita = true;
  if (evento.key === "ArrowLeft") movendoEsquerda = true;
  if (evento.key === "ArrowUp") movendoCima = true;
  if (evento.key === "ArrowDown") movendoBaixo = true;
});
window.addEventListener("keyup", function (evento) {
  if (evento.key === "ArrowRight") movendoDireita = false;
  if (evento.key === "ArrowLeft") movendoEsquerda = false;
  if (evento.key === "ArrowUp") movendoCima = false;
  if (evento.key === "ArrowDown") movendoBaixo = false;
});

let fundoImg;
let bossAtual, jogadorAtual, inventarioAtual, corAuraAtual;

let x, y, inimigoX, inimigoY;
let velX = 0, velY = 0;
const velMax = 4.6;
const aceleracao = 0.32;

let inimigoVelX = 0, inimigoVelY = 0;
let anguloOrbitaInimigo = Math.random() * Math.PI * 2;

let vidaPlay, vidaMax, vidaEnemy, vidaEnemyMax;
let poderes = [];
let poderesInimigo = [];
let feixesAtivos = [];

const VIDA_UTIL_PODER_MS = 3200;
const distanciaIdeal = 190;
const tolerancia = 25;

let ultimoSkill1Player = 0, ultimoSkill2Player = 0;
let ultimoSkill1Inimigo = 0, ultimoSkill2Inimigo = 0;

let cargaUltimatePlayer = 0;
let cargaUltimateInimigo = 0;
const cargaUltimateMax = 100;

const MAX_USOS_ULTIMATE_PLAYER = 2;
const MAX_USOS_ULTIMATE_INIMIGO = 1;
let usosUltimatePlayerRestantes = MAX_USOS_ULTIMATE_PLAYER;
let usosUltimateInimigoRestantes = MAX_USOS_ULTIMATE_INIMIGO;

const GOLPES_ULTIMATE_PLAYER = 9;
const GOLPES_ULTIMATE_INIMIGO = 9;
let golpesCausadosPlayer = 0, golpesRecebidosPlayer = 0;
let golpesCausadosInimigo = 0, golpesRecebidosInimigo = 0;

let jogoAtivo = false;
let pausado = false;
let ultimoFrameEm = 0;

function iniciarBatalha(boss, jogador, inventario, corAura) {
  bossAtual = boss;
  jogadorAtual = jogador;
  inventarioAtual = inventario;
  corAuraAtual = corAura;

  const stats = statsPorTier[boss.tier];
  const temaEquipado = inventario.equipados && inventario.equipados.tema;

  fundoImg = new Image();
  fundoImg.onload = calcularLimitesMundo;
  fundoImg.src = temaEquipado ? temaEquipado + ".png" : "Boss" + boss.id + "img.png";

  document.getElementById("nome-player-hud").textContent = jogador.nome;
  document.getElementById("nome-boss-hud").textContent = boss.nome;
  document.getElementById("nome-boss-hud").style.color = corAura;

  x = 500; y = 500;
  inimigoX = 900; inimigoY = 350;
  velX = 0; velY = 0;
  inimigoVelX = 0; inimigoVelY = 0;
  anguloOrbitaInimigo = Math.random() * Math.PI * 2;
  camX = x - 360; camY = y - 260;
  limitesMundo = null;

  const bonusVida = (typeof calcularBonusVidaPermanente === "function") ? calcularBonusVidaPermanente() : 0;
  vidaMax = 500 + bonusVida; vidaPlay = vidaMax;
  vidaEnemyMax = stats.vida; vidaEnemy = vidaEnemyMax;

  poderes = []; poderesInimigo = []; feixesAtivos = [];
  cargaUltimatePlayer = 0; cargaUltimateInimigo = 0;
  golpesCausadosPlayer = 0; golpesRecebidosPlayer = 0;
  golpesCausadosInimigo = 0; golpesRecebidosInimigo = 0;
  usosUltimatePlayerRestantes = MAX_USOS_ULTIMATE_PLAYER;
  usosUltimateInimigoRestantes = MAX_USOS_ULTIMATE_INIMIGO;

  const agora = Date.now();
  ultimoSkill1Player = agora; ultimoSkill2Player = agora;
  ultimoSkill1Inimigo = agora; ultimoSkill2Inimigo = agora;
  ultimoFrameEm = agora;

  atualizarBarrasBatalha();
  jogoAtivo = true;
  pausado = false;
  ajustarEscalaJogo();
  requestAnimationFrame(atualizarBatalha);
}

function pausarBatalha() { pausado = true; }
function continuarBatalha() { if (jogoAtivo) { pausado = false; ultimoFrameEm = Date.now(); requestAnimationFrame(atualizarBatalha); } }
function pararBatalha() { jogoAtivo = false; }

function atualizarBarrasBatalha() {
  document.getElementById("barraPlay").style.width = Math.max(0, (vidaPlay / vidaMax) * 100) + "%";
  document.getElementById("barraEnemy").style.width = Math.max(0, (vidaEnemy / vidaEnemyMax) * 100) + "%";
  document.getElementById("barra-ultimate").style.width = Math.min(100, (cargaUltimatePlayer / cargaUltimateMax) * 100) + "%";
  const botaoUlt = document.getElementById("ultimate");
  if (botaoUlt) botaoUlt.classList.toggle("ultimate-esgotada", usosUltimatePlayerRestantes <= 0);
}

function desenharBatalha() {
  ctxBatalha.clearRect(0, 0, canvasBatalha.width, canvasBatalha.height);

  if (fundoImg && fundoImg.complete && fundoImg.naturalWidth > 0) {
    ctxBatalha.drawImage(fundoImg, -camX, -camY);
  } else {
    ctxBatalha.fillStyle = "#05050a";
    ctxBatalha.fillRect(0, 0, canvasBatalha.width, canvasBatalha.height);
  }

  const idsUsados = new Set(["personagem", "inimigo"]);
  const spritePersonagem = (inventarioAtual.equipados && inventarioAtual.equipados.imagem)
    ? inventarioAtual.equipados.imagem + ".png"
    : jogadorAtual.imagem;
  posicionarSprite("personagem", spritePersonagem, x - camX, y - camY, TAMANHO_PERSONAGEM, TAMANHO_PERSONAGEM, "sprite-personagem");
  posicionarSprite("inimigo", bossAtual.imagem, inimigoX - camX, inimigoY - camY, TAMANHO_BOSS, TAMANHO_BOSS, "sprite-boss");

  poderes.forEach(function (p) {
    const def = skill1Defs[p.tipoSkill] || skill2Defs[p.tipoSkill.replace("__skill2_", "")];
    posicionarSprite(p.spriteId, def.gif, p.x - camX, p.y - camY, def.largura, def.altura, "sprite-poder");
    idsUsados.add(p.spriteId);
  });
  poderesInimigo.forEach(function (p) {
    const def = skill1Defs[p.tipoSkill] || skill2Defs[p.tipoSkill.replace("__skill2_", "")];
    posicionarSprite(p.spriteId, def.gif, p.x - camX, p.y - camY, def.largura, def.altura, "sprite-poder");
    idsUsados.add(p.spriteId);
  });

  feixesAtivos.forEach(function (f) {
    const def = skill2Defs[f.idSkill];
    const progresso = Math.max(0.02, f.comprimentoAtual / f.comprimentoMax);
    posicionarSpriteFeixe(f.spriteId, def.gif, f.origemX - camX, f.origemY - camY, f.comprimentoMax, f.largura, f.angulo, progresso);
    idsUsados.add(f.spriteId);
  });

  limparSpritesNaoUsados(idsUsados);
}

function atualizarMovimentoPersonagem() {
  let alvoVelX = 0, alvoVelY = 0;
  if (movendoDireita) alvoVelX = velMax;
  if (movendoEsquerda) alvoVelX = -velMax;
  if (movendoCima) alvoVelY = -velMax;
  if (movendoBaixo) alvoVelY = velMax;
  if (alvoVelX !== 0 && alvoVelY !== 0) { alvoVelX *= 0.7071; alvoVelY *= 0.7071; }

  velX += (alvoVelX - velX) * aceleracao;
  velY += (alvoVelY - velY) * aceleracao;
  x += velX;
  y += velY;

  if (limitesMundo) {
    if (x < limitesMundo.minX) { x = limitesMundo.minX; velX = Math.max(0, velX); }
    if (x > limitesMundo.maxX) { x = limitesMundo.maxX; velX = Math.min(0, velX); }
    if (y < limitesMundo.minY) { y = limitesMundo.minY; velY = Math.max(0, velY); }
    if (y > limitesMundo.maxY) { y = limitesMundo.maxY; velY = Math.min(0, velY); }
  }

  const meiaLargura = canvasBatalha.width / 2, meiaAltura = canvasBatalha.height / 2;
  let camAlvoX = x - meiaLargura, camAlvoY = y - meiaAltura;
  if (fundoImg && fundoImg.naturalWidth) {
    camAlvoX = clamp(camAlvoX, 0, Math.max(0, fundoImg.naturalWidth - canvasBatalha.width));
    camAlvoY = clamp(camAlvoY, 0, Math.max(0, fundoImg.naturalHeight - canvasBatalha.height));
  }
  camX += (camAlvoX - camX) * 0.15;
  camY += (camAlvoY - camY) * 0.15;
}

function atualizarMovimentoInimigo(deltaSegundos) {
  anguloOrbitaInimigo += (Math.random() - 0.5) * 0.9 * deltaSegundos;

  const alvoX = x + Math.cos(anguloOrbitaInimigo) * distanciaIdeal;
  const alvoY = y + Math.sin(anguloOrbitaInimigo) * distanciaIdeal;

  const dx = alvoX - inimigoX, dy = alvoY - inimigoY;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const velInimigoMax = 3.6;

  let alvoVelX = 0, alvoVelY = 0;
  if (dist > tolerancia) { alvoVelX = (dx / dist) * velInimigoMax; alvoVelY = (dy / dist) * velInimigoMax; }

  inimigoVelX += (alvoVelX - inimigoVelX) * 0.08;
  inimigoVelY += (alvoVelY - inimigoVelY) * 0.08;
  inimigoX += inimigoVelX;
  inimigoY += inimigoVelY;

  if (limitesMundo) {
    inimigoX = clamp(inimigoX, limitesMundo.minX, limitesMundo.maxX);
    inimigoY = clamp(inimigoY, limitesMundo.minY, limitesMundo.maxY);
  }
}

function distanciaEntre(ax, ay, bx, by) { return Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by)); }

function registrarGolpe(quemCausou) {
  if (quemCausou === "player") {
    if (usosUltimatePlayerRestantes > 0) golpesCausadosPlayer = Math.min(GOLPES_ULTIMATE_PLAYER, golpesCausadosPlayer + 1);
    if (usosUltimateInimigoRestantes > 0) golpesRecebidosInimigo = Math.min(GOLPES_ULTIMATE_INIMIGO, golpesRecebidosInimigo + 1);
  } else {
    if (usosUltimateInimigoRestantes > 0) golpesCausadosInimigo = Math.min(GOLPES_ULTIMATE_INIMIGO, golpesCausadosInimigo + 1);
    if (usosUltimatePlayerRestantes > 0) golpesRecebidosPlayer = Math.min(GOLPES_ULTIMATE_PLAYER, golpesRecebidosPlayer + 1);
  }
  recalcularCargasUltimate();
}

function recalcularCargasUltimate() {
  if (usosUltimatePlayerRestantes > 0) {
    cargaUltimatePlayer = (golpesCausadosPlayer / GOLPES_ULTIMATE_PLAYER) * 50 + (golpesRecebidosPlayer / GOLPES_ULTIMATE_PLAYER) * 50;
  }
  if (usosUltimateInimigoRestantes > 0) {
    cargaUltimateInimigo = (golpesCausadosInimigo / GOLPES_ULTIMATE_INIMIGO) * 50 + (golpesRecebidosInimigo / GOLPES_ULTIMATE_INIMIGO) * 50;
  }
}

function moverProjetil(poder) {
  const dx = poder.dirX, dy = poder.dirY;
  poder.x += dx * poder.velocidade;
  poder.y += dy * poder.velocidade;
}

function aplicarAutoguiado(poder, alvoX, alvoY, forca) {
  const dx = alvoX - poder.x, dy = alvoY - poder.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const dirDesejadaX = dx / dist, dirDesejadaY = dy / dist;
  poder.dirX += (dirDesejadaX - poder.dirX) * forca;
  poder.dirY += (dirDesejadaY - poder.dirY) * forca;
  const norma = Math.sqrt(poder.dirX * poder.dirX + poder.dirY * poder.dirY) || 1;
  poder.dirX /= norma; poder.dirY /= norma;
}

function atirarSkill1(origemX, origemY, dono) {
  const idSkill = dono === "player"
    ? (inventarioAtual.equipados.skill1 || "BalaMagicaSkill1")
    : escolherAleatorio(bossKits[bossAtual.tier].skill1);
  const base = skill1Defs[idSkill];
  const stats = dono === "player" ? base : statsDaSkillParaBoss(idSkill, base);
  const alvoX = dono === "player" ? inimigoX : x;
  const alvoY = dono === "player" ? inimigoY : y;
  const dx = alvoX - origemX, dy = alvoY - origemY;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;

  const lista = dono === "player" ? poderes : poderesInimigo;
  lista.push({
    x: origemX, y: origemY, tipoSkill: idSkill,
    dirX: dx / dist, dirY: dy / dist,
    dano: stats.dano, velocidade: stats.velocidade, autoguiado: 0.05,
    dono: dono, criadoEm: Date.now(), spriteId: "poder" + (proximoIdPoder++),
  });
}

function atirarSkill2(dono) {
  const idSkill = dono === "player" ? inventarioAtual.equipados.skill2 : escolherAleatorio(bossKits[bossAtual.tier].skill2);
  if (!idSkill) return;
  const def = skill2Defs[idSkill];
  const origemX = dono === "player" ? x : inimigoX;
  const origemY = dono === "player" ? y : inimigoY;
  const alvoX = dono === "player" ? inimigoX : x;
  const alvoY = dono === "player" ? inimigoY : y;

  if (def.tipo === "esfera") {
    const stats = dono === "player" ? def : statsDaSkillParaBoss(idSkill, def);
    const dx = alvoX - origemX, dy = alvoY - origemY;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const lista = dono === "player" ? poderes : poderesInimigo;
    lista.push({
      x: origemX, y: origemY, tipoSkill: "__skill2_" + idSkill,
      dirX: dx / dist, dirY: dy / dist,
      dano: stats.dano, velocidade: stats.velocidade, autoguiado: 0.035,
      dono: dono, criadoEm: Date.now(), spriteId: "poder" + (proximoIdPoder++),
    });
  } else {
    const stats = dono === "player" ? def : statsDaSkillParaBoss(idSkill, def);
    const ang = Math.atan2(alvoY - origemY, alvoX - origemX);
    feixesAtivos.push({
      origemX: origemX, origemY: origemY, angulo: ang, idSkill: idSkill,
      comprimentoAtual: 0, comprimentoMax: def.comprimento, largura: def.largura,
      dano: stats.dano, dono: dono, jaAcertou: false,
      spriteId: "feixe" + (proximoIdPoder++),
    });
  }
}

function atualizarBatalha() {
  if (!jogoAtivo || pausado) return;

  const agora = Date.now();
  const deltaSegundos = Math.min(0.05, (agora - ultimoFrameEm) / 1000);
  ultimoFrameEm = agora;

  atualizarMovimentoPersonagem();
  atualizarMovimentoInimigo(deltaSegundos);

  if (agora - ultimoSkill1Player >= COOLDOWN_SKILL1_PLAYER) {
    atirarSkill1(x, y, "player");
    ultimoSkill1Player = agora;
  }
  if (agora - ultimoSkill1Inimigo >= COOLDOWN_SKILL1_INIMIGO) {
    atirarSkill1(inimigoX, inimigoY, "inimigo");
    ultimoSkill1Inimigo = agora;
  }
  const kitSkill2Inimigo = bossKits[bossAtual.tier].skill2;
  if (kitSkill2Inimigo.length > 0) {
    const menorCooldown = Math.min.apply(null, kitSkill2Inimigo.map(function (id) { return cooldownSkill2Inimigo[id]; }));
    if (agora - ultimoSkill2Inimigo >= menorCooldown) { atirarSkill2("inimigo"); ultimoSkill2Inimigo = agora; }
  }

  poderes.forEach(function (p) { aplicarAutoguiado(p, inimigoX, inimigoY, p.autoguiado); moverProjetil(p); });
  poderesInimigo.forEach(function (p) { aplicarAutoguiado(p, x, y, p.autoguiado); moverProjetil(p); });

  feixesAtivos.forEach(function (f) { if (f.comprimentoAtual < f.comprimentoMax) f.comprimentoAtual += 26; });

  poderes = poderes.filter(function (p) {
    if (distanciaEntre(p.x, p.y, inimigoX, inimigoY) < 60) {
      vidaEnemy = Math.max(vidaEnemy - p.dano, 0);
      registrarGolpe("player");
      piscarDano("inimigo");
      criarNumeroDano(p.dano, inimigoX, inimigoY - 60, "#ff8a8a");
      atualizarBarrasBatalha();
      return false;
    }
    return agora - p.criadoEm < VIDA_UTIL_PODER_MS;
  });

  poderesInimigo = poderesInimigo.filter(function (p) {
    if (distanciaEntre(p.x, p.y, x, y) < 60) {
      vidaPlay = Math.max(vidaPlay - p.dano, 0);
      registrarGolpe("inimigo");
      piscarDano("personagem");
      tremerTela();
      criarNumeroDano(p.dano, x, y - 60, "#ffb15c");
      atualizarBarrasBatalha();
      return false;
    }
    return agora - p.criadoEm < VIDA_UTIL_PODER_MS;
  });

  feixesAtivos = feixesAtivos.filter(function (f) {
    if (f.comprimentoAtual >= f.comprimentoMax && !f.jaAcertou) {
      f.jaAcertou = true;
      f.tempoAcerto = agora;
      if (f.dono === "player") {
        vidaEnemy = Math.max(vidaEnemy - f.dano, 0);
        registrarGolpe("player");
        piscarDano("inimigo");
        criarNumeroDano(f.dano, inimigoX, inimigoY - 60, "#ff8a8a");
      } else {
        vidaPlay = Math.max(vidaPlay - f.dano, 0);
        registrarGolpe("inimigo");
        piscarDano("personagem");
        tremerTela();
        criarNumeroDano(f.dano, x, y - 60, "#ffb15c");
      }
      atualizarBarrasBatalha();
    }
    if (!f.jaAcertou) return true;
    return agora - f.tempoAcerto < 220;
  });

  checarFimDaBatalha();

  if (jogoAtivo && cargaUltimateInimigo >= cargaUltimateMax && usosUltimateInimigoRestantes > 0) {
    dispararCutsceneUltimate("inimigo");
  }

  desenharBatalha();
  if (jogoAtivo && !pausado) requestAnimationFrame(atualizarBatalha);
}

const chanceDropUltimatePorTier = { 4: 0.09, 5: 0.10, 6: 0.20, 7: 0.30, 8: 0.40, 9: 0.50, 10: 0.85 };

function checarFimDaBatalha() {
  if (!jogoAtivo) return;

  if (vidaEnemy <= 0) {
    jogoAtivo = false;
    const tier = bossAtual.tier;
    const statsBoss = statsPorTier[tier];
    const moedasGanhas = statsBoss.recompensaMoedas;
    const diamantesBase = statsBoss.recompensaDiamantes;
    const diamantesGanhos = Math.random() < statsBoss.chanceDiamante ? diamantesBase : 0;

    const chanceUltimate = chanceDropUltimatePorTier[tier];
    if (chanceUltimate && Math.random() < chanceUltimate) {
      const naoPossuidas = bosses.map(function (b) { return "Ultimate" + b.id; })
        .filter(function (id) { return !inventarioAtual.possuidos.includes(id); });
      if (naoPossuidas.length > 0) {
        const sorteada = naoPossuidas[Math.floor(Math.random() * naoPossuidas.length)];
        inventarioAtual.possuidos.push(sorteada);
        if (typeof salvarProgresso === "function") salvarProgresso();
        alert("Drop! Você ganhou a " + sorteada + "!");
      }
    }
    aoVencerBatalha(bossAtual.id, moedasGanhas, diamantesGanhos);
  } else if (vidaPlay <= 0) {
    jogoAtivo = false;
    aoPerderBatalha();
  }
}

document.getElementById("ataque").addEventListener("click", function () {
  const agora = Date.now();
  if (agora - ultimoSkill1Player >= COOLDOWN_SKILL1_PLAYER) {
    atirarSkill1(x, y, "player");
    ultimoSkill1Player = agora;
  }
});

document.getElementById("skill2").addEventListener("click", function () {
  const agora = Date.now();
  if (!inventarioAtual || !inventarioAtual.equipados.skill2) {
    alert("Você ainda não tem uma skill 2 equipada — compra na loja.");
    return;
  }
  const cooldown = cooldownSkill2Player[inventarioAtual.equipados.skill2];
  if (agora - ultimoSkill2Player >= cooldown) { atirarSkill2("player"); ultimoSkill2Player = agora; }
});

document.getElementById("ultimate").addEventListener("click", function () {
  if (!inventarioAtual || !inventarioAtual.equipados.ultimate) {
    alert("Você ainda não tem uma ultimate equipada — compra na loja com diamantes.");
    return;
  }
  if (usosUltimatePlayerRestantes <= 0) {
    alert("Você já usou sua ultimate o máximo de vezes nessa luta (" + MAX_USOS_ULTIMATE_PLAYER + "x).");
    return;
  }
  if (cargaUltimatePlayer < cargaUltimateMax) {
    alert("Ultimate ainda carregando (" + Math.floor(cargaUltimatePlayer) + "%). Continue causando e sofrendo golpes.");
    return;
  }
  dispararCutsceneUltimate("player");
});

function dispararCutsceneUltimate(dono) {
  pausarBatalha();
  const modal = document.getElementById("modal-ultimate");
  const video = document.getElementById("video-ultimate");
  const videoSplit = document.getElementById("video-ultimate-split");
  const botaoSkip = document.getElementById("btn-skip-ultimate");
  const legenda = document.getElementById("legenda-ultimate");

  const ehBoss10Dividido = dono === "inimigo" && bossAtual.id === 10;

  function finalizar() {
    modal.classList.add("escondido");
    modal.classList.remove("dividido");
    video.pause(); video.removeAttribute("src");
    videoSplit.pause(); videoSplit.removeAttribute("src");
    aplicarDanoUltimate(dono);
    ultimoFrameEm = Date.now();
    continuarBatalha();
  }
  botaoSkip.onclick = finalizar;
  modal.classList.remove("escondido");

  if (ehBoss10Dividido) {
    legenda.textContent = bossAtual.nome + " desperta!";
    modal.classList.add("dividido");
    videoSplit.classList.remove("escondido");
    video.src = "Boss9.mp4";
    videoSplit.src = "Boss10.mp4";
    let terminados = 0;
    function aoTerminarUm() { terminados++; if (terminados >= 2) finalizar(); }
    video.onended = aoTerminarUm; video.onerror = aoTerminarUm;
    videoSplit.onended = aoTerminarUm; videoSplit.onerror = aoTerminarUm;
    video.play().catch(aoTerminarUm);
    videoSplit.play().catch(aoTerminarUm);
  } else {
    videoSplit.classList.add("escondido");
    const numeroDaUltimate = dono === "player" && inventarioAtual.equipados.ultimate
      ? inventarioAtual.equipados.ultimate.replace("Ultimate", "") : null;
    const arquivo = dono === "player" ? "Boss" + numeroDaUltimate + ".mp4" : "Boss" + bossAtual.id + ".mp4";
    legenda.textContent = dono === "player" ? jogadorAtual.nome + " desencadeia tudo!" : bossAtual.nome + " contra-ataca!";
    video.src = arquivo;
    video.onended = finalizar;
    video.onerror = finalizar;
    video.play().catch(finalizar);
  }
}

function aplicarDanoUltimate(dono) {
  let danoUltimate;
  if (dono === "player") {
    const item = itensLoja.ultimate.find(function (u) { return u.id === inventarioAtual.equipados.ultimate; });
    danoUltimate = item ? item.dano : 100;
    usosUltimatePlayerRestantes--;
    cargaUltimatePlayer = 0;
    golpesCausadosPlayer = 0; golpesRecebidosPlayer = 0;
    vidaEnemy = Math.max(vidaEnemy - danoUltimate, 0);
    tremerTela();
    piscarDano("inimigo");
    criarNumeroDano(danoUltimate, inimigoX, inimigoY - 90, "#ffd23f");
  } else {
    const stats = statsPorTier[bossAtual.tier];
    danoUltimate = stats.danoUltimateFixo || (200 * bossAtual.tier);
    usosUltimateInimigoRestantes--;
    cargaUltimateInimigo = 0;
    golpesCausadosInimigo = 0; golpesRecebidosInimigo = 0;
    vidaPlay = Math.max(vidaPlay - danoUltimate, 0);
    tremerTela();
    piscarDano("personagem");
    criarNumeroDano(danoUltimate, x, y - 90, "#ff5252");
  }
  atualizarBarrasBatalha();
  checarFimDaBatalha();
}
