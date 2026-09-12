const skill1Defs = {
  RelampagoSkill1:{largura:173,altura:173,velocidade:6.66,dano:42,gif:"RelampagoSkill1.gif"},
  SomSkill1:{largura:167,altura:167,velocidade:6.75,dano:75,gif:"SomSkill1.gif"},
  CirculoSkill1:{largura:173,altura:173,velocidade:6.84,dano:125,gif:"CirculoSkill1.gif"},
  VentoSkill1:{largura:180,altura:180,velocidade:6.93,dano:210,gif:"VentoSkill1.gif"},
  AguaSkill1:{largura:186,altura:186,velocidade:7.02,dano:340,gif:"AguaSkill1.gif"},
  VenenoSkill1:{largura:193,altura:193,velocidade:7.11,dano:520,gif:"VenenoSkill1.gif"},
  SolSkill1:{largura:203,altura:203,velocidade:7.2,dano:820,gif:"SolSkill1.gif"},
  MeteoroSkill1:{largura:213,altura:213,velocidade:7.38,dano:1250,gif:"MeteoroSkill1.gif"}
};
const skill2Defs = {
  RaioSkill2:{tipo:"esfera",largura:189,altura:189,velocidade:6.39,dano:145,gif:"RaioSkill2.gif"},
  GeloSkill2:{tipo:"esfera",largura:196,altura:196,velocidade:6.48,dano:290,gif:"GeloSkill2.gif"},
  FuracaoSkill2:{tipo:"esfera",largura:203,altura:203,velocidade:6.57,dano:480,gif:"FuracaoSkill2.gif"},
  MetalSkill2:{tipo:"esfera",largura:210,altura:210,velocidade:6.66,dano:790,gif:"MetalSkill2.gif"},
  MagmaSkill2:{tipo:"esfera",largura:220,altura:220,velocidade:6.75,dano:1200,gif:"MagmaSkill2.gif"},
  AbismoSkill2:{tipo:"esfera",largura:214,altura:214,velocidade:6.84,dano:1750,gif:"AbismoSkill2.gif"},
  MeteoroSkill2:{tipo:"esfera",largura:202,altura:202,velocidade:6.93,dano:2350,gif:"MeteoroSkill2.gif"},
  SolSkill2:{tipo:"esfera",largura:251,altura:251,velocidade:7.02,dano:3100,gif:"SolSkill2.gif"},
  EstrelaSkill2:{tipo:"esfera",largura:261,altura:261,velocidade:7.11,dano:4100,gif:"EstrelaSkill2.gif"},
  BlackholeSkill2:{tipo:"feixe",comprimento:327,largura:162,dano:5900,gif:"BlackholeSkill2.gif"}
};
const COOLDOWN_SKILL1_PLAYER=900;
// Cooldown por skill1 do player: as 6 mais raras (maior dano) sobem pra 1s,
// as 2 comuns (Relampago e Som) continuam com o valor padrão acima. Nada
// mais muda (dano, velocidade, cooldown do inimigo/boss seguem iguais).
const cooldownSkill1Player={
  RelampagoSkill1:COOLDOWN_SKILL1_PLAYER,
  SomSkill1:COOLDOWN_SKILL1_PLAYER,
  CirculoSkill1:1000,
  VentoSkill1:1000,
  AguaSkill1:1000,
  VenenoSkill1:1000,
  SolSkill1:1000,
  MeteoroSkill1:1000
};
function cooldownSkill1Atual(){
  const eq=inventarioAtual&&inventarioAtual.equipados?inventarioAtual.equipados.skill1:null;
  return (eq&&cooldownSkill1Player[eq])?cooldownSkill1Player[eq]:COOLDOWN_SKILL1_PLAYER;
}
const COOLDOWN_SKILL1_INIMIGO=1650;
const cooldownSkill2Player={RaioSkill2:4200,GeloSkill2:4600,FuracaoSkill2:4800,MetalSkill2:5200,MagmaSkill2:5600,AbismoSkill2:6000,MeteoroSkill2:6600,SolSkill2:7100,EstrelaSkill2:7700,BlackholeSkill2:8300};
const cooldownSkill2Inimigo={RaioSkill2:6100,GeloSkill2:6500,FuracaoSkill2:6900,MetalSkill2:7300,MagmaSkill2:7800,AbismoSkill2:8000,MeteoroSkill2:8700,SolSkill2:8900,EstrelaSkill2:9300,BlackholeSkill2:10000};
// ===== BALANCEAMENTO (revisão) =====
// 1) VIDA dos bosses 6-10 crescia ~1,77-1,88x por tier, acumulando valores extremos
//    (110k/195k/345k/650k). Reduzido o crescimento a partir do tier 6 pra ~1,52-1,65x
//    (tier 1-5 mantidos — já tinham pace ok pra dificuldade progressiva no início).
// 2) danoUltimateFixo crescia muito mais devagar que a vida do boss (tirava 5,5% da
//    vida do boss1, mas só 0,15% da vida do boss10 — cada vez mais fraca no late game).
//    Ajustado pra manter fatia proporcional (~5,5%→2,2%), sem virar botão de vitória.
// 3) Vida do tier 8 estava sem sincronia com o menu.js (mesmo bug do item de baixo).
//    Vida dos tiers 9-10 reduzida (228k→220k / 346k→312k) continuando a MESMA curva
//    de desaceleração que já existia do tier 6 ao 8 — a Skill 1 para de evoluir no
//    tier 8, então o tempo pra abater o boss estava dando um salto brusco nos 2
//    últimos bosses em vez de crescer suave como no resto do jogo.
// Dano base de Skill1/Skill2, cooldown, overridesDano, moedas e diamantes NÃO alterados.
const statsPorTier={
  1:{vida:1900,recompensaMoedas:150,recompensaDiamantes:2,chanceDiamante:.70,danoUltimateFixo:105,overridesDano:{RelampagoSkill1:{dano:20,velocidade:5.22}}},
  2:{vida:4700,recompensaMoedas:330,recompensaDiamantes:4,chanceDiamante:.67,danoUltimateFixo:225,overridesDano:{SomSkill1:{dano:30,velocidade:5.4}}},
  3:{vida:9800,recompensaMoedas:760,recompensaDiamantes:8,chanceDiamante:.64,danoUltimateFixo:410,overridesDano:{CirculoSkill1:{dano:48,velocidade:5.49}}},
  4:{vida:19000,recompensaMoedas:1750,recompensaDiamantes:14,chanceDiamante:.61,danoUltimateFixo:720,overridesDano:{VentoSkill1:{dano:70,velocidade:5.58},RaioSkill2:{dano:105,velocidade:5.58}}},
  5:{vida:35000,recompensaMoedas:3500,recompensaDiamantes:24,chanceDiamante:.58,danoUltimateFixo:1190,overridesDano:{AguaSkill1:{dano:95,velocidade:5.67},GeloSkill2:{dano:155,velocidade:5.67}}},
  6:{vida:57750,recompensaMoedas:7600,recompensaDiamantes:40,chanceDiamante:.55,danoUltimateFixo:1790,overridesDano:{VenenoSkill1:{dano:125,velocidade:5.76},FuracaoSkill2:{dano:210,velocidade:5.76}}},
  7:{vida:93500,recompensaMoedas:16500,recompensaDiamantes:65,chanceDiamante:.52,danoUltimateFixo:2600,overridesDano:{SolSkill1:{dano:165,velocidade:5.85},MetalSkill2:{dano:285,velocidade:5.85}}},
  8:{vida:147500,recompensaMoedas:36000,recompensaDiamantes:100,chanceDiamante:.49,danoUltimateFixo:3800,overridesDano:{MeteoroSkill1:{dano:220,velocidade:5.94},MagmaSkill2:{dano:380,velocidade:5.94}}},
  9:{vida:220000,recompensaMoedas:82000,recompensaDiamantes:180,chanceDiamante:.46,danoUltimateFixo:5450,overridesDano:{SolSkill1:{dano:285,velocidade:6.03},MeteoroSkill1:{dano:285,velocidade:6.03},AbismoSkill2:{dano:500,velocidade:6.03}}},
  10:{vida:312000,recompensaMoedas:195000,recompensaDiamantes:350,chanceDiamante:.43,danoUltimateFixo:7600,overridesDano:{VenenoSkill1:{dano:360,velocidade:6.12},EstrelaSkill2:{dano:620,velocidade:6.12},SolSkill2:{dano:580,velocidade:6.12}}}
};
const bossKits={1:{skill1:["RelampagoSkill1"],skill2:[]},2:{skill1:["SomSkill1"],skill2:[]},3:{skill1:["CirculoSkill1"],skill2:[]},4:{skill1:["VentoSkill1"],skill2:["RaioSkill2"]},5:{skill1:["AguaSkill1"],skill2:["GeloSkill2"]},6:{skill1:["VenenoSkill1"],skill2:["FuracaoSkill2"]},7:{skill1:["SolSkill1"],skill2:["MetalSkill2"]},8:{skill1:["MeteoroSkill1"],skill2:["MagmaSkill2"]},9:{skill1:["SolSkill1","MeteoroSkill1"],skill2:["AbismoSkill2"]},10:{skill1:["VenenoSkill1"],skill2:["EstrelaSkill2","SolSkill2"]}};
function escolherAleatorio(lista){return lista[Math.floor(Math.random()*lista.length)]}
function clamp(valor,minimo,maximo){return Math.max(minimo,Math.min(maximo,valor))}


// "cor"/"cor2" = identidade visual do texto (tema do personagem/elemento), aplicada como
// gradiente real no texto (não só sombra) — combinação bem mais visível no celular.
const ULTIMATE_CONFIG_BY_ID = {
  Ultimate1: { nome: 'Arlan', frase: 'Vai leva uma Advertencia', cor: '#fff35c', cor2: '#3ad4ff' },
  Ultimate2: { nome: 'Marcos', frase: 'Eu dou a bunda', cor: '#ff4fd8', cor2: '#ff9ae6' },
  Ultimate3: { nome: 'Miguel', frase: 'A vanessa e Somente minha', cor: '#3ad4ff', cor2: '#7b8cff' },
  Ultimate4: { nome: 'Carlos', frase: 'Estou indignado', cor: '#39ff8a', cor2: '#1ad1c9' },
  Ultimate5: { nome: 'Lucas', frase: 'Hoje a noite vai pega fogo', cor: '#2f9bff', cor2: '#00eaff' },
  Ultimate6: { nome: 'Davi', frase: 'Vai se lasca', cor: '#39ff6a', cor2: '#a020ff' },
  Ultimate7: { nome: 'Arthur', frase: 'Isso tudo e Por voce Vanessa Receba todo meu Amor', cor: '#ffd700', cor2: '#ff9d1a' },
  Ultimate8: { nome: 'Vinicius', frase: 'Vou te Mata Arthur', cor: '#ff2d2d', cor2: '#ff8c1a' },
  Ultimate9: { nome: 'GuilermeChucro', frase: 'A vanessa nao e de Ninguem e Apenas minha', cor: '#a020ff', cor2: '#3d0f5c' },
  Ultimate10: { nome: 'PaulaoDoPneu', frase: 'Se ajoelha seu verme Insolente Insignificante', cor: '#1313d4', cor2: '#2c0104' }
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
  requestAnimationFrame(function () {
    el.classList.add("piscar-dano");
  });
}

function tremerTela() {
  // Tremor aplicado no VIEWPORT (janela visível), não na arena/câmera — evita
  // brigar com a transform da câmera (que agora é fixa) e deixa o efeito barato.
  const viewport = elementosBatalha.viewport || document.getElementById("viewport-jogo");
  if (!viewport) return;
  viewport.classList.remove("tremendo");
  requestAnimationFrame(function () {
    viewport.classList.add("tremendo");
  });
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

// Joystick de arrastar (substitui as setas ▲◀▼▶): mesmas variáveis movendo*
// continuam alimentando a física existente, só troca a forma de disparar.
(function configurarJoystickBoss() {
  const base = document.getElementById("boss-joystick-base");
  const knob = document.getElementById("boss-joystick-knob");
  if (!base || !knob) return;

  const RAIO = 32;
  const ZONA_MORTA = 8;
  let arrastando = false;
  let pointerId = null;

  function mover(clientX, clientY) {
    const rect = base.getBoundingClientRect();
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;
    let dx = clientX - centroX;
    let dy = clientY - centroY;
    const dist = Math.hypot(dx, dy);
    if (dist > RAIO) { dx = (dx / dist) * RAIO; dy = (dy / dist) * RAIO; }
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;

    movendoDireita = dx > ZONA_MORTA;
    movendoEsquerda = dx < -ZONA_MORTA;
    movendoBaixo = dy > ZONA_MORTA;
    movendoCima = dy < -ZONA_MORTA;
  }

  function soltar() {
    if (!arrastando) return;
    arrastando = false;
    pointerId = null;
    knob.classList.remove("arrastando");
    knob.style.transform = "translate(-50%, -50%)";
    movendoDireita = movendoEsquerda = movendoCima = movendoBaixo = false;
  }

  base.addEventListener("pointerdown", function (evento) {
    evento.preventDefault();
    arrastando = true;
    pointerId = evento.pointerId;
    knob.classList.add("arrastando");
    try { base.setPointerCapture(pointerId); } catch (_) {}
    mover(evento.clientX, evento.clientY);
  });
  base.addEventListener("pointermove", function (evento) {
    if (!arrastando || evento.pointerId !== pointerId) return;
    mover(evento.clientX, evento.clientY);
  });
  base.addEventListener("pointerup", soltar);
  base.addEventListener("pointercancel", soltar);
  base.addEventListener("lostpointercapture", soltar);
  base.addEventListener("contextmenu", function (evento) { evento.preventDefault(); });
})();

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
const velMax = 1.45;
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
// --- Mecânica exclusiva do boss PaulaoDoPneu (id 10): ao chegar em 50% de vida,
// toca um vídeo (skipável) e GuilermeChucro entra na luta como 2º boss.
// Guilherme só ataca (25% do dano do PaulaoDoPneu), nunca usa ultimate, e não tem
// vida própria — derrotar o PaulaoDoPneu já vence a luta (Guilherme "perde" junto).
let guilhermeAtivo = false;
let videoMeioBossMostrado = false;
let guilhermeX = 0, guilhermeY = 0;
let ultimoSkill1Guilherme = 0, ultimoSkill2Guilherme = 0;
const MULTIPLICADOR_DANO_GUILHERME = 0.25;

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

let battleSessionId = null;
let finalizandoBatalha = false;
window.arcaneDamagePromises = window.arcaneDamagePromises || new Set();

let danoPendenteAcumulado = 0;
let flushDanoTimer = null;
const INTERVALO_FLUSH_DANO_MS = 350;

// Junta os golpes que acertaram num período curto e manda pro servidor de uma vez só
// (em vez de 1 requisição de rede por golpe). O total registrado no servidor continua
// exatamente igual — só muda a frequência de rede, não o dano/lógica do jogo.
function flushDanoServidor() {
  if (flushDanoTimer !== null) { clearTimeout(flushDanoTimer); flushDanoTimer = null; }

  const battleId = window.arcaneBattleId || battleSessionId;
  const valor = danoPendenteAcumulado;
  danoPendenteAcumulado = 0;

  if (!battleId || !Number.isFinite(valor) || valor <= 0 || !window.supabaseClient) {
    return Promise.resolve();
  }

  const promessa = window.supabaseClient.rpc('registrar_dano_batalha', {
    p_battle_id: battleId,
    p_dano: valor
  }).then(({ error }) => {
    if (error) console.error('Erro ao registrar dano no servidor:', error);
  }).catch(error => {
    console.error('Erro ao registrar dano no servidor:', error);
  });

  window.arcaneDamagePromises.add(promessa);
  promessa.finally(() => window.arcaneDamagePromises.delete(promessa));
  return promessa;
}
window.flushDanoServidorPendente = flushDanoServidor;

function registrarDanoServidor(dano) {
  const valor = Number(dano || 0);
  if (!Number.isFinite(valor) || valor <= 0) return Promise.resolve();

  danoPendenteAcumulado += valor;
  if (flushDanoTimer === null) {
    flushDanoTimer = setTimeout(function () {
      flushDanoTimer = null;
      flushDanoServidor();
    }, INTERVALO_FLUSH_DANO_MS);
  }
  return Promise.resolve();
}
window.registrarDanoServidor = registrarDanoServidor;

function iniciarBatalha(boss, jogador, inventario, corAura) {
  finalizandoBatalha = false;
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
  guilhermeAtivo = false;
  videoMeioBossMostrado = false;

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
  finalizandoBatalha = false;
  if (typeof flushDanoServidor === 'function') flushDanoServidor();
  window.arcaneBattleId = null;
  window.arcaneBattleStartedAt = 0;
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

  // Boss em FÚRIA abaixo de 50% de vida — só toggle de classes visuais, sem alterar dano/stats.
  const emFuria = vidaEnemyMax > 0 && vidaEnemy > 0 && (vidaEnemy / vidaEnemyMax) <= 0.5;
  if (elementosBatalha.area) elementosBatalha.area.classList.toggle("boss-furia", emFuria);
  if (elementosBatalha.barraEnemy) elementosBatalha.barraEnemy.classList.toggle("barra-furia", emFuria);
  const spriteBossAtual = elementosSprites["inimigo"];
  if (spriteBossAtual) spriteBossAtual.classList.toggle("sprite-furia", emFuria);

  // Vida do PLAYER abaixo de 50% — só toggle visual (barra "pegando fogo"), sem tocar em dano/HP.
  const vidaPlayerCritica = vidaMax > 0 && vidaPlay > 0 && (vidaPlay / vidaMax) <= 0.5;
  if (elementosBatalha.barraPlay) elementosBatalha.barraPlay.classList.toggle("barra-perigo", vidaPlayerCritica);
}

function desenharBatalha() {
  ctxBatalha.clearRect(0, 0, canvasBatalha.width, canvasBatalha.height);

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
    ? (personagemEquipado === "PaulaoDoPneuBanner" ? "PaulaoDoPneuBanner.jpg" : personagemEquipado === "CarlosBanner" ? "CarlosBanner.webp" : personagemEquipado + ".webp")
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
  const imagensBoss = {
    1: 'Arlan.jpg',
    2: 'Marcos.jpg',
    3: 'Miguel.jpg',
    4: 'Carlos.jpg',
    5: 'Lucas.jpg',
    6: 'Davi.jpg',
    7: 'Arthur.jpg',
    8: 'Vinicius.jpg',
    9: 'GuilermeChucro.jpg',
    10: 'PaulaoDoPneu.jpg'
  };
  const imagemBoss = imagensBoss[Number(bossAtual?.id)] || (bossAtual?.nome ? bossAtual.nome + '.jpg' : 'Arlan.jpg');
  // Tamanho individual por boss (presença maior nos avançados). Não altera posição/lógica,
  // só o width/height passado pro posicionarSprite — fallback pro tamanho padrão se faltar.
  const bossTamanhos = { 1:150, 2:158, 3:165, 4:172, 5:180, 6:190, 7:200, 8:215, 9:235, 10:260 };
  const tamanhoBossAtual = bossTamanhos[Number(bossAtual?.id)] || TAMANHO_BOSS;
  const bossSprite = posicionarSprite("inimigo", imagemBoss, inimigoX, inimigoY, tamanhoBossAtual, tamanhoBossAtual, "sprite-boss", x < inimigoX);
  if (bossSprite && bossSprite.tagName === "IMG") {
    bossSprite.onerror = function () {
      this.onerror = null;
      this.src = imagemBoss;
      this.dataset.src = imagemBoss;
    };
  }

  if (guilhermeAtivo) {
    const spriteGuilherme = posicionarSprite("guilherme", "GuilermeChucro.jpg", guilhermeX, guilhermeY, 200, 200, "sprite-boss", x < guilhermeX);
    if (spriteGuilherme) idsUsados.add("guilherme");
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

  // Câmera FIXA: mostra a arena inteira sempre (sem seguir player/boss, sem zoom
  // ao atacar/receber dano). camX/camY permanecem 0 (setados em iniciarBatalha),
  // então o fundo do canvas também é desenhado sem pan — arena inteira visível.
  const escala = Math.min(viewportW / mundoW, viewportH / mundoH);
  const offsetX = (viewportW - mundoW * escala) / 2;
  const offsetY = (viewportH - mundoH * escala) / 2;
  const transform = `translate(${offsetX}px,${offsetY}px) scale(${escala})`;
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
  const velInimigoMax = 1.225;

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
  poder.x += poder.dirX * poder.velocidade * 0.5 * fator;
  poder.y += poder.dirY * poder.velocidade * 0.5 * fator;
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
    dano: stats.dano * (dono === 'player' && typeof getPlayerDamageMultiplier==='function' ? getPlayerDamageMultiplier() : 1) * (dono === 'player' && typeof getPlayerCritChance==='function' && Math.random() < getPlayerCritChance() ? 1.75 : 1) * (dono === 'guilherme' ? MULTIPLICADOR_DANO_GUILHERME : 1), velocidade: stats.velocidade, autoguiado: 0.05,
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
      dano: stats.dano * (dono === 'player' && typeof getPlayerDamageMultiplier==='function' ? getPlayerDamageMultiplier() : 1) * (dono === 'player' && typeof getPlayerCritChance==='function' && Math.random() < getPlayerCritChance() ? 1.75 : 1) * (dono === 'guilherme' ? MULTIPLICADOR_DANO_GUILHERME : 1), velocidade: stats.velocidade, autoguiado: 0.035,
      dono: dono, criadoEm: Date.now(), spriteId: "poder" + (proximoIdPoder++),
    });
  } else {
    const stats = dono === "player" ? def : statsDaSkillParaBoss(idSkill, def);
    const ang = Math.atan2(alvoY - origemY, alvoX - origemX);
    feixesAtivos.push({
      origemX: origemX, origemY: origemY, angulo: ang, idSkill: idSkill,
      comprimentoAtual: 0, comprimentoMax: def.comprimento, largura: def.largura,
      dano: stats.dano * (dono === 'guilherme' ? MULTIPLICADOR_DANO_GUILHERME : 1), dono: dono, jaAcertou: false,
      spriteId: "feixe" + (proximoIdPoder++),
    });
  }
}

function atualizarCooldownsBotoes() {
  const agora = Date.now();

  const elSkill1 = elementosBatalha.cooldownSkill1;
  if (elSkill1) {
    const cd1 = cooldownSkill1Atual() * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1);
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

  // Boss PaulaoDoPneu em 50% de vida: cutscene skipável, depois Guilherme entra na luta.
  if (bossAtual?.id === 10 && !videoMeioBossMostrado && vidaEnemy > 0 && vidaEnemy <= vidaEnemyMax * 0.5) {
    videoMeioBossMostrado = true;
    dispararCutsceneMeioBoss();
    return;
  }

  if (guilhermeAtivo) {
    guilhermeX = inimigoX - 100;
    guilhermeY = inimigoY + 40;
    if (agora - ultimoSkill1Guilherme >= COOLDOWN_SKILL1_INIMIGO) {
      atirarSkill1(guilhermeX, guilhermeY, "guilherme");
      ultimoSkill1Guilherme = agora;
    }
    const kitSkill2Paulao = bossKits[bossAtual.tier || bossAtual.id].skill2;
    if (kitSkill2Paulao.length > 0) {
      const menorCooldownGuilherme = Math.min.apply(null, kitSkill2Paulao.map(function (id) { return cooldownSkill2Inimigo[id]; }));
      if (agora - ultimoSkill2Guilherme >= menorCooldownGuilherme) { atirarSkill2("guilherme"); ultimoSkill2Guilherme = agora; }
    }
  }

  if (agora - ultimoSkill1Player >= cooldownSkill1Atual() * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1)) {
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
      registrarDanoServidor(p.dano);
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
        registrarDanoServidor(f.dano);
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

async function checarFimDaBatalha() {
  if (!jogoAtivo || finalizandoBatalha) return;

  if (vidaEnemy <= 0) {
    finalizandoBatalha = true;
    jogoAtivo = false;
    pararTimerCooldownUi();

    const tier = bossAtual.tier;
    const statsBoss = statsPorTier[tier];
    const moedasGanhas = statsBoss.recompensaMoedas;
    const diamantesBase = statsBoss.recompensaDiamantes;
    const diamantesGanhos = Math.random() < statsBoss.chanceDiamante ? diamantesBase : 0;

    const pendentes = Array.from(window.arcaneDamagePromises || []);
    if (typeof flushDanoServidor === 'function') pendentes.push(flushDanoServidor());
    if (pendentes.length) await Promise.allSettled(pendentes);

    if (typeof aoVencerBatalha === 'function') {
      await aoVencerBatalha(bossAtual.id, moedasGanhas, diamantesGanhos);
    } else {
      console.error('aoVencerBatalha não está disponível.');
    }
    return;
  }

  if (vidaPlay <= 0) {
    jogoAtivo = false;
    pararTimerCooldownUi();
    aoPerderBatalha();
  }
}

const ataqueButton = document.getElementById("ataque");
if (ataqueButton) ataqueButton.addEventListener("click", function () {
  const agora = Date.now();
  if (agora - ultimoSkill1Player >= cooldownSkill1Atual() * (typeof getPlayerCooldownMultiplier==='function' ? getPlayerCooldownMultiplier() : 1)) {
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

function dispararCutsceneMeioBoss() {
  if (!jogoAtivo) { ativarGuilherme(); return; }
  pausarBatalha();

  const modal = document.getElementById('modal-ultimate');
  const video = document.getElementById('video-ultimate');
  const skip = document.getElementById('btn-skip-ultimate');
  const legenda = document.getElementById('legenda-ultimate');
  const pauseButton = document.getElementById('btn-pause');
  const battleControls = document.querySelector('#tela-jogo .battle-controls');
  const telaJogo = document.getElementById('tela-jogo');

  if (!modal || !video || !skip || !legenda) {
    ativarGuilherme();
    ultimoFrameEm = performance.now();
    continuarBatalha();
    return;
  }

  let terminou = false;
  const limpar = () => {
    video.pause();
    video.removeAttribute('src');
    video.onerror = null;
    video.onended = null;
    modal.classList.add('hidden', 'escondido');
    modal.classList.remove('dividido', 'fallback-ultimate');
    modal.style.display = '';
    if (telaJogo) telaJogo.classList.remove('ultimate-open');
    document.body.classList.remove('ultimate-playing');
    if (pauseButton) {
      pauseButton.hidden = false;
      pauseButton.removeAttribute('aria-hidden');
      pauseButton.style.display = '';
      pauseButton.style.visibility = '';
      pauseButton.style.pointerEvents = '';
    }
    if (battleControls) battleControls.style.visibility = '';
    if (window.restoreBossMusic) window.restoreBossMusic();
  };

  const finalizar = () => {
    if (terminou) return;
    terminou = true;
    limpar();
    ativarGuilherme();
    ultimoFrameEm = performance.now();
    continuarBatalha();
  };

  if (telaJogo) telaJogo.classList.add('ultimate-open');
  document.body.classList.add('ultimate-playing');
  if (pauseButton) {
    pauseButton.hidden = true;
    pauseButton.setAttribute('aria-hidden', 'true');
    pauseButton.style.display = 'none';
    pauseButton.style.visibility = 'hidden';
    pauseButton.style.pointerEvents = 'none';
  }
  if (battleControls) battleControls.style.visibility = 'hidden';
  video.controls = false;
  video.removeAttribute('controls');
  video.style.pointerEvents = 'none';
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

  legenda.textContent = 'PaulaoDoPneu convoca GuilermeChucro!';
  legenda.style.display = 'block';
  legenda.style.position = 'absolute';
  legenda.style.top = 'clamp(72px, 14vh, 150px)';
  legenda.style.left = '0';
  legenda.style.width = '100%';
  legenda.style.textAlign = 'center';
  legenda.style.zIndex = '1000001';

  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.src = 'PauloMetadeVida.mp4';
  video.onended = finalizar;
  video.onerror = () => { setTimeout(finalizar, 300); };
  video.load();
  video.play().catch(() => {});

  skip.onclick = finalizar;
}

function ativarGuilherme() {
  guilhermeAtivo = true;
  const agoraGuilherme = Date.now();
  ultimoSkill1Guilherme = agoraGuilherme;
  ultimoSkill2Guilherme = agoraGuilherme;
  guilhermeX = inimigoX - 100;
  guilhermeY = inimigoY + 40;
}

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
  modal.style.setProperty('display', 'flex', 'important');
  modal.style.setProperty('position', 'fixed', 'important');
  modal.style.setProperty('inset', '0', 'important');
  modal.style.setProperty('width', '100vw', 'important');
  modal.style.setProperty('height', '100dvh', 'important');
  modal.style.setProperty('z-index', '99999', 'important');
  video.style.setProperty('width', '100vw', 'important');
  video.style.setProperty('height', '100dvh', 'important');
  video.style.setProperty('max-width', 'none', 'important');
  video.style.setProperty('max-height', 'none', 'important');
  video.style.setProperty('object-fit', 'cover', 'important');
  video.style.setProperty('object-position', 'center center', 'important');
  if (window.duckBossMusic) window.duckBossMusic();

  
  legenda.textContent = nomeUltimate.toUpperCase() + ' — ' + frase;
  legenda.dataset.character = nomeUltimate;
  legenda.dataset.ultimateId = ultimateId;
  const corUlt = ultimateConfig?.cor || '#fff';
  const corUlt2 = ultimateConfig?.cor2 || corUlt;
  legenda.style.display = 'block';
  legenda.style.position = 'absolute';
  legenda.style.top = 'clamp(72px, 14vh, 150px)';
  legenda.style.left = '0';
  legenda.style.width = '100%';
  legenda.style.padding = '14px 18px';
  legenda.style.boxSizing = 'border-box';
  // Fundo com brilho da cor da Ultimate + preto (pra manter leitura), tudo inline —
  // não depende de nenhum CSS externo carregar/vencer conflito de especificidade.
  legenda.style.background = 'radial-gradient(120% 160% at 50% 20%, ' + corUlt + '40, rgba(0,0,0,.8) 55%, rgba(0,0,0,.2) 80%, transparent)';
  legenda.style.setProperty('--ult-cor', corUlt);
  legenda.style.setProperty('--ult-cor2', corUlt2);
  legenda.classList.remove('legenda-ultimate-colorida');
  void legenda.offsetWidth;
  legenda.classList.add('legenda-ultimate-colorida');
  legenda.style.color = corUlt;
  legenda.style.fontWeight = '900';
  legenda.style.fontSize = 'clamp(16px,3.6vw,34px)';
  legenda.style.zIndex = '1000001';
  legenda.style.whiteSpace = 'normal';
  legenda.style.textAlign = 'center';
  // Halo de 2 cores também setado inline (redundante com a classe CSS de propósito —
  // garante que apareça mesmo se o CSS externo não carregar).
  legenda.style.textShadow = '0 3px 10px #000, -2px 0 12px ' + corUlt + ', 2px 0 12px ' + corUlt2 + ', 0 0 24px ' + corUlt + ', 0 0 40px ' + corUlt2;

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
        el.onloadeddata = null;
        el.onerror = null;
        carregando = false;
        if (terminou) return;
        el.currentTime = 0;
        el.play().catch(() => {});
      };

      el.oncanplay = sucesso;
      el.onloadeddata = sucesso;
      el.onerror = () => {
        el.onerror = null;
        el.oncanplay = null;
        el.onloadeddata = null;
        carregando = false;
        tentar();
      };

      
      el.onended = finalizar;
      el.load();
    };

    tentar();
  }

  const numeroVideo = Number(numero || bossAtual?.id || 1);
  const ULTIMATE_VIDEO_OVERRIDE = { Ultimate5: 'lucasUltimate.mp4', Ultimate10: 'pauloUltimate.mp4' };
  const candidatos = [
    ...(ULTIMATE_VIDEO_OVERRIDE[ultimateId] ? [ULTIMATE_VIDEO_OVERRIDE[ultimateId]] : []),
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
    registrarDanoServidor(danoUltimate);
    tremerTela();
    piscarDano("inimigo");
    criarNumeroDano(danoUltimate, inimigoX, inimigoY - 90, "#ab8406");
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