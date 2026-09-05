const skill1Defs = {
  RelampagoSkill1:{largura:208,altura:208,velocidade:6.66,dano:42,gif:"RelampagoSkill1.gif"},
  SomSkill1:{largura:198,altura:198,velocidade:6.75,dano:75,gif:"SomSkill1.gif"},
  CirculoSkill1:{largura:208,altura:208,velocidade:6.84,dano:125,gif:"CirculoSkill1.gif"},
  VentoSkill1:{largura:220,altura:220,velocidade:6.93,dano:210,gif:"VentoSkill1.gif"},
  AguaSkill1:{largura:232,altura:232,velocidade:7.02,dano:340,gif:"AguaSkill1.gif"},
  VenenoSkill1:{largura:245,altura:245,velocidade:7.11,dano:520,gif:"VenenoSkill1.gif"},
  SolSkill1:{largura:262,altura:262,velocidade:7.2,dano:820,gif:"SolSkill1.gif"},
  MeteoroSkill1:{largura:281,altura:281,velocidade:7.38,dano:1250,gif:"MeteoroSkill1.gif"}
};
const skill2Defs = {
  RaioSkill2:{tipo:"esfera",largura:238,altura:238,velocidade:6.39,dano:145,gif:"RaioSkill2.gif"},
  GeloSkill2:{tipo:"esfera",largura:250,altura:250,velocidade:6.48,dano:290,gif:"GeloSkill2.gif"},
  FuracaoSkill2:{tipo:"esfera",largura:262,altura:262,velocidade:6.57,dano:480,gif:"FuracaoSkill2.gif"},
  MetalSkill2:{tipo:"esfera",largura:275,altura:275,velocidade:6.66,dano:760,gif:"MetalSkill2.gif"},
  MagmaSkill2:{tipo:"esfera",largura:294,altura:294,velocidade:6.75,dano:1100,gif:"MagmaSkill2.gif"},
  AbismoSkill2:{tipo:"esfera",largura:282,altura:282,velocidade:6.84,dano:1650,gif:"AbismoSkill2.gif"},
  MeteoroSkill2:{tipo:"esfera",largura:261,altura:261,velocidade:6.93,dano:2250,gif:"MeteoroSkill2.gif"},
  SolSkill2:{tipo:"esfera",largura:350,altura:350,velocidade:7.02,dano:3000,gif:"SolSkill2.gif"},
  EstrelaSkill2:{tipo:"esfera",largura:369,altura:369,velocidade:7.11,dano:4000,gif:"EstrelaSkill2.gif"},
  BlackholeSkill2:{tipo:"feixe",comprimento:488,largura:188,dano:5200,gif:"BlackholeSkill2.gif"}
};
const COOLDOWN_SKILL1_PLAYER=900;
const COOLDOWN_SKILL1_INIMIGO=1650;
const cooldownSkill2Player={RaioSkill2:4200,GeloSkill2:4500,FuracaoSkill2:4800,MetalSkill2:5100,MagmaSkill2:5500,AbismoSkill2:6000,MeteoroSkill2:6500,SolSkill2:7000,EstrelaSkill2:7600,BlackholeSkill2:8200};
const cooldownSkill2Inimigo={RaioSkill2:6000,GeloSkill2:6400,FuracaoSkill2:6800,MetalSkill2:7200,MagmaSkill2:7600,AbismoSkill2:8000,MeteoroSkill2:8400,SolSkill2:8800,EstrelaSkill2:9200,BlackholeSkill2:9800};
const statsPorTier={
  1:{vida:1900,recompensaMoedas:150,recompensaDiamantes:2,chanceDiamante:.70,danoUltimateFixo:105,overridesDano:{RelampagoSkill1:{dano:20,velocidade:5.22}}},
  2:{vida:4700,recompensaMoedas:330,recompensaDiamantes:4,chanceDiamante:.67,danoUltimateFixo:135,overridesDano:{SomSkill1:{dano:30,velocidade:5.4}}},
  3:{vida:9800,recompensaMoedas:760,recompensaDiamantes:8,chanceDiamante:.64,danoUltimateFixo:175,overridesDano:{CirculoSkill1:{dano:48,velocidade:5.49}}},
  4:{vida:19000,recompensaMoedas:1750,recompensaDiamantes:14,chanceDiamante:.61,danoUltimateFixo:230,overridesDano:{VentoSkill1:{dano:70,velocidade:5.58},RaioSkill2:{dano:105,velocidade:5.58}}},
  5:{vida:35000,recompensaMoedas:3500,recompensaDiamantes:24,chanceDiamante:.58,danoUltimateFixo:300,overridesDano:{AguaSkill1:{dano:95,velocidade:5.67},GeloSkill2:{dano:155,velocidade:5.67}}},
  6:{vida:62000,recompensaMoedas:7600,recompensaDiamantes:40,chanceDiamante:.55,danoUltimateFixo:380,overridesDano:{VenenoSkill1:{dano:125,velocidade:5.76},FuracaoSkill2:{dano:210,velocidade:5.76}}},
  7:{vida:110000,recompensaMoedas:16500,recompensaDiamantes:65,chanceDiamante:.52,danoUltimateFixo:480,overridesDano:{SolSkill1:{dano:165,velocidade:5.85},MetalSkill2:{dano:285,velocidade:5.85}}},
  8:{vida:195000,recompensaMoedas:36000,recompensaDiamantes:100,chanceDiamante:.49,danoUltimateFixo:600,overridesDano:{MeteoroSkill1:{dano:220,velocidade:5.94},MagmaSkill2:{dano:380,velocidade:5.94}}},
  9:{vida:345000,recompensaMoedas:82000,recompensaDiamantes:180,chanceDiamante:.46,danoUltimateFixo:760,overridesDano:{SolSkill1:{dano:285,velocidade:6.03},MeteoroSkill1:{dano:285,velocidade:6.03},AbismoSkill2:{dano:500,velocidade:6.03}}},
  10:{vida:650000,recompensaMoedas:195000,recompensaDiamantes:350,chanceDiamante:.43,danoUltimateFixo:950,overridesDano:{VenenoSkill1:{dano:360,velocidade:6.12},EstrelaSkill2:{dano:620,velocidade:6.12},SolSkill2:{dano:580,velocidade:6.12}}}
};
const bossKits={1:{skill1:["RelampagoSkill1"],skill2:[]},2:{skill1:["SomSkill1"],skill2:[]},3:{skill1:["CirculoSkill1"],skill2:[]},4:{skill1:["VentoSkill1"],skill2:["RaioSkill2"]},5:{skill1:["AguaSkill1"],skill2:["GeloSkill2"]},6:{skill1:["VenenoSkill1"],skill2:["FuracaoSkill2"]},7:{skill1:["SolSkill1"],skill2:["MetalSkill2"]},8:{skill1:["MeteoroSkill1"],skill2:["MagmaSkill2"]},9:{skill1:["SolSkill1","MeteoroSkill1"],skill2:["AbismoSkill2"]},10:{skill1:["VenenoSkill1"],skill2:["EstrelaSkill2","SolSkill2"]}};
function escolherAleatorio(lista){return lista[Math.floor(Math.random()*lista.length)]}
function clamp(valor,minimo,maximo){return Math.max(minimo,Math.min(maximo,valor))}


const ULTIMATE_CONFIG_BY_ID = {
  Ultimate1: { nome: 'Arlan', frase: 'Vai leva uma Advertencia' },
  Ultimate2: { nome: 'Marcos', frase: 'Eu dou a bunda' },
  Ultimate3: { nome: 'Miguel', frase: 'A vanessa e Somente minha' },
  Ultimate4: { nome: 'Carlos', frase: 'Estou indignado' },
  Ultimate5: { nome: 'Lucas', frase: 'Hoje a noite vai pega fogo' },
  Ultimate6: { nome: 'Davi', frase: 'Vai se lasca' },
  Ultimate7: { nome: 'Arthur', frase: 'Isso tudo e Por voce Vanessa Receba todo meu Amor' },
  Ultimate8: { nome: 'Vinicius', frase: 'Vou te Mata Arthur' },
  Ultimate9: { nome: 'GuilermeChucro', frase: 'A vanessa nao e de Ninguem e Apenas minha' },
  Ultimate10: { nome: 'PaulaoDoPneu', frase: 'Se ajoelha seu verme Insolente Insignificante' }
};

let rafBatalhaId = null;

function agendarFrameBatalha() {
  if (!jogoAtivo || pausado || rafBatalhaId !== null) return;
  rafBatalhaId = requestAnimationFrame(atualizarBatalha);
}

function statsDaSkillParaBoss(idSkill, def) {
  const tierStats = statsPorTier[bossAtual.tier || bossAtual.id];
  const override = tierStats.overridesDano && tierStats.overridesDano[idSkill];
  return {
    dano: (override ? override.dano : def.dano),
    velocidade: override ? override.velocidade : def.velocidade,
  };
}


function ajustarEscalaJogo() {
  atualizarCameraBatalha();
}
window.addEventListener("resize", ajustarEscalaJogo, { passive: true });
window.addEventListener("orientationchange", function () {
  setTimeout(ajustarEscalaJogo, 0);
});
window.addEventListener("load", ajustarEscalaJogo);

const elementosSprites = {};

function prepararCamadaSprites() {
  const camada = document.getElementById("camada-sprites");
  if (!camada) return;
  camada.style.position = "absolute";
  camada.style.left = "0";
  camada.style.top = "0";
  camada.style.width = "1100px";
  camada.style.height = "700px";
  camada.style.pointerEvents = "none";
  camada.style.transformOrigin = "0 0";
  camada.style.willChange = "transform";
}
prepararCamadaSprites();



function posicionarSprite(id, src, xTela, yTela, largura, altura, classeExtra, virarEsquerda) {
  let el = elementosSprites[id];
  const ehVideo = /\.(mp4|mov|webm|ogg)$/i.test(src);

  if (!el || (ehVideo && el.tagName !== "VIDEO") || (!ehVideo && el.tagName !== "IMG")) {
    if (el) el.remove();

    el = document.createElement(ehVideo ? "video" : "img");
    el.className = "sprite-jogo" + (classeExtra ? " " + classeExtra : "");

    if (ehVideo) {
      el.muted = true;
      el.loop = true;
      el.autoplay = true;
      el.playsInline = true;
      el.preload = "auto";
    }

    document.getElementById("camada-sprites").appendChild(el);
    elementosSprites[id] = el;
  }

  if (el.dataset.src !== src && el.dataset.failedSrc !== src) {
    el.src = src;
    el.dataset.src = src;
    el.dataset.failedSrc = "";

    if (ehVideo) {
      el.play().catch(() => {});
    }
  }

  const tamanho = largura + "x" + altura;
  if (el.dataset.tamanho !== tamanho) {
    el.style.width = largura + "px";
    el.style.height = altura + "px";
    el.dataset.tamanho = tamanho;
  }

  const espelho = virarEsquerda ? " scaleX(-1)" : "";
  const transform =
    "translate(" + (xTela - largura / 2) + "px," + (yTela - altura / 2) + "px)" + espelho;
  if (el.dataset.transform !== transform) {
    el.style.transform = transform;
    el.dataset.transform = transform;
  }

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
  const tamanho = comprimentoMax + "x" + largura;
  if (el.dataset.tamanho !== tamanho) {
    el.style.width = comprimentoMax + "px";
    el.style.height = largura + "px";
    el.dataset.tamanho = tamanho;
  }
  const graus = (anguloRad * 180) / Math.PI;
  const transform =
    "translate(" + origemXTela + "px," + (origemYTela - largura / 2) + "px) rotate(" + graus + "deg) scaleX(" + progresso + ")";
  if (el.dataset.transform !== transform) {
    el.style.transform = transform;
    el.dataset.transform = transform;
  }
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
  el.style.transform = "translate(" + xMundo + "px," + yMundo + "px)";
  el.textContent = "-" + Math.round(valor);
  camada.appendChild(el);
  setTimeout(function () { el.remove(); }, 1800);
}

let proximoIdPoder = 1;

const canvasBatalha = document.getElementById("jogo");
const ctxBatalha = canvasBatalha.getContext("2d");
const elementosBatalha = {
  viewport: document.getElementById("viewport-jogo"),
  area: document.getElementById("area-jogo"),
  camadaSprites: document.getElementById("camada-sprites"),
  barraPlay: document.getElementById("barraPlay"),
  barraEnemy: document.getElementById("barraEnemy"),
  barraUltimate: document.getElementById("barra-ultimate"),
  vidaPlayerText: document.getElementById("vida-player-text"),
  vidaBossText: document.getElementById("vida-boss-text"),
  botaoUltimate: document.getElementById("ultimate"),
  timer: document.getElementById("timer-batalha"),
  cooldownSkill1: document.getElementById("cooldown-skill1"),
  cooldownSkill2: document.getElementById("cooldown-skill2")
};

let camX = 0, camY = 0;
let limitesMundo = null;

let fundoLarguraEscalada = 0;
let fundoAlturaEscalada = 0;

const TAMANHO_PERSONAGEM = 175;
const TAMANHO_BOSS = 175;

const MARGEM_MUNDO = 110;

function calcularLimitesMundo() {
  
  const larguraMundo = canvasBatalha.width;
  const alturaMundo = canvasBatalha.height;

  if (!fundoImg || !fundoImg.naturalWidth) {
    fundoLarguraEscalada = larguraMundo;
    fundoAlturaEscalada = alturaMundo;
  } else {
    const escalaCobertura = Math.max(
      larguraMundo / fundoImg.naturalWidth,
      alturaMundo / fundoImg.naturalHeight
    );
    fundoLarguraEscalada = fundoImg.naturalWidth * escalaCobertura;
    fundoAlturaEscalada = fundoImg.naturalHeight * escalaCobertura;
  }

  limitesMundo = {
    minX: MARGEM_MUNDO,
    minY: MARGEM_MUNDO,
    maxX: Math.max(MARGEM_MUNDO, larguraMundo - MARGEM_MUNDO),
    maxY: Math.max(MARGEM_MUNDO, alturaMundo - MARGEM_MUNDO)
  };

  x = clamp(x, limitesMundo.minX, limitesMundo.maxX);
  y = clamp(y, limitesMundo.minY, limitesMundo.maxY);
  inimigoX = clamp(inimigoX, limitesMundo.minX, limitesMundo.maxX);
  inimigoY = clamp(inimigoY, limitesMundo.minY, limitesMundo.maxY);
  atualizarCameraBatalha();
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
  const tecla = evento.key.toLowerCase();
  if (evento.key === "ArrowRight" || tecla === "d") movendoDireita = true;
  if (evento.key === "ArrowLeft" || tecla === "a") movendoEsquerda = true;
  if (evento.key === "ArrowUp" || tecla === "w") movendoCima = true;
  if (evento.key === "ArrowDown" || tecla === "s") movendoBaixo = true;
});
window.addEventListener("keyup", function (evento) {
  const tecla = evento.key.toLowerCase();
  if (evento.key === "ArrowRight" || tecla === "d") movendoDireita = false;
  if (evento.key === "ArrowLeft" || tecla === "a") movendoEsquerda = false;
  if (evento.key === "ArrowUp" || tecla === "w") movendoCima = false;
  if (evento.key === "ArrowDown" || tecla === "s") movendoBaixo = false;
});

let fundoImg;
let fundoCanvasChroma = null;
let fundoCtxChroma = null;
let bossAtual, jogadorAtual, inventarioAtual, corAuraAtual;


function prepararFundoSemPreto() {
  if (!fundoImg || !fundoImg.naturalWidth || !fundoImg.naturalHeight) return;
  const w = Math.max(canvasBatalha.width, Math.ceil(fundoLarguraEscalada || canvasBatalha.width));
  const h = Math.max(canvasBatalha.height, Math.ceil(fundoAlturaEscalada || canvasBatalha.height));
  fundoCanvasChroma = document.createElement('canvas');
  fundoCanvasChroma.width = w;
  fundoCanvasChroma.height = h;
  fundoCtxChroma = fundoCanvasChroma.getContext('2d', { willReadFrequently: true });
  const escala = Math.max(w / fundoImg.naturalWidth, h / fundoImg.naturalHeight);
  const dw = fundoImg.naturalWidth * escala;
  const dh = fundoImg.naturalHeight * escala;
  const dx = (w - dw) / 2, dy = (h - dh) / 2;
  fundoCtxChroma.clearRect(0, 0, w, h);
  fundoCtxChroma.drawImage(fundoImg, dx, dy, dw, dh);
  const dados = fundoCtxChroma.getImageData(0, 0, w, h);
  const px = dados.data;
  for (let i = 0; i < px.length; i += 4) {
    const r = px[i], g = px[i + 1], b = px[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const luminancia = 0.299 * r + 0.587 * g + 0.114 * b;
    if (max < 58 && (max - min) < 22) {
      const fator = Math.max(0, Math.min(1, (luminancia - 8) / 42));
      px[i + 3] = Math.round(px[i + 3] * fator);
    }
  }
  fundoCtxChroma.putImageData(dados, 0, 0);
}

let x, y, inimigoX, inimigoY;
let velX = 0, velY = 0;
const velMax = 2.9;
const aceleracao = 0.24;

let inimigoVelX = 0, inimigoVelY = 0;
let anguloOrbitaInimigo = Math.random() * Math.PI * 2;

let vidaPlay, vidaMax, vidaEnemy, vidaEnemyMax;
let poderes = [];
let poderesInimigo = [];
let feixesAtivos = [];

const VIDA_UTIL_PODER_MS = 3200;
const distanciaIdeal = 260;
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
let tempoRestanteBatalha = 99;
let ultimoSegundoTimer = 0;
const TEMPO_LIMITE_BATALHA = 99;

function iniciarBatalha(boss, jogador, inventario, corAura) {
  bossAtual = boss;
  jogadorAtual = jogador;
  if(window.playBossMusic)playBossMusic(boss.id);
  inventarioAtual = inventario;
  corAuraAtual = corAura;

  const stats = statsPorTier[boss.tier || boss.id];
  if (!stats) throw new Error('Stats do boss não encontrados: ' + boss.id);

  fundoCanvasChroma = null;
  fundoCtxChroma = null;
  fundoImg = new Image();
  fundoImg.onload = function () {
    calcularLimitesMundo();
    prepararFundoSemPreto();
  };
  
  fundoImg.src = "Boss" + boss.id + "Img.png";

  document.getElementById("nome-player-hud").textContent = jogador.nome;
  document.getElementById("nome-boss-hud").textContent = boss.nome;
  document.getElementById("nome-boss-hud").style.color = corAura;
  const s1Icon=document.getElementById("skill1-icon");
  const s2Icon=document.getElementById("skill2-icon");
  if(s1Icon) s1Icon.src=(inventario.equipados&&inventario.equipados.skill1?inventario.equipados.skill1:"RelampagoSkill1")+".gif";
  if(s2Icon) s2Icon.src=(inventario.equipados&&inventario.equipados.skill2?inventario.equipados.skill2:"RaioSkill2")+".gif";

  x = 550; y = 350;
  inimigoX = 800; inimigoY = 350;
  velX = 0; velY = 0;
  inimigoVelX = 0; inimigoVelY = 0;
  anguloOrbitaInimigo = Math.random() * Math.PI * 2;
  camX = 0; camY = 0;
  limitesMundo = null;
  fundoLarguraEscalada = 0; fundoAlturaEscalada = 0;

  const bonusVida = (typeof calcularBonusVidaPermanente === "function") ? calcularBonusVidaPermanente() : 0;
  vidaMax = 800 + bonusVida; vidaPlay = vidaMax;
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
  ultimoFrameEm = performance.now();
  tempoRestanteBatalha = TEMPO_LIMITE_BATALHA;
  ultimoSegundoTimer = agora;
  atualizarTimerBatalha();

  atualizarBarrasBatalha();
  jogoAtivo = true;
  pausado = false;
  ajustarEscalaJogo();
  prepararCamadaSprites();
  if (rafBatalhaId !== null) cancelAnimationFrame(rafBatalhaId);
  rafBatalhaId = null;
  iniciarTimerCooldownUi();
  agendarFrameBatalha();
}

window.iniciarBatalha = iniciarBatalha;

function pausarBatalha() {
  pausado = true;
  if (rafBatalhaId !== null) { cancelAnimationFrame(rafBatalhaId); rafBatalhaId = null; }
  pararTimerCooldownUi();
}
function continuarBatalha() {
  if (!jogoAtivo) return;
  pausado = false;
  ultimoFrameEm = performance.now();
  iniciarTimerCooldownUi();
  agendarFrameBatalha();
}
function pararBatalha() {
  jogoAtivo = false;
  pararTimerCooldownUi();
  pausado = false;
  if (rafBatalhaId !== null) { cancelAnimationFrame(rafBatalhaId); rafBatalhaId = null; }
}

function atualizarTimerBatalha() {
  const el = elementosBatalha.timer;
  if (el) {
    el.textContent = String(Math.max(0, tempoRestanteBatalha)).padStart(2, "0");
    el.classList.toggle("timer-perigo", tempoRestanteBatalha <= 15);
  }
}

function atualizarBarrasBatalha() {
  if (elementosBatalha.barraPlay) elementosBatalha.barraPlay.style.width = Math.max(0, (vidaPlay / vidaMax) * 100) + "%";
  if (elementosBatalha.barraEnemy) elementosBatalha.barraEnemy.style.width = Math.max(0, (vidaEnemy / vidaEnemyMax) * 100) + "%";
  const vp = elementosBatalha.vidaPlayerText, vb = elementosBatalha.vidaBossText;
  if(vp) vp.textContent=Math.ceil(vidaPlay)+"/"+Math.ceil(vidaMax);
  if(vb) vb.textContent=Math.ceil(vidaEnemy)+"/"+Math.ceil(vidaEnemyMax);
  if (elementosBatalha.barraUltimate) elementosBatalha.barraUltimate.style.width = Math.min(100, (cargaUltimatePlayer / cargaUltimateMax) * 100) + "%";
  const botaoUlt = elementosBatalha.botaoUltimate;
  if (botaoUlt) botaoUlt.classList.toggle("ultimate-esgotada", usosUltimatePlayerRestantes <= 0);
}

function desenharBatalha() {
  ctxBatalha.clearRect(0, 0, canvasBatalha.width, canvasBatalha.height);
  
  const camada = elementosBatalha.camadaSprites;
  if (camada && camada.style.transform) camada.style.transform = "none";

  if (fundoImg && fundoImg.complete && fundoImg.naturalWidth > 0) {
    if (fundoCanvasChroma) {
      ctxBatalha.drawImage(fundoCanvasChroma, -camX, -camY, fundoCanvasChroma.width, fundoCanvasChroma.height);
    } else {
      const largura = fundoLarguraEscalada || fundoImg.naturalWidth;
      const altura = fundoAlturaEscalada || fundoImg.naturalHeight;
      ctxBatalha.drawImage(fundoImg, -camX, -camY, largura, altura);
    }
  } else {
    const gradiente = ctxBatalha.createRadialGradient(
      canvasBatalha.width / 2,
      canvasBatalha.height / 2,
      60,
      canvasBatalha.width / 2,
      canvasBatalha.height / 2,
      canvasBatalha.width
    );
    gradiente.addColorStop(0, "#173b63");
    gradiente.addColorStop(0.5, "#171743");
    gradiente.addColorStop(1, "#090817");
    ctxBatalha.fillStyle = gradiente;
    ctxBatalha.fillRect(0, 0, canvasBatalha.width, canvasBatalha.height);
  }

  const idsUsados = new Set(["personagem", "inimigo"]);
  const personagemEquipado = inventarioAtual.equipados && inventarioAtual.equipados.imagem;
  const spritePersonagem = personagemEquipado
    ? (personagemEquipado === "PaulaoDoPneuBanner" ? "PaulaoDoPneuBanner.jpg" : personagemEquipado === "CarlosBanner" ? "CarlosBatalha.webp" : personagemEquipado + ".webp")
    : "ArlanBanner.webp";

  const spritePlayer = posicionarSprite(
    "personagem",
    spritePersonagem,
    x,
    y,
    TAMANHO_PERSONAGEM,
    TAMANHO_PERSONAGEM,
    "sprite-personagem",
    inimigoX < x
  );

  if (personagemEquipado && spritePlayer) {
    spritePlayer.onerror = function () {
      this.onerror = null;
      const fallback = personagemEquipado === "CarlosBanner" ? "Carlos.png" : personagemEquipado + ".png";
      this.dataset.failedSrc = fallback;
      this.src = fallback;
      this.dataset.src = fallback;
    };
  }
  const bossSprite = posicionarSprite("inimigo", bossAtual.nome + ".jpg", inimigoX, inimigoY, TAMANHO_BOSS, TAMANHO_BOSS, "sprite-boss", x < inimigoX);
  if (bossSprite && bossSprite.tagName === "IMG") {
    bossSprite.onerror = function () {
      this.onerror = null;
      this.src = bossAtual.imagem;
      this.dataset.src = bossAtual.imagem;
    };
  }

  poderes.forEach(function (p) {
    const def = skill1Defs[p.tipoSkill] || skill2Defs[p.tipoSkill.replace("__skill2_", "")];
    posicionarSprite(p.spriteId, def.gif, p.x, p.y, def.largura, def.altura, "sprite-poder", p.dirX < 0);
    idsUsados.add(p.spriteId);
  });
  poderesInimigo.forEach(function (p) {
    const def = skill1Defs[p.tipoSkill] || skill2Defs[p.tipoSkill.replace("__skill2_", "")];
    posicionarSprite(p.spriteId, def.gif, p.x, p.y, def.largura, def.altura, "sprite-poder", p.dirX < 0);
    idsUsados.add(p.spriteId);
  });

  feixesAtivos.forEach(function (f) {
    const def = skill2Defs[f.idSkill];
    const progresso = Math.max(0.02, f.comprimentoAtual / f.comprimentoMax);
    posicionarSpriteFeixe(f.spriteId, def.gif, f.origemX, f.origemY, f.comprimentoMax, f.largura, f.angulo, progresso);
    idsUsados.add(f.spriteId);
  });

  limparSpritesNaoUsados(idsUsados);
}

function atualizarMovimentoPersonagem(deltaSegundos) {
  let alvoVelX = 0, alvoVelY = 0;
  const velJogador = velMax * (typeof getPlayerMoveMultiplier==='function' ? getPlayerMoveMultiplier() : 1);
  if (movendoDireita) alvoVelX = velJogador;
  if (movendoEsquerda) alvoVelX = -velJogador;
  if (movendoCima) alvoVelY = -velJogador;
  if (movendoBaixo) alvoVelY = velJogador;
  if (alvoVelX !== 0 && alvoVelY !== 0) { alvoVelX *= 0.7071; alvoVelY *= 0.7071; }

  
  const dt60 = Math.min(3, Math.max(0, deltaSegundos * 60));
  const alpha = 1 - Math.pow(1 - aceleracao, dt60);
  velX += (alvoVelX - velX) * alpha;
  velY += (alvoVelY - velY) * alpha;
  x += velX * dt60;
  y += velY * dt60;

  if (limitesMundo) {
    if (x < limitesMundo.minX) { x = limitesMundo.minX; velX = 0; }
    if (x > limitesMundo.maxX) { x = limitesMundo.maxX; velX = 0; }
    if (y < limitesMundo.minY) { y = limitesMundo.minY; velY = 0; }
    if (y > limitesMundo.maxY) { y = limitesMundo.maxY; velY = 0; }
  }
}

function atualizarCameraBatalha() {
  const viewport = elementosBatalha.viewport;
  const area = elementosBatalha.area;
  if (!viewport || !area) return;

  const viewportW = Math.max(1, viewport.clientWidth);
  const viewportH = Math.max(1, viewport.clientHeight);
  const mundoW = canvasBatalha.width;
  const mundoH = canvasBatalha.height;

  
  const escalaConfortavel = Math.min(viewportW / 900, viewportH / 595);
  
  const escala = clamp(escalaConfortavel * 1.06, 0.5, 1);

  
  const janelaMundoW = viewportW / escala;
  const janelaMundoH = viewportH / escala;
  const maxCamX = Math.max(0, mundoW - janelaMundoW);
  const maxCamY = Math.max(0, mundoH - janelaMundoH);

  
  let alvoX = (x + inimigoX) * 0.5;
  let alvoY = (y + inimigoY) * 0.5;
  const margem = 24;

  const menorX = Math.min(x, inimigoX);
  const maiorX = Math.max(x, inimigoX);
  const menorY = Math.min(y, inimigoY);
  const maiorY = Math.max(y, inimigoY);

  if (maiorX - menorX <= janelaMundoW - margem * 2) {
    if (menorX < alvoX - janelaMundoW / 2 + margem) alvoX = menorX + janelaMundoW / 2 - margem;
    if (maiorX > alvoX + janelaMundoW / 2 - margem) alvoX = maiorX - janelaMundoW / 2 + margem;
  }
  if (maiorY - menorY <= janelaMundoH - margem * 2) {
    if (menorY < alvoY - janelaMundoH / 2 + margem) alvoY = menorY + janelaMundoH / 2 - margem;
    if (maiorY > alvoY + janelaMundoH / 2 - margem) alvoY = maiorY - janelaMundoH / 2 + margem;
  }

  camX = clamp(alvoX - janelaMundoW / 2, 0, maxCamX);
  camY = clamp(alvoY - janelaMundoH / 2, 0, maxCamY);

  
  const escalaY = escala * (viewportW <= 900 ? 1.12 : 1.06);
  const offsetX = (viewportW - mundoW * escala) / 2;
  const offsetY = (viewportH - mundoH * escalaY) / 2;
  const transform = `translate(${offsetX - camX * escala}px,${offsetY - camY * escalaY}px) scale(${escala},${escalaY})`;
  if (area.dataset.cameraTransform !== transform) {
    area.style.transformOrigin = "0 0";
    area.style.transform = transform;
    area.dataset.cameraTransform = transform;
  }
}


function atualizarMovimentoInimigo(deltaSegundos) {
  anguloOrbitaInimigo += (Math.random() - 0.5) * 0.9 * deltaSegundos;

  const alvoX = x + Math.cos(anguloOrbitaInimigo) * distanciaIdeal;
  const alvoY = y + Math.sin(anguloOrbitaInimigo) * distanciaIdeal;

  const dx = alvoX - inimigoX, dy = alvoY - inimigoY;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const velInimigoMax = 2.45;

  let alvoVelX = 0, alvoVelY = 0;
  if (dist > tolerancia) { alvoVelX = (dx / dist) * velInimigoMax; alvoVelY = (dy / dist) * velInimigoMax; }

  const dt60 = Math.min(3, Math.max(0, deltaSegundos * 60));
  const alpha = 1 - Math.pow(1 - 0.08, dt60);
  inimigoVelX += (alvoVelX - inimigoVelX) * alpha;
  inimigoVelY += (alvoVelY - inimigoVelY) * alpha;
  inimigoX += inimigoVelX * dt60;
  inimigoY += inimigoVelY * dt60;

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

function moverProjetil(poder, dt60) {
  const fator = Number.isFinite(dt60) ? dt60 : 1;
  poder.x += poder.dirX * poder.velocidade * fator;
  poder.y += poder.dirY * poder.velocidade * fator;
}

function aplicarAutoguiado(poder, alvoX, alvoY, forca, dt60) {
  const dx = alvoX - poder.x, dy = alvoY - poder.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const dirDesejadaX = dx / dist, dirDesejadaY = dy / dist;
  const fator = Number.isFinite(dt60) ? dt60 : 1;
  const ajuste = 1 - Math.pow(1 - forca, fator);
  poder.dirX += (dirDesejadaX - poder.dirX) * ajuste;
  poder.dirY += (dirDesejadaY - poder.dirY) * ajuste;
  const norma = Math.sqrt(poder.dirX * poder.dirX + poder.dirY * poder.dirY) || 1;
  poder.dirX /= norma; poder.dirY /= norma;
}

function atirarSkill1(origemX, origemY, dono) {
  const equipadoSkill1 = inventarioAtual.equipados.skill1;
  const idSkill = dono === "player"
    ? (equipadoSkill1 && skill1Defs[equipadoSkill1] ? equipadoSkill1 : "RelampagoSkill1")
    : escolherAleatorio(bossKits[bossAtual.tier || bossAtual.id].skill1);
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
    dano: stats.dano * (dono === 'player' && typeof getPlayerDamageMultiplier==='function' ? getPlayerDamageMultiplier() : 1) * (dono === 'player' && typeof getPlayerCritChance==='function' && Math.random() < getPlayerCritChance() ? 1.75 : 1), velocidade: stats.velocidade, autoguiado: 0.05,
    dono: dono, criadoEm: Date.now(), spriteId: "poder" + (proximoIdPoder++),
  });
}

function atirarSkill2(dono) {
  const idSkill = dono === "player" ? inventarioAtual.equipados.skill2 : escolherAleatorio(bossKits[bossAtual.tier || bossAtual.id].skill2);
  if (!idSkill || !skill2Defs[idSkill]) return;
  if (dono === "player" && window.playSfx) playSfx('Carregar.mp3', 0.2);
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
      dano: stats.dano * (dono === 'player' && typeof getPlayerDamageMultiplier==='function' ? getPlayerDamageMultiplier() : 1) * (dono === 'player' && typeof getPlayerCritChance==='function' && Math.random() < getPlayerCritChance() ? 1.75 : 1), velocidade: stats.velocidade, autoguiado: 0.035,
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

function atualizarCooldownsBotoes() {
  const agora = Date.now();

  const elSkill1 = elementosBatalha.cooldownSkill1;
  if (elSkill1) {
    const cd1 = COOLDOWN_SKILL1_PLAYER * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1);
    const restante = cd1 - (agora - ultimoSkill1Player);
    elSkill1.textContent = restante > 50 ? (restante / 1000).toFixed(1) + "s" : "";
  }

  const elSkill2 = elementosBatalha.cooldownSkill2;
  if (elSkill2) {
    const idSkill2 = inventarioAtual && inventarioAtual.equipados ? inventarioAtual.equipados.skill2 : null;
    if (!idSkill2 || !cooldownSkill2Player[idSkill2]) {
      elSkill2.textContent = "";
    } else {
      const total = cooldownSkill2Player[idSkill2] * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1);
      const restante = total - (agora - ultimoSkill2Player);
      elSkill2.textContent = restante > 50 ? (restante / 1000).toFixed(1) + "s" : "";
    }
  }
}

let cooldownUiTimer = null;
function iniciarTimerCooldownUi() {
  if (cooldownUiTimer !== null) return;
  atualizarCooldownsBotoes();
  cooldownUiTimer = setInterval(() => {
    if (!jogoAtivo || pausado) return;
    atualizarCooldownsBotoes();
  }, 100);
}
function pararTimerCooldownUi() {
  if (cooldownUiTimer !== null) {
    clearInterval(cooldownUiTimer);
    cooldownUiTimer = null;
  }
}

function atualizarBatalha(timestamp) {
  rafBatalhaId = null;
  if (!jogoAtivo || pausado) return;

  const agora = Date.now();
  const tempoFrame = Number.isFinite(timestamp) ? timestamp : performance.now();
  const deltaSegundos = Math.min(0.05, Math.max(0, (tempoFrame - ultimoFrameEm) / 1000));
  ultimoFrameEm = tempoFrame;

  if (agora - ultimoSegundoTimer >= 1000) {
    const segundosPassados = Math.floor((agora - ultimoSegundoTimer) / 1000);
    tempoRestanteBatalha = Math.max(0, tempoRestanteBatalha - segundosPassados);
    ultimoSegundoTimer += segundosPassados * 1000;
    atualizarTimerBatalha();
    if (tempoRestanteBatalha <= 0) {
      jogoAtivo = false;
      pararTimerCooldownUi();
      aoPerderBatalha();
      return;
    }
  }

  atualizarMovimentoPersonagem(deltaSegundos);
  atualizarMovimentoInimigo(deltaSegundos);
  atualizarCameraBatalha();

  if (agora - ultimoSkill1Player >= COOLDOWN_SKILL1_PLAYER * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1)) {
    atirarSkill1(x, y, "player");
    ultimoSkill1Player = agora;
  }
  if (agora - ultimoSkill1Inimigo >= COOLDOWN_SKILL1_INIMIGO) {
    atirarSkill1(inimigoX, inimigoY, "inimigo");
    ultimoSkill1Inimigo = agora;
  }
  const kitSkill2Inimigo = bossKits[bossAtual.tier || bossAtual.id].skill2;
  if (kitSkill2Inimigo.length > 0) {
    const menorCooldown = Math.min.apply(null, kitSkill2Inimigo.map(function (id) { return cooldownSkill2Inimigo[id]; }));
    if (agora - ultimoSkill2Inimigo >= menorCooldown) { atirarSkill2("inimigo"); ultimoSkill2Inimigo = agora; }
  }

  const dt60 = Math.min(3, Math.max(0, deltaSegundos * 60));
  poderes.forEach(function (p) { aplicarAutoguiado(p, inimigoX, inimigoY, p.autoguiado, dt60); moverProjetil(p, dt60); });
  poderesInimigo.forEach(function (p) { aplicarAutoguiado(p, x, y, p.autoguiado, dt60); moverProjetil(p, dt60); });

  feixesAtivos.forEach(function (f) { if (f.comprimentoAtual < f.comprimentoMax) f.comprimentoAtual += 23.4 * dt60; });

  poderes = poderes.filter(function (p) {
    if (distanciaEntre(p.x, p.y, inimigoX, inimigoY) < 60) {
      vidaEnemy = Math.max(vidaEnemy - p.dano, 0);
      if(typeof registrarDanoMissao==='function')registrarDanoMissao(p.dano);
      registrarGolpe("player");
      piscarDano("inimigo");
      criarNumeroDano(p.dano, inimigoX, inimigoY - 60, "#ff8a8a");
      atualizarBarrasBatalha();
      if (String(p.tipoSkill || '').indexOf('__skill2_') === 0 && window.playSfx) playSfx('Impacto.mp3', 0.20);
      return false;
    }
    return agora - p.criadoEm < VIDA_UTIL_PODER_MS;
  });

  poderesInimigo = poderesInimigo.filter(function (p) {
    if (distanciaEntre(p.x, p.y, x, y) < 60) {
      vidaPlay = Math.max(vidaPlay - p.dano * (typeof getPlayerResistanceMultiplier==='function' ? getPlayerResistanceMultiplier() : 1), 0);
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
        if(typeof registrarDanoMissao==='function')registrarDanoMissao(f.dano);
        registrarGolpe("player");
        piscarDano("inimigo");
        criarNumeroDano(f.dano, inimigoX, inimigoY - 60, "#ff8a8a");
        if (window.playSfx) playSfx('Impacto.mp3', 0.20);
      } else {
        vidaPlay = Math.max(vidaPlay - f.dano * (typeof getPlayerResistanceMultiplier==='function' ? getPlayerResistanceMultiplier() : 1), 0);
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
  if (jogoAtivo && !pausado) agendarFrameBatalha();
}

const chanceDropUltimatePorTier = { 4: 0.09, 5: 0.10, 6: 0.20, 7: 0.30, 8: 0.40, 9: 0.50, 10: 0.85 };

function checarFimDaBatalha() {
  if (!jogoAtivo) return;

  if (vidaEnemy <= 0) {
    jogoAtivo = false;
    pararTimerCooldownUi();
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
    if (tier === 9 && Math.random() < 0.05 && !inventarioAtual.possuidos.includes("BlackholeSkill2")) {
      inventarioAtual.possuidos.push("BlackholeSkill2");
      if (typeof salvarProgresso === "function") salvarProgresso();
      alert("DROP RARO! BlackholeSkill2 — 5% no Boss 9!");
    }
    aoVencerBatalha(bossAtual.id, moedasGanhas, diamantesGanhos);
  } else if (vidaPlay <= 0) {
    jogoAtivo = false;
    pararTimerCooldownUi();
    aoPerderBatalha();
  }
}

const ataqueButton = document.getElementById("ataque");
if (ataqueButton) ataqueButton.addEventListener("click", function () {
  const agora = Date.now();
  if (agora - ultimoSkill1Player >= COOLDOWN_SKILL1_PLAYER * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1)) {
    atirarSkill1(x, y, "player");
    ultimoSkill1Player = agora;
  }
});

const skill2Button = document.getElementById("skill2");
if (skill2Button) skill2Button.addEventListener("click", function () {
  const agora = Date.now();
  if (!inventarioAtual || !inventarioAtual.equipados.skill2) {
    alert("Você ainda não tem uma skill 2 equipada — compra na loja.");
    return;
  }
  const cooldown = cooldownSkill2Player[inventarioAtual.equipados.skill2];
  const cdEfetivo = cooldown * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1);
  if (agora - ultimoSkill2Player >= cdEfetivo) { atirarSkill2("player"); ultimoSkill2Player = agora; }
});

window.addEventListener("keydown", function(evento) {
  if (!jogoAtivo || pausado) return;
  const tecla = evento.key.toLowerCase();
  if (tecla === "y") {
    const botao = document.getElementById("skill2");
    if (botao) botao.click();
  }
  if (tecla === "u") {
    const botao = document.getElementById("ultimate");
    if (botao) botao.click();
  }
});

const ultimateButtonHandler = document.getElementById("ultimate");
if (ultimateButtonHandler) ultimateButtonHandler.addEventListener("click", function () {
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
  if (!jogoAtivo) return;

  pausarBatalha();

  const modal = document.getElementById('modal-ultimate');
  const video = document.getElementById('video-ultimate');
  const videoSplit = document.getElementById('video-ultimate-split');
  const skip = document.getElementById('btn-skip-ultimate');
  const legenda = document.getElementById('legenda-ultimate');
  const pauseButton = document.getElementById('btn-pause');
  const battleControls = document.querySelector('#tela-jogo .battle-controls');
  const telaJogo = document.getElementById('tela-jogo');
  
  const pauseParent = pauseButton ? pauseButton.parentNode : null;
  const pauseNextSibling = pauseButton ? pauseButton.nextSibling : null;

  if (!modal || !video || !skip || !legenda) {
    aplicarDanoUltimate(dono);
    ultimoFrameEm = performance.now();
    continuarBatalha();
    return;
  }

  const numero = dono === 'player' && inventarioAtual?.equipados?.ultimate
    ? Number(String(inventarioAtual.equipados.ultimate).replace('Ultimate', ''))
    : null;

  const ultimateId = dono === 'player'
    ? String(inventarioAtual?.equipados?.ultimate || '')
    : 'Ultimate' + String(bossAtual?.id || numero || 1);

  const ultimateConfig = ULTIMATE_CONFIG_BY_ID[ultimateId];
  const nomeUltimate = dono === 'player'
    ? (ultimateConfig?.nome || 'Personagem')
    : (bossAtual?.nome || 'Boss');

  const frase = ultimateConfig?.frase || ((bossAtual?.nome || 'Boss') + ' libera sua Ultimate!');

  let terminou = false;
  const restaurarPause = () => {
    if (pauseButton) {
      if (!pauseButton.isConnected && pauseParent) {
        if (pauseNextSibling && pauseNextSibling.parentNode === pauseParent) pauseParent.insertBefore(pauseButton, pauseNextSibling);
        else pauseParent.appendChild(pauseButton);
      }
      pauseButton.hidden = false;
      pauseButton.removeAttribute('aria-hidden');
      pauseButton.style.display = '';
      pauseButton.style.visibility = '';
      pauseButton.style.opacity = '';
      pauseButton.style.pointerEvents = '';
    }
    if (battleControls) battleControls.style.visibility = '';
  };

  const limpar = () => {
    video.pause();
    video.removeAttribute('src');
    if (videoSplit) {
      videoSplit.pause();
      videoSplit.removeAttribute('src');
    }
    video.onerror = null;
    video.onended = null;
    if (videoSplit) {
      videoSplit.onerror = null;
      videoSplit.onended = null;
    }
    modal.classList.add('hidden');
    modal.classList.add('escondido');
    modal.classList.remove('dividido', 'fallback-ultimate');
    modal.style.display = '';
    if (telaJogo) telaJogo.classList.remove('ultimate-open');
    document.body.classList.remove('ultimate-playing');
    restaurarPause();
    if (window.restoreBossMusic) window.restoreBossMusic();
  };

  const finalizar = () => {
    if (terminou) return;
    terminou = true;
    limpar();
    aplicarDanoUltimate(dono);
    ultimoFrameEm = performance.now();
    continuarBatalha();
  };

  // O pause nunca fica visível por cima da Ultimate.
  if (telaJogo) telaJogo.classList.add('ultimate-open');
  document.body.classList.add('ultimate-playing');
  if (pauseButton) {
    pauseButton.hidden = true;
    pauseButton.setAttribute('aria-hidden', 'true');
    pauseButton.style.display = 'none';
    pauseButton.style.visibility = 'hidden';
    pauseButton.style.pointerEvents = 'none';
    // Remoção física: é a barreira final contra CSS legado e sobreposição.
    if (pauseButton.isConnected) pauseButton.remove();
  }
  if (battleControls) battleControls.style.visibility = 'hidden';
  video.controls = false;
  video.removeAttribute('controls');
  video.disablePictureInPicture = true;
  video.setAttribute('disablepictureinpicture', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');
  video.setAttribute('controlslist', 'nodownload noplaybackrate nofullscreen noremoteplayback');
  video.disableRemotePlayback = true;
  video.controls = false;
  video.removeAttribute('controls');
  video.style.pointerEvents = 'none';
  if (videoSplit) {
    videoSplit.controls = false;
    videoSplit.removeAttribute('controls');
    videoSplit.disablePictureInPicture = true;
    videoSplit.setAttribute('disablepictureinpicture', '');
    videoSplit.setAttribute('playsinline', '');
    videoSplit.setAttribute('webkit-playsinline', '');
    videoSplit.setAttribute('controlslist', 'nodownload noplaybackrate nofullscreen noremoteplayback');
    videoSplit.disableRemotePlayback = true;
  }
  modal.classList.remove('hidden', 'escondido');
  modal.style.display = 'flex';
  modal.style.position = 'fixed';
  modal.style.inset = '0';
  modal.style.width = '100vw';
  modal.style.height = '100dvh';
  modal.style.zIndex = '99999';
  video.style.width = '100vw';
  video.style.height = '100dvh';
  video.style.maxWidth = 'none';
  video.style.maxHeight = 'none';
  video.style.objectFit = 'cover';
  video.style.objectPosition = 'center center';
  if (window.duckBossMusic) window.duckBossMusic();

  
  legenda.textContent = nomeUltimate.toUpperCase() + ' — ' + frase;
  legenda.dataset.character = nomeUltimate;
  legenda.dataset.ultimateId = ultimateId;
  legenda.style.display = 'block';
  legenda.style.position = 'absolute';
  legenda.style.top = 'clamp(72px, 14vh, 150px)';
  legenda.style.left = '0';
  legenda.style.width = '100%';
  legenda.style.padding = '14px 18px';
  legenda.style.boxSizing = 'border-box';
  legenda.style.background = 'linear-gradient(180deg, rgba(0,0,0,.78), rgba(0,0,0,.18), transparent)';
  legenda.style.color = '#fff';
  legenda.style.fontWeight = '900';
  legenda.style.fontSize = 'clamp(16px,3.6vw,34px)';
  legenda.style.zIndex = '1000001';
  legenda.style.whiteSpace = 'normal';
  legenda.style.textAlign = 'center';
  legenda.style.textShadow = '0 3px 12px #000, 0 0 18px rgba(255,255,255,.65)';

  if (window.playUltimateVoice) window.playUltimateVoice(ultimateId);

  function tocarCandidatos(el, candidatos, fail) {
    let idx = 0;
    let carregando = false;

    const tentar = () => {
      if (terminou || carregando) return;
      if (idx >= candidatos.length) {
        fail();
        return;
      }

      carregando = true;
      const src = candidatos[idx++];
      el.src = src;
      el.muted = true;
      el.playsInline = true;
      el.preload = 'auto';
      el.controls = false;
      el.removeAttribute('controls');
      el.disablePictureInPicture = true;
      el.setAttribute('playsinline', '');
      el.style.display = 'block';
      el.classList.remove('hidden');

      const sucesso = () => {
        el.oncanplay = null;
        el.onerror = null;
        carregando = false;
        if (terminou) return;
        el.currentTime = 0;
        el.play().catch(() => {});
      };

      el.oncanplay = sucesso;
      el.onerror = () => {
        el.onerror = null;
        el.oncanplay = null;
        carregando = false;
        tentar();
      };

      
      el.onended = finalizar;
      el.load();
    };

    tentar();
  }

  const numeroVideo = Number(numero || bossAtual?.id || 1);
  const candidatos = [
    'Boss' + numeroVideo + '.mp4',
    (ultimateConfig?.nome || nomeUltimate) + 'Ultimate.mp4',
    (ultimateConfig?.nome || nomeUltimate) + 'Ultimate.gif',
    ultimateId + '.mp4',
    'Ultimate' + numeroVideo + '.mp4'
  ];

  if (videoSplit) videoSplit.classList.add('escondido');

  tocarCandidatos(video, candidatos, () => {
    
    modal.classList.add('fallback-ultimate');
    video.style.display = 'none';
    setTimeout(finalizar, 1700);
  });

  skip.onclick = finalizar;
}


function aplicarDanoUltimate(dono) {
  let danoUltimate;
  if (dono === "player") {
    const item = itensLoja.ultimate.find(function (u) { return u.id === inventarioAtual.equipados.ultimate; });
    danoUltimate = (item ? item.dano : 320) * (typeof getPlayerDamageMultiplier==='function' ? getPlayerDamageMultiplier() : 1) * (typeof getPlayerCritChance==='function' && Math.random() < getPlayerCritChance() ? 1.5 : 1);
    usosUltimatePlayerRestantes--;
    cargaUltimatePlayer = 0;
    golpesCausadosPlayer = 0; golpesRecebidosPlayer = 0;
    vidaEnemy = Math.max(vidaEnemy - danoUltimate, 0);
    if(typeof registrarDanoMissao==='function')registrarDanoMissao(danoUltimate);
    tremerTela();
    piscarDano("inimigo");
    criarNumeroDano(danoUltimate, inimigoX, inimigoY - 90, "#ffd23f");
  } else {
    const stats = statsPorTier[bossAtual.tier || bossAtual.id];
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