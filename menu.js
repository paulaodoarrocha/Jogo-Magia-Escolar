
const bosses = [
  {id:1,tier:1,nome:'Arlan',rank:'F',imagem:'Arlan.png',skill1:'RelampagoSkill1.gif'},
  {id:2,tier:2,nome:'Marcos',rank:'E',imagem:'Marcos.png',skill1:'SomSkill1.gif'},
  {id:3,tier:3,nome:'Miguel',rank:'C',imagem:'Miguel.png',skill1:'CirculoSkill1.gif'},
  {id:4,tier:4,nome:'Carlos',rank:'B',imagem:'Carlos.png',skill1:'VentoSkill1.gif',skill2:'RaioSkill2.gif'},
  {id:5,tier:5,nome:'Lucas',rank:'A',imagem:'Lucas.png',skill1:'AguaSkill1.gif',skill2:'GeloSkill2.gif'},
  {id:6,tier:6,nome:'Davi',rank:'AA+',imagem:'Davi.png',skill1:'VenenoSkill1.gif',skill2:'FuracaoSkill2.gif'},
  {id:7,tier:7,nome:'Arthur',rank:'S',imagem:'Arthur.png',skill1:'SolSkill1.gif',skill2:'MetalSkill2.gif'},
  {id:8,tier:8,nome:'Vinicius',rank:'SS',imagem:'Vinicius.png',skill1:'MeteoroSkill1.gif',skill2:'MagmaSkill2.gif'},
  {id:9,tier:9,nome:'GuilermeChucro',rank:'SSS+',imagem:'GuilermeChucro.png',skill1:'SolSkill1.gif',skill2:'AbismoSkill2.gif'},
  {id:10,tier:10,nome:'PaulaoDoPneu',rank:'Z+',imagem:'PaulaoDoPneu.png',skill1:'VenenoSkill1.gif',skill2:'EstrelaSkill2.gif'}
];
const bossStats={
  1:{vida:1900,moedas:200,diamantes:2},2:{vida:4700,moedas:330,diamantes:4},3:{vida:9800,moedas:760,diamantes:8},
  4:{vida:19000,moedas:1750,diamantes:14},5:{vida:35000,moedas:3500,diamantes:24},6:{vida:62000,moedas:7600,diamantes:40},
  7:{vida:110000,moedas:16500,diamantes:65},8:{vida:195000,moedas:36000,diamantes:100},9:{vida:345000,moedas:82000,diamantes:180},10:{vida:650000,moedas:195000,diamantes:350}
};
const bossRankInfo={
  F:{label:'RANK F',cls:'rank-f',color:'#dfe6f2'},E:{label:'RANK E',cls:'rank-e',color:'#72f5a0'},C:{label:'RANK C',cls:'rank-c',color:'#5eb5ff'},B:{label:'RANK B',cls:'rank-b',color:'#b178ff'},A:{label:'RANK A',cls:'rank-a',color:'#ffd34e'},'AA+':{label:'RANK AA+',cls:'rank-aa',color:'#ff8a4c'},S:{label:'RANK S',cls:'rank-s',color:'#ff4f77'},SS:{label:'RANK SS',cls:'rank-ss',color:'#42efff'},'SSS+':{label:'RANK SSS+',cls:'rank-sss',color:'#ff4fd8'},'Z+':{label:'RANK Z+',cls:'rank-z',color:'#ffffff'}
};
const rarityInfo={
  comum:{label:'Comum',cls:'rarity-comum tier-baixa'},incomum:{label:'Incomum',cls:'rarity-incomum tier-baixa'},raro:{label:'Raro',cls:'rarity-raro tier-baixa'},epico:{label:'Épico',cls:'rarity-epico tier-media'},
  lendario:{label:'Legendary',cls:'rarity-lendario tier-media'},mitico:{label:'Mytchial',cls:'rarity-mitico tier-media'},secreto:{label:'Secret',cls:'rarity-secreto tier-media'},divino:{label:'Divino',cls:'rarity-divino tier-alta'},
  celestial:{label:'Celestial',cls:'rarity-celestial tier-alta'},supremo:{label:'Supremo',cls:'rarity-supremo tier-alta'},ilimitado:{label:'Ilimitado',cls:'rarity-ilimitado tier-alta'},exclusivo:{label:'Exclusivo',cls:'rarity-exclusivo tier-alta'},indefinido:{label:'Transcendente',cls:'rarity-indefinido tier-alta'},transcendente:{label:'???',cls:'rarity-transcendente tier-alta'},especial:{label:'Especial',cls:'rarity-especial tier-alta'},hunge:{label:'Hunge',cls:'rarity-hunge tier-alta'}
};
const personagens = [
{id:'ArthurBanner',nome:'Arthur',tier:'Comum',raridade:'comum',arquivo:'ArthurBanner.webp',peso:50,buff:'+6% dano • +4% resistência'},
{id:'GuilermeChucroBanner',nome:'GuilermeChucro',tier:'Incomum',raridade:'incomum',arquivo:'GuilermeChucroBanner.webp',peso:15,buff:'+9% dano • +4% resistência • +5% recarga'},
{id:'LucasBanner',nome:'Lucas',tier:'Raro',raridade:'raro',arquivo:'LucasBanner.webp',peso:9,buff:'+12% dano • +6% resistência • +7% recarga'},
{id:'MarcosBanner',nome:'Marcos',tier:'Épico',raridade:'epico',arquivo:'MarcosBanner.webp',peso:7,buff:'+16% dano • +8% resistência • +7% recarga'},
{id:'CarlosBanner',nome:'Carlos',tier:'Legendary',raridade:'lendario',arquivo:'CarlosBanner.webp',imagem:'CarlosBanner.webp',peso:5,buff:'+22% dano • +10% resistência • +10% recarga • +6% Ultimate'},
{id:'MiguelBanner',nome:'Miguel',tier:'Mytchial',raridade:'mitico',arquivo:'MiguelBanner.webp',peso:4,buff:'+30% dano • +12% resistência • +12% recarga • +10% Ultimate'},
{id:'JapaBanner',nome:'Japa',tier:'Secret',raridade:'secreto',arquivo:'JapaBanner.webp',peso:3.5,buff:'+35% dano • +14% resistência • +14% recarga • +12% Ultimate • +3% crítico'},
{id:'ArlanBanner',nome:'Arlan',tier:'Secret',raridade:'secreto',arquivo:'ArlanBanner.webp',peso:3,buff:'+40% dano • +16% resistência • +15% recarga • +15% Ultimate • +4% crítico'},
{id:'ViniciusBanner',nome:'Vinicius',tier:'Divino',raridade:'divino',arquivo:'ViniciusBanner.webp',peso:2.5,buff:'+52% dano • +20% resistência • +18% recarga • +20% Ultimate • +6% crítico'},
{id:'JuliaBanner',nome:'Julia',tier:'Celestial',raridade:'celestial',arquivo:'JuliaBanner.webp',bannerImagem:'JuliaBanner.jpg',peso:1.8,buff:'+68% dano • +24% resistência • +21% recarga • +24% Ultimate • +8% crítico'},
{id:'PeidaLeiteBanner',nome:'PeidaLeite',tier:'Supremo',raridade:'supremo',arquivo:'PeidaLeiteBanner.webp',peso:1.4,buff:'+85% dano • +28% resistência • +24% recarga • +28% Ultimate • +10% crítico'},
{id:'KauanBanner',nome:'Kauan',tier:'Exclusivo',raridade:'exclusivo',arquivo:'KauanBanner.webp',peso:1,buff:'+105% dano • +32% resistência • +27% recarga • +34% Ultimate • +12% crítico'},
{id:'PaulaoDoPneuBanner',nome:'PaulaoDoPneu',tier:'Transcendente',raridade:'transcendente',arquivo:'PaulaoDoPneuBanner.jpg',imagem:'PaulaoDoPneuBanner.jpg',peso:.3,buff:'+125% dano • +36% resistência • +30% recarga • +40% Ultimate • +14% crítico'},
{id:'PetHunge',nome:'Beijo',tier:'Hunge',raridade:'hunge',arquivo:'Beijo.mp4',imagem:'Beijo.png',bannerImagem:'Beijo.png',peso:0,buff:'DANO = melhor personagem equipado +10% • +5% defesa • +5% recarga de Ultimate • +20% moedas • +5% diamantes'},
{id:'ChucroHunge',nome:'Chucro',tier:'Hunge',raridade:'hunge',arquivo:'Chucro.mp4',imagem:'Chucro.png',bannerImagem:'Chucro.png',peso:0,buff:'DANO = melhor personagem equipado +15% • +5% defesa • +10% recarga de Ultimate • +10% moedas • +10% diamantes'}
];
const pesoTotalBanner = personagens.reduce((total, p) => total + p.peso, 0);
personagens.forEach((p) => { p.chance = p.peso / pesoTotalBanner; });
const skills={
  skill1:[
    ['RelampagoSkill1','Relâmpago','comum',900,42],['SomSkill1','Som','incomum',2200,75],['CirculoSkill1','Círculo','raro',6500,125],['VentoSkill1','Vento','epico',17000,210],
    ['AguaSkill1','Água','lendario',45000,340],['VenenoSkill1','Veneno','mitico',115000,520],['SolSkill1','Sol','secret',320000,820],['MeteoroSkill1','Meteoro','especial',800000,1250]
  ].map(x=>({id:x[0],nome:x[1],raridade:x[2],preco:x[3],dano:x[4],gif:x[0]+'.gif'})),
  skill2:[
    ['RaioSkill2','Raio','comum',1500,145],['GeloSkill2','Gelo','raro',7000,290],['FuracaoSkill2','Furacão','epico',20000,480],['MetalSkill2','Metal','lendario',55000,760],
    ['MagmaSkill2','Magma','mitico',135000,1100],['AbismoSkill2','Abismo','Arcanjo',360000,1650],['MeteoroSkill2','Meteoro','especial',780000,2250],['SolSkill2','Sol','indefinido',1400000,3000],
    ['EstrelaSkill2','Estrela Astral','transcendente',2800000,4000],['BlackholeSkill2','Blackhole','secreto',0,5200]
  ].map(x=>({id:x[0],nome:x[1],raridade:x[2],preco:x[3],dano:x[4],gif:x[0]+'.gif'}))
};
const ultimateAudio = [
  'ArlanUltimate.mp3', 'MarcosUltimate.mp3', 'MiguelUltimate.mp3', 'CarlosUltimate.mp3',
  'LucasUltinate.mp3', 'DaviUltimate.mp3', 'ArthurUltimate.mp3', 'ViniciusUltimate.mp3',
  'GuilermeChucroUltimate.mp3', 'PaulaoDoPneuUltimate.mp3'
];

const ultimates = bosses.map((boss, index) => ({
  id: 'Ultimate' + boss.id,
  nome: 'Ultimate ' + boss.nome,
  raridade: ['comum', 'incomum', 'raro', 'epico', 'lendario', 'mitico', 'Arcanjo', 'secreto', 'divino', 'celestial', 'supremo'][index],
  preco: [2500, 5000, 9000, 16000, 28000, 48000, 85000, 150000, 260000, 450000][index],
  dano: [320, 560, 900, 1400, 2100, 3100, 4400, 6200, 8500, 11500][index],
  video: 'Boss' + boss.id + '.mp4',
  audio: ultimateAudio[index]
}));
const gamepasses=[['2x Money','4,99','Dobra as moedas das vitórias.'],['2x Diamantes','3,99','Dobra os diamantes das vitórias.'],['2x Chance Diamantes','3,49','Dobra a chance de encontrar diamantes.'],['Multi Open','5,99','Girar (4) abre +3 extras: 7 no total.'],['Lucky Raro','1,99','Aumenta em 30% a sorte de todos os personagens Raros (não afeta só o melhor equipado).']];
const SAVE = 'arcaneClashSaveV6';
let bossSelecionadoId = null;
let lifeUpgrades = 0;
let moedasGlobais = 500;
let diamantesGlobais = 10;
let bossesDerrotados = [];
let bossKills = {};
let musicaLigada = true;
let autoSpin = false;
let tutorialStep = 0;
let compraSkill2Obrigatoria = false;
let missionProgress = { boss1: 0 };
let fused = {};
let claimed = {};
let fusionBonuses = {};
let bannerAnimating = false;
let dailySpinAt = 0;
let dailyLoginLastAt = 0;
let dailyLoginDay = 1;
let dailyLoginShown = false;
let dailyWheelAnimating = false;
let dailyWheelRotation = 0;
let redeemedCodes = {};
let bonusFreeSpins = 0;
let batalhaMusicaLigada = true;
const pocoes = { lucky: 0, damage: 0, coins: 0 };
const pocoesAtivas = { lucky: 0, damage: 0, coins: 0 };
const missionReadyNotified = new Set();
const jogador={nome:'PauloLordy',imagem:'Paulo.jpg'};
const inventario={possuidos:['RelampagoSkill1'],equipados:{skill1:'RelampagoSkill1',skill2:null,ultimate:null,imagem:null,tema:null}};
const rarityBuff={comum:{dmg:.05,res:.03,cd:.00,ult:.00,crit:.00,move:.00},incomum:{dmg:.08,res:.04,cd:.05,ult:.00,crit:.00,move:.01},raro:{dmg:.11,res:.06,cd:.07,ult:.02,crit:.01,move:.03},epico:{dmg:.15,res:.08,cd:.07,ult:.06,crit:.02,move:.04},lendario:{dmg:.20,res:.10,cd:.10,ult:.09,crit:.03,move:.05},mitico:{dmg:.27,res:.12,cd:.12,ult:.12,crit:.03,move:.06},secreto:{dmg:.36,res:.16,cd:.15,ult:.16,crit:.04,move:.07},divino:{dmg:.48,res:.20,cd:.17,ult:.20,crit:.06,move:.08},celestial:{dmg:.62,res:.24,cd:.20,ult:.24,crit:.08,move:.09},supremo:{dmg:.78,res:.28,cd:.23,ult:.28,crit:.10,move:.10},ilimitado:{dmg:1.05,res:.34,cd:.27,ult:.36,crit:.13,move:.11},exclusivo:{dmg:1.25,res:.38,cd:.30,ult:.43,crit:.15,move:.12},indefinido:{dmg:1.55,res:.43,cd:.34,ult:.50,crit:.17,move:.13},transcendente:{dmg:1.70,res:.46,cd:.37,ult:.56,crit:.19,move:.14}};
function save(){try{localStorage.setItem(SAVE,JSON.stringify({moedasGlobais,diamantesGlobais,bossesDerrotados,bossKills,musicaLigada,tutorialStep,missionProgress,fused,claimed,fusionBonuses,lifeUpgrades,inventario,dailySpinAt,dailyLoginLastAt,dailyLoginDay,pocoes,pocoesAtivas,redeemedCodes,bonusFreeSpins,batalhaMusicaLigada}));}catch(e){}}
window.salvarProgresso=save;
function load(){
  try{
    const d=JSON.parse(localStorage.getItem(SAVE)||'null'); if(!d)return;
    moedasGlobais=Number.isFinite(d.moedasGlobais)?d.moedasGlobais:moedasGlobais;
    diamantesGlobais=Number.isFinite(d.diamantesGlobais)?d.diamantesGlobais:diamantesGlobais;
    bossesDerrotados=Array.isArray(d.bossesDerrotados)?d.bossesDerrotados:[];
    bossKills=d.bossKills||{}; musicaLigada=d.musicaLigada!==false; batalhaMusicaLigada=d.batalhaMusicaLigada!==false;
    tutorialStep=Number(d.tutorialStep||0); missionProgress=d.missionProgress||{boss1:0};
    fused=d.fused||{}; claimed=d.claimed||{}; fusionBonuses=d.fusionBonuses||{}; lifeUpgrades=Number(d.lifeUpgrades||0); bonusFreeSpins=Number(d.bonusFreeSpins||0); dailySpinAt=Number(d.dailySpinAt||0); dailyLoginLastAt=Number(d.dailyLoginLastAt||0); dailyLoginDay=Number(d.dailyLoginDay||1);
    dailySpinAt=Number(d.dailySpinAt||0); dailyLoginLastAt=Number(d.dailyLoginLastAt||0); dailyLoginDay=Math.min(7,Math.max(1,Number(d.dailyLoginDay||1)));
    bonusFreeSpins=Math.max(0,Number(d.bonusFreeSpins||0)); redeemedCodes=(d.redeemedCodes&&typeof d.redeemedCodes==='object')?d.redeemedCodes:{};
    if(d.pocoes)Object.assign(pocoes,d.pocoes); if(d.pocoesAtivas)Object.assign(pocoesAtivas,d.pocoesAtivas);
    if(d.inventario){inventario.possuidos=Array.isArray(d.inventario.possuidos)?d.inventario.possuidos:[];inventario.equipados=Object.assign(inventario.equipados,d.inventario.equipados||{});}
    if(!inventario.possuidos.includes(inventario.equipados.imagem)||!personagens.some(p=>p.id===inventario.equipados.imagem))inventario.equipados.imagem=null;
  }catch(e){console.warn('Save inválido:',e)}
}
load();
if (missionProgress.boss1 >= 3 && !inventario.equipados.skill2 && moedasGlobais >= 1500) compraSkill2Obrigatoria = true;


if(!inventario.possuidos.includes('RelampagoSkill1')) inventario.possuidos.push('RelampagoSkill1');
inventario.equipados.skill1='RelampagoSkill1';
save();


const idsPersonagensAtuais = new Set(personagens.map((personagem) => personagem.id));
inventario.possuidos = inventario.possuidos.filter((id) =>
  id === 'BalaMagicaSkill1' ||
  skills.skill1.some((item) => item.id === id) ||
  skills.skill2.some((item) => item.id === id) ||
  ultimates.some((item) => item.id === id) ||
  idsPersonagensAtuais.has(id)
);

if (!idsPersonagensAtuais.has(inventario.equipados.imagem)) {
  inventario.equipados.imagem = null;
}


if(tutorialStep===0 && inventario.possuidos.some(id=>personagens.some(p=>p.id===id)))tutorialStep=1;
if(tutorialStep<2 && inventario.equipados.imagem)tutorialStep=2;
if(tutorialStep<3 && (missionProgress.boss1||0)>=3)tutorialStep=3;
if(tutorialStep<4 && inventario.equipados.skill2)tutorialStep=4;
save();
function fmt(valor) {
  if (valor >= 1e6) {
    return (valor / 1e6).toFixed(valor % 1e6 ? 1 : 0) + 'm';
  }

  if (valor >= 1e4) {
    return (valor / 1e3).toFixed(valor % 1e3 ? 1 : 0) + 'k';
  }

  return String(Math.floor(valor));
}
function rarityColor(raridade) {

  const cores = {
    comum: '#f0f5ff',
    incomum: '#39ff7a',
    raro: '#2ec2ff',
    epico: '#b83bff',
    lendario: '#ffbe0b',
    mitico: '#ff2d55',
    secreto: '#ff2ecf',
    especial: '#ff5cf0',
    divino: '#17e9ff',
    celestial: '#5a7bff',
    supremo: '#ff17d4',
    ilimitado: '#ffffff',
    exclusivo: '#ffd200',
    indefinido: '#c23dff',
    transcendente: '#17ffd0',
    hunge: '#ffee00'
  };

  return cores[raridade] || '#ffffff';
}
function contarPersonagensNoInventario() {
  return inventario.possuidos.filter((id) => personagens.some((personagem) => personagem.id === id)).length;
}

function formatarTempoRestante(ms){ const total=Math.max(0,Math.floor(ms/1000)); const h=Math.floor(total/3600),m=Math.floor((total%3600)/60),sec=total%60; return [h,m,sec].map((v,i)=>i===0?String(v).padStart(2,'0'):String(v).padStart(2,'0')).join(':'); }
function updateResources() {
  const moedas = document.getElementById('moedas-menu');
  const diamantes = document.getElementById('diamantes-menu');
  const inventarioLabel = document.getElementById('inventario-banner-label');
  const dailyStatus = document.getElementById('daily-status');
  const giroLabel = document.getElementById('giro-gratis-label');
  const dailyWheelLabel = document.getElementById('daily-wheel-status');

  if (moedas) moedas.textContent = fmt(moedasGlobais);
  if (diamantes) diamantes.textContent = fmt(diamantesGlobais);
  if (inventarioLabel) {
    inventarioLabel.textContent = `Inventário: ${Math.min(50, contarPersonagensNoInventario())}/50`;
  }


  if (document.getElementById('tela-giro-diario')?.classList.contains('active') && !dailyWheelAnimating) {
    renderDailyWheel();
  }
  if (document.getElementById('tela-inventario')?.classList.contains('active')) {
    renderInventory('all');
  }

  const giroLivre = Date.now() >= dailySpinAt;
  const giroDiarioLivre = giroLivre;


  if (dailyStatus) {
    dailyStatus.textContent = giroLivre ? 'Disponível' : 'Em espera';
  }

  if (dailyWheelLabel) dailyWheelLabel.textContent = giroDiarioLivre ? 'Disponível agora 🎁' : 'Próximo em '+formatarTempoRestante(dailySpinAt-Date.now());

  if (giroLabel) {
    giroLabel.textContent = giroLivre
      ? '🎁 Giro grátis disponível'
      : '⏳ Próximo giro grátis: ' + formatarTempoRestante(dailySpinAt - Date.now());
  }

}

function criarBadge(elemento, valor) {
  let badge = elemento.querySelector('.ui-notification-badge');

  if (!valor) {
    if (badge) badge.remove();
    return;
  }

  if (!badge) {
    badge = document.createElement('span');
    badge.className = 'ui-notification-badge';
    elemento.appendChild(badge);
  }

  badge.textContent = valor > 9 ? '9+' : String(valor);
}

function updateNotificationBadges() {
  const prontos = missions
    ? missions.filter((mission) => !claimed[mission.id] && mission.check()).length
    : 0;

  const lojaDisponivel = [
    ...skills.skill2,
    ...ultimates
  ].filter((item) => {
    return item.preco > 0 &&
      !inventario.possuidos.includes(item.id) &&
      moedasGlobais >= item.preco;
  }).length;

  const bossesDisponiveis = bosses.filter((boss) => {
    const unlocked = boss.id === 1 || bossesDerrotados.includes(boss.id - 1);
    return unlocked && !bossesDerrotados.includes(boss.id);
  }).length;

  const personagensNovos = contarPersonagensNoInventario();
  const temaDisponivel = inventario.equipados.tema ? 0 : 1;

  document.querySelectorAll('[data-badge-target]').forEach((elemento) => {
    const alvo = elemento.dataset.badgeTarget;
    const valores = {
      banner: 0,
      dailywheel: Date.now() >= dailySpinAt ? 1 : 0,
      loja: lojaDisponivel,
      personagens: personagensNovos,
      missoes: prontos,
      bosses: bossesDisponiveis,
      temas: temaDisponivel,
      melhorias: moedasGlobais >= 1800 * (lifeUpgrades + 1) ? 1 : 0,
      inventario: personagensNovos
    };

    criarBadge(elemento, valores[alvo] || 0);
  });
}

function mostrarToast(texto, tipo = 'normal') {
  const area = document.getElementById('toast-area');
  if (!area) return;

  const toast = document.createElement('div');
  toast.className = `game-toast ${tipo}`;
  toast.textContent = texto;
  area.appendChild(toast);

  setTimeout(() => toast.remove(), 3600);
}

function aplicarMusicaLobby(ativada) {
  if (typeof window.setLobbyMusic !== 'function') return;
  window.setLobbyMusic(ativada);
}
document.addEventListener('pointerdown',()=>{if(document.getElementById('tela-menu')?.classList.contains('active')&&musicaLigada)aplicarMusicaLobby(true)},{once:false,passive:true});
function show(id) {
  // A navegação é sempre livre. A missão da Skill 2 informa a condição,
  // mas nunca sequestra os botões de voltar ou outras telas.
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.remove('hidden');
  target.classList.add('active');

  if (id === 'tela-bosses' || id === 'tela-boss-info' || id === 'tela-jogo') {
    // Música do lobby só é silenciada na área dos bosses e dentro da batalha.
    aplicarMusicaLobby(false);
  } else {
    aplicarMusicaLobby(musicaLigada);
  }

  if (id === 'tela-banner') renderBanner();
  if (id === 'tela-giro-diario') renderDailyWheel();
  if (id === 'tela-bosses') renderBosses();
  if (id === 'tela-personagens') renderCharacters();
  if (id === 'tela-missoes') renderMissions();
  if (id === 'tela-gamepass') renderGamepasses();
  if (id === 'tela-loja') renderShop(shopCategory || 'skill1');
  if (id === 'tela-inventario') renderInventory();
  if (id === 'tela-melhorias') renderUpgrades();
  if (id === 'tela-temas') renderThemes();
  if (id === 'tela-boss-info') renderBossInfo();
}

window.show = show;

function entrarNoJogo() {
  const loadingScreen = document.getElementById('tela-loading');
  const menuScreen = document.getElementById('tela-menu');

  if (!menuScreen) return;

  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.remove('active');
  });

  if (loadingScreen) loadingScreen.classList.remove('active');
  menuScreen.classList.add('active');
  menuScreen.classList.remove('hidden');
  updateResources();
  aplicarMusicaLobby(musicaLigada);
  setTimeout(showDailyLogin, 500);
}

window.entrarNoJogo = entrarNoJogo;


function bindNavigation() {
  
}


document.addEventListener('click', (event) => {
  const bossButton = event.target.closest('[data-boss-id]');
  if (bossButton && bossButton.dataset.bossId) {
    event.preventDefault();
    event.stopPropagation();
    startBoss(Number(bossButton.dataset.bossId));
    return;
  }

  const back = event.target.closest('[data-voltar]');
  if (back) {
    event.preventDefault();
    event.stopPropagation();
    show(back.dataset.voltar);
    return;
  }

  const nav = event.target.closest('[data-tela]');
  if (nav && !nav.id?.startsWith('btn-')) {
    event.preventDefault();
    show(nav.dataset.tela);
  }
}, true);

function loading() {
  const bar = document.getElementById('barra-loading');
  const text = document.getElementById('loading-percent');
  const button = document.getElementById('btn-entrar');

  if (!bar || !text || !button) return;

  let progress = 0;

  const timer = setInterval(() => {
    progress = Math.min(100, progress + 8 + Math.random() * 12);
    bar.style.width = progress + '%';
    text.textContent = Math.floor(progress) + '%';

    if (progress >= 100) {
      clearInterval(timer);
      button.classList.remove('hidden');
      button.disabled = false;
      text.textContent = '100%';
    }
  }, 120);
}

bindNavigation();
loading();
updateResources();
// Banner
function renderBanner(){
  updateResources();
  const autoButton=document.getElementById('btn-auto'),autoState=document.getElementById('auto-state');
  const invLabel=document.getElementById('inventario-banner-label');
  if(autoButton)autoButton.classList.toggle('active',autoSpin);
  if(autoState)autoState.textContent=autoSpin?'LIGADO':'DESLIGADO';
  if(invLabel)invLabel.textContent=`Inventário: ${contarPersonagensNoInventario()}/50`;
}

function weightedPick() {
  const lucky = potionAtiva('lucky');
  const pesos = personagens.map(p => ({p, peso: p.peso * (lucky && rareLuckyRarities.has(p.raridade) ? 1.5 : 1)}));
  const total = pesos.reduce((a,x)=>a+x.peso,0);
  const sorteio = Math.random()*total;
  let acumulado=0;
  for(const item of pesos){ acumulado += item.peso; if(sorteio <= acumulado) return item.p; }
  return pesos[pesos.length-1].p;
}
function setBannerButtons(desativado) {
  ['btn-girar-1', 'btn-girar-4', 'btn-auto'].forEach((id) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.disabled = desativado && id !== 'btn-auto';
  });
}
function startBannerAnimation(resultados, concluido) {
  bannerAnimating = true;
  setBannerButtons(true);

  const stage = document.querySelector('.banner-stage');
  const resultBox = document.getElementById('gacha-result');

  if (!stage || !resultBox) {
    bannerAnimating = false;
    setBannerButtons(false);
    return;
  }

  stage.classList.remove('banner-spinning');
  void stage.offsetWidth;
  stage.classList.add('banner-spinning');

  resultBox.classList.remove('hidden');
  resultBox.classList.add('gacha-revealing');
  resultBox.innerHTML = `
    <div class="gacha-spinner">
      <span>✦</span>
      <b>INVOCANDO...</b>
      <small>O destino está sendo decidido</small>
    </div>
  `;

  setTimeout(() => {
    stage.classList.remove('banner-spinning');
    resultBox.classList.remove('gacha-revealing');
    showResults(resultados);
    bannerAnimating = false;
    setBannerButtons(false);

    if (concluido) concluido();
  }, 1250);
}
function pull(count) {
  if (bannerAnimating) return;

  const espacosUsados = contarPersonagensNoInventario();

  if (espacosUsados >= 50) {
    alert('Inventário cheio (50/50). Exclua personagens antes de girar.');
    autoSpin = false;
    renderBanner();
    return;
  }

  if (count === 4 && espacosUsados > 46) {
    alert('Você precisa de pelo menos 4 espaços no inventário para GIRAR (4).');
    return;
  }

  const custo = count === 1 ? 500 : 1800;

  if (moedasGlobais < custo) {
    alert('Moedas insuficientes.');
    return;
  }

  moedasGlobais -= custo;
  if (window.playCoinsSound) playCoinsSound();

  const resultados = [];

  for (let i = 0; i < count && contarPersonagensNoInventario() < 50; i++) {
    const personagem = weightedPick();
    inventario.possuidos.push(personagem.id);
    resultados.push(personagem);
  }


  if (tutorialStep === 0 && resultados.length) {
    tutorialStep = 1;
  }

  save();
  updateResources();
  // Atualiza a coleção imediatamente somente se ela estiver aberta.
  // Isso evita criar dezenas de vídeos escondidos a cada giro.
  if (document.getElementById('tela-personagens')?.classList.contains('active')) renderCharacters();
  if (document.getElementById('tela-inventario')?.classList.contains('active')) renderInventory();

  startBannerAnimation(resultados, () => {
    
    if (document.getElementById('tela-personagens')?.classList.contains('active')) renderCharacters();
    if (document.getElementById('tela-inventario')?.classList.contains('active')) renderInventory();
    renderMissions();

    if (!autoSpin) return;

    const proximoCusto = count === 1 ? 500 : 1800;
    const possuiEspaco = contarPersonagensNoInventario() + count <= 50;

    if (moedasGlobais >= proximoCusto && possuiEspaco) {
      setTimeout(() => pull(count, false), 650);
    } else {
      autoSpin = false;
    }

    renderBanner();
  });
}
function bannerStaticSrc(p){
  if(!p)return 'BannerFoto.png';
  if(p.bannerImagem)return p.bannerImagem;

  if(p.imagem)return p.imagem;
  if(p.id==='PetHunge'||p.id==='ChucroHunge')return p.id+'.png';
  if(/\.webp$/i.test(p.arquivo||''))return p.arquivo.replace(/\.webp$/i,'_static.webp');
  return p.arquivo||'BannerFoto.png';
}

function bannerVideoHTML(src, className = '') {
  const p = String(src || '');
  const imagem = /\.(jpg|jpeg|png|webp|gif)$/i.test(p) ? p : (p.replace(/\.(mov|mp4|webm|ogg)$/i, '.webp'));
  return `<img class="${className}" src="${imagem}" alt="" draggable="false">`;
}

function ativarVideosBanner(container) {

  if (!container) return;
  container.querySelectorAll('video').forEach((video) => video.remove());
}

function showResults(resultados) {
  const box = document.getElementById('gacha-result');
  if (!box) return;

  box.classList.remove('hidden');
  box.innerHTML = `
    <div class="gacha-results-grid">
      ${resultados.map((personagem, index) => {
        const media = `<img class="pull-static-media" src="${bannerStaticSrc(personagem)}" alt="${personagem.nome}" draggable="false">`;
        return `<div class="pull-card ${rarityInfo[personagem.raridade]?.cls || ''}" style="--rarity:${rarityColor(personagem.raridade)};--delay:${index * 0.12}s">
          <div class="result-media">${media}</div>
          <div class="rarity-label">${personagem.tier} • ${(personagem.chance * 100).toFixed(personagem.chance < 0.01 ? 3 : 2)}%</div>
          <b>${personagem.nome}</b>
          <small>${personagem.buff}</small>
        </div>`;
      }).join('')}
    </div>`;

  ativarVideosBanner(box);
}
const btnGirar1 = document.getElementById('btn-girar-1');
const btnGirar4 = document.getElementById('btn-girar-4');
const btnAuto = document.getElementById('btn-auto');
const btnBannerInfo = document.getElementById('btn-banner-info');

if (btnGirar1) {
  btnGirar1.onclick = () => {
    if (bannerAnimating) return;
    pull(1, false);
  };
}

if (btnGirar4) {
  btnGirar4.onclick = () => pull(4, false);
}

if (btnAuto) {
  btnAuto.onclick = () => {
    if (bannerAnimating) return;
    autoSpin = !autoSpin;
    renderBanner();
  };
}

if (btnBannerInfo) {
  btnBannerInfo.onclick = renderBannerInfo;
}
function renderBannerInfo(){
  const s = document.getElementById('tela-banner-info');
  if (!s) return;

  s.innerHTML = `<button class="back-btn" data-voltar="tela-banner">←</button><div class="panel-head"><div><small>PROBABILIDADES E BUFFS</small><h2>INFO DO BANNER</h2></div></div><div class="characters-grid banner-info-grid">${personagens.map(p=>`<article class="character-card ${rarityInfo[p.raridade]?.cls||''}" style="--rarity:${rarityColor(p.raridade)}">${`<img src="${bannerStaticSrc(p)}" alt="${p.nome}" class="character-static-media" draggable="false">`}<h3>${p.nome}</h3><div class="rarity-label">${p.tier}</div><div class="chance">${(p.chance*100).toFixed(p.chance<.01?3:2)}% de chance</div><div class="muted">${p.buff}</div></article>`).join('')}</div>`;
  ativarVideosBanner(s);
  show('tela-banner-info');
}


const dailyWheelRewards=[
{id:'lucky',label:'🧪 Poção Lucky x1',chance:10,type:'potion',rarity:'raro',give:1},
{id:'damage',label:'⚔️ Poção Damage x1',chance:5,type:'potion',rarity:'epico',give:1},
{id:'coins100',label:'🪙 100 Moedas',chance:50,type:'coins',rarity:'comum',give:100},
{id:'coins500',label:'🪙 500 Moedas',chance:20,type:'coins',rarity:'incomum',give:500},
{id:'coins1k',label:'🪙 1K Moedas',chance:10,type:'coins',rarity:'raro',give:1000},
{id:'pet',label:'🐾 BEIJO',chance:1,type:'pet',rarity:'secreto',give:1},
{id:'doubleCoins',label:'🪙 2x Moedas',chance:2,type:'coinsMultiplier',rarity:'epico',give:1},
{id:'bonusSpin',label:'🎁 +1 Giro',chance:2,type:'bonusSpin',rarity:'raro',give:1}
];
function weightedDailyReward(){ const r=Math.random()*100; let a=0; for(const x of dailyWheelRewards){a+=x.chance;if(r<=a)return x;} return dailyWheelRewards[dailyWheelRewards.length-1]; }
function canDailySpin(){return Date.now()>=dailySpinAt;}
function renderDailyWheel(){
  const c=document.getElementById('daily-wheel-content'); if(!c)return;
  const dailyReady=canDailySpin();
  const bonus=Math.max(0,Number(bonusFreeSpins||0));
  const sectors=dailyWheelRewards.map((r,i)=>{
    const chanceClass = r.chance>=50?'chance-50':r.chance>=20?'chance-20':r.chance>=10?'chance-10':r.chance>=5?'chance-5':r.chance>=2?'chance-2':'chance-1';
    return `<div class="daily-wheel-sector sector-${i} ${chanceClass}" title="${r.chance}%"><span>${r.label}</span><b>${r.chance}%</b></div>`;
  }).join('');
  const freeButton = dailyReady
    ? '<button class="daily-spin-btn free-ready" id="daily-spin-free" type="button">🎁 RESGATAR GIRO GRÁTIS</button>'
    : `<button class="daily-spin-btn free-cooldown" id="daily-spin-free" type="button" disabled>⏳ PRÓXIMO GIRO <b>${formatarTempoRestante(dailySpinAt-Date.now())}</b></button>`;
  const bonusButton = bonus>0
    ? `<button class="bonus-spin-btn" id="daily-spin-bonus" type="button">🎰 GIRAR <b>1 GIRO</b><small>Você tem ${bonus}</small></button>`
    : '<button class="bonus-spin-btn no-spins" id="daily-spin-bonus" type="button">🎰 SEM GIROS BÔNUS<small>Toque para ver como conseguir</small></button>';
  c.innerHTML=`
    <div class="daily-wheel-layout">
      <aside class="daily-wheel-odds"><div class="wheel-side-title">CHANCES DOS PRÊMIOS</div>${dailyWheelRewards.map((r,i)=>`<div class="wheel-odd wheel-odd-${i}"><span>${r.label}</span><b>${r.chance}%</b></div>`).join('')}</aside>
      <main class="daily-wheel-main">
        <div class="wheel-topline"><div class="wheel-badge">🎡 GIRO DIÁRIO</div><div class="wheel-spin-counter" id="daily-spin-counter">🎰 ${bonus}</div></div>
        <div class="wheel-wrap"><div class="wheel-pointer">▼</div><div class="daily-wheel" id="daily-wheel">${sectors}<div class="wheel-center"><span>ARCANE</span><b>🎁</b><small>CLASH</small></div></div></div>
        <div class="daily-wheel-status-line" id="daily-wheel-status">${dailyReady?'Giro grátis disponível!':'Próximo giro grátis em '+formatarTempoRestante(dailySpinAt-Date.now())}</div>
        <div class="daily-wheel-actions">${freeButton}${bonusButton}</div>
        <div class="daily-buy-hint">Sem giro bônus? <b>Compre giros</b> nos pacotes abaixo. Ao ganhar um giro por code/recompensa, ele aparece automaticamente em <b>🎰 ${bonus}</b>.</div>
        <div class="daily-wheel-packs">
          <button class="paid-spin-btn" type="button" onclick="alert('Compra visual por enquanto. O pagamento real será conectado depois.')"><b>+1 GIRO</b><small>R$ 1,99</small></button>
          <button class="paid-spin-btn" type="button" onclick="alert('Compra visual por enquanto. O pagamento real será conectado depois.')"><b>+5 GIROS</b><small>R$ 8,99</small></button>
          <button class="paid-spin-btn" type="button" onclick="alert('Compra visual por enquanto. O pagamento real será conectado depois.')"><b>+10 GIROS</b><small>R$ 16,99</small></button>
        </div>
      </main>
      <aside class="daily-wheel-feature"><div class="feature-title">PRÊMIO ESPECIAL</div><img src="Beijo.png" alt="Hunge Beijo"><strong>🐾 BEIJO</strong><span>1% • Hunge</span><small>Melhor que seu personagem mas forte +10% Dano • +5% defesa • +20% moedas • +5% diamantes • Ultimate 5% mais rápida</small></aside>
    </div>
    <section class="daily-login-preview">
      <div class="daily-login-preview-head"><div><small>SEQUÊNCIA DE ENTRADA</small><h3>🎁 LOGIN DIÁRIO</h3></div><span>Dia ${dailyLoginDay}/7</span></div>
      <div class="daily-login-preview-grid">${dailyLoginRewards.map(r=>`<div class="daily-preview-day ${r.day===dailyLoginDay?'current':''} ${r.day<dailyLoginDay?'past':''}"><b>DIA ${r.day}</b><div class="daily-preview-icon">${r.day===7?'<img src="Chucro.png" alt="Chucro">':r.icon}</div><small>${r.title}</small></div>`).join('')}</div>
      <div class="daily-next-reward"><div class="daily-next-label">PRÓXIMA RECOMPENSA</div><div class="daily-next-main">${dailyLoginDay===7?'<img src="Chucro.png" alt="Chucro">':`<span>${dailyLoginRewards[dailyLoginDay-1].icon}</span>`}<div><b>${dailyLoginRewards[dailyLoginDay-1].title}</b><small>${dailyLoginRewards[dailyLoginDay-1].desc}</small></div></div></div>
    </section><div id="daily-wheel-result" class="daily-wheel-result hidden"></div>`;
  const free=document.getElementById('daily-spin-free'); if(free&&dailyReady)free.onclick=()=>spinDailyWheel('daily');
  const bonusBtn=document.getElementById('daily-spin-bonus'); if(bonusBtn)bonusBtn.onclick=()=>spinDailyWheel('bonus');
}
function spinDailyWheel(source='daily'){
  if(dailyWheelAnimating)return;
  if(source==='daily' && !canDailySpin()){renderDailyWheel();return;}
  if(source==='bonus' && Number(bonusFreeSpins||0)<=0){alert('Você não tem giros bônus agora. Resgate o giro grátis de 24h ou compre um pacote de giros.');return;}
  dailyWheelAnimating=true;
  if(source==='daily') dailySpinAt=Date.now()+24*60*60*1000;
  else bonusFreeSpins=Math.max(0,Number(bonusFreeSpins)-1);
  save(); updateResources();
  const reward=weightedDailyReward();
  const wheel=document.getElementById('daily-wheel'); if(!wheel){dailyWheelAnimating=false;return;}
  const idx=dailyWheelRewards.indexOf(reward); const sectorAngle=360/dailyWheelRewards.length;
  const target=360*6 + (360-(idx*sectorAngle+sectorAngle/2)); dailyWheelRotation+=target;
  wheel.style.setProperty('--wheel-rotation',dailyWheelRotation+'deg'); wheel.classList.add('is-spinning');
  setTimeout(()=>{wheel.classList.remove('is-spinning');applyDailyReward(reward);dailyWheelAnimating=false;renderDailyWheel();showDailyWheelReward(reward);},4200);
}
function applyDailyReward(reward){
  if(reward.type==='coins')moedasGlobais+=reward.give;
  if(reward.type==='potion')pocoes[reward.id]=(pocoes[reward.id]||0)+reward.give;
  if(reward.type==='pet'&&!inventario.possuidos.includes('PetHunge'))inventario.possuidos.push('PetHunge');
  if(reward.type==='coinsMultiplier')pocoes.coins=(pocoes.coins||0)+1;
  if(reward.type==='bonusSpin')bonusFreeSpins+=reward.give;
  save();updateResources();renderInventory();
}
function showDailyWheelReward(reward){
  const box=document.getElementById('daily-wheel-result');if(!box)return;
  const ultra=reward.chance<=2;
  const text=reward.type==='pet'?'🐾 BEIJO DESBLOQUEADO!':reward.label;
  const detail=reward.type==='pet'?'DANO = melhor personagem equipado +10% • +5% defesa • +20% moedas • +5% diamantes • Ultimate 5% mais rápida':reward.type==='potion'?'Poção adicionada ao Inventário • dura 5 minutos':reward.type==='coinsMultiplier'?'1,5x moedas por 5 minutos':reward.type==='bonusSpin'?'+1 giro bônus. Ele ficou salvo no contador 🎰.':'Recompensa adicionada à sua conta';
  box.className='daily-wheel-result '+(ultra?'ultra-reward':'rare-reward');
  box.innerHTML=`<div class="reward-burst">${'✦'.repeat(18)}</div><div class="reward-result-card"><div class="reward-chance">${reward.chance}% DE CHANCE</div>${reward.type==='pet'?'<img src="Beijo.png" alt="Beijo">':'<div class="reward-big-icon">'+(reward.type==='potion'?'🧪':reward.type==='bonusSpin'?'🎰':'🪙')+'</div>'}<small>VOCÊ GANHOU</small><h2>${text}</h2><p>${detail}</p><button class="small-btn primary" onclick="this.closest('.daily-wheel-result').classList.add('hidden')">CONTINUAR</button></div>`;
  setTimeout(()=>box.classList.remove('hidden'),30);
}
const dailyLoginRewards=[
 {day:1,icon:'🪙',title:'500 Moedas',desc:'Comece sua jornada com um reforço.',give:()=>{moedasGlobais+=500}},
 {day:2,icon:'💎',title:'100 Diamantes',desc:'Moeda premium para sua progressão.',give:()=>{diamantesGlobais+=100}},
 {day:3,icon:'🍀',title:'Poção de Lucky',desc:'Aumenta apenas as chances de raros ou melhores por 5 minutos.',give:()=>{pocoes.lucky++}},
 {day:4,icon:'⚔️',title:'Poção de Damage',desc:'1,5x dano por 5 minutos.',give:()=>{pocoes.damage++}},
 {day:5,icon:'🪙',title:'Poção de Moedas',desc:'1,5x moedas por 5 minutos.',give:()=>{pocoes.coins++}},
 {day:6,icon:'🪙💎',title:'10K Moedas + 100 Diamantes',desc:'Recompensa de veterano.',give:()=>{moedasGlobais+=10000;diamantesGlobais+=100}},
 {day:7,icon:'🐾',title:'ChucroHunge',desc:'Personagem exclusivo da sequência de 7 dias • jogável na arena.',give:()=>{if(!inventario.possuidos.includes('ChucroHunge'))inventario.possuidos.push('ChucroHunge')}}
];
function dailyLoginReady(){return !dailyLoginLastAt || Date.now()-dailyLoginLastAt>=24*60*60*1000;}
function prepareDailyLoginDay(){
  if(dailyLoginLastAt && Date.now()-dailyLoginLastAt>=48*60*60*1000) dailyLoginDay=1;
  dailyLoginDay=Math.min(7,Math.max(1,dailyLoginDay));
}
function showDailyLogin(){
  if (dailyLoginShown) return;
  prepareDailyLoginDay();
  dailyLoginShown = true;
  let old=document.getElementById('daily-login-overlay'); if(old)old.remove();

  const ready = dailyLoginReady();
  const firstVisit = !dailyLoginLastAt;
  const reward=dailyLoginRewards[dailyLoginDay-1];
  const overlay=document.createElement('div');
  overlay.id='daily-login-overlay';
  overlay.className='daily-login-overlay';

  overlay.innerHTML=`<div class="daily-login-modal">
    <div class="login-top"><span>🎁 RECOMPENSA DIÁRIA</span><b>DIA ${reward.day} / 7</b></div>
    <h2>${firstVisit ? 'BEM-VINDO!' : 'LOGIN DIÁRIO'}</h2>
    <p>${ready ? 'Sua recompensa está disponível. Colete para continuar sua sequência.' : 'Sua próxima recompensa já está garantida. Volte quando o tempo resetar.'}</p>
    <div class="login-days">${dailyLoginRewards.map(r=>`<div class="login-day ${r.day===reward.day?'today':''} ${r.day<reward.day?'past':''}">
      <b>DIA ${r.day}</b><span>${r.day===7?'<img src="Chucro.png" alt="Chucro">':r.icon}</span><small>${r.title}</small>
    </div>`).join('')}</div>
    <div class="login-today"><div class="login-reward-icon">${reward.day===7?'<img class="login-character-reward" src="Chucro.png" alt="Chucro">':reward.icon}</div>
      <div><small>${ready?'SUA RECOMPENSA DE HOJE':'PRÓXIMA RECOMPENSA'}</small><h3>${reward.title}</h3><p>${reward.desc}</p></div>
    </div>
    ${ready
      ? '<button class="daily-login-claim" onclick="claimDailyLogin()">✓ COLETAR RECOMPENSA</button>'
      : '<button class="daily-login-close" onclick="closeDailyLogin()">CONTINUAR</button>'}
  </div>`;
  document.body.appendChild(overlay);
}
function closeDailyLogin(){
  dailyLoginShown=false;
  document.getElementById('daily-login-overlay')?.remove();
}
window.closeDailyLogin=closeDailyLogin;
function claimDailyLogin(){
  if(!dailyLoginReady())return; prepareDailyLoginDay(); const reward=dailyLoginRewards[dailyLoginDay-1]; reward.give(); dailyLoginLastAt=Date.now(); dailyLoginDay=dailyLoginDay>=7?1:dailyLoginDay+1; dailyLoginShown=false; save(); updateResources(); renderInventory(); document.getElementById('daily-login-overlay')?.remove(); mostrarToast('🎁 '+reward.title+' coletado!', 'reward');
}
window.claimDailyLogin=claimDailyLogin;

// Characters
function count(id) {
  return inventario.possuidos.filter((itemId) => itemId === id).length;
}
function renderCharacters() {
  const total = contarPersonagensNoInventario();
  const ownedIds = [...new Set(inventario.possuidos.filter((id) => personagens.some((p) => p.id === id)))];
  const el = document.getElementById('personagens-contador');
  if (el) el.textContent = `${total}/50`;
  const c = document.getElementById('personagens-conteudo');
  if (!c) return;

  if (!ownedIds.length) {
    c.innerHTML = `<div class="empty-state character-empty alive-empty"><div class="empty-icon">🎴</div><b>SUA COLEÇÃO ESTÁ ESPERANDO</b><span>Gire o Banner para obter seu primeiro personagem.</span><button class="small-btn primary" onclick="show('tela-banner')">ABRIR BANNER</button></div>`;
    return;
  }

  
  const cards = ownedIds.flatMap((id) => {
    const p = personagens.find((x) => x.id === id);
    const n = count(id);
    const info = rarityInfo[p.raridade] || rarityInfo.comum;
    const fusedCount = fused[id] || 0;
    return Array.from({ length: n }, (_, index) => {
      const eq = inventario.equipados.imagem === id;
      const isFused = index >= n - fusedCount;
      return `
        <article class="character-card owned-only ${info.cls} ${eq ? 'equipped' : ''} ${isFused ? 'character-fused' : ''}" style="--rarity:${rarityColor(p.raridade)}">
          <div class="rarity-label">${p.tier}</div>
          <span class="copy-number">CÓPIA ${index + 1}/${n}</span>
          ${isFused ? '<div class="fused-badge">★ FUNDIDO</div>' : ''}
          <div class="asset-frame character-asset">
            ${/\.(mp4|webm|mov|ogg)$/i.test(p.arquivo||'') ? `<video src="${p.arquivo}" muted loop autoplay playsinline preload="metadata" class="character-static-media" onerror="this.style.display='none';this.nextElementSibling.classList.add('show-fallback')"></video>` : `<img src="${p.arquivo}" alt="${p.nome}" class="character-static-media" draggable="false" onerror="this.style.display='none';this.nextElementSibling.classList.add('show-fallback')">`}
            <div class="media-fallback"><strong>${p.nome.slice(0,2).toUpperCase()}</strong><span>${p.nome}</span></div>
          </div>
          ${eq ? '<div class="equipped-label">✓ EQUIPADO</div>' : ''}
          <h3>${p.nome}</h3>
          <div class="muted">${p.buff}</div>
          <div class="current-damage">⚔ Dano atual: +${danoAtualPercent(p, isFused)}%</div>
          <button class="small-btn ${eq ? 'primary' : ''}" onclick="equipCharacter('${id}')">${eq ? '✓ EQUIPADO' : 'EQUIPAR'}</button>
          <button class="small-btn danger-soft" onclick="deleteCharacter('${id}')">EXCLUIR ESTA CÓPIA</button>
        </article>`;
    });
  }).join('');

  
  const fusionControls = ownedIds.map((id) => {
    const p = personagens.find((x) => x.id === id);
    const n = count(id) - (fused[id] || 0);
    if (n < 5) return '';
    return `<button class="small-btn fusion-btn" onclick="fuseCharacter('${id}')">✦ FUNDIR 5 ${p.nome}</button>`;
  }).join('');

  c.innerHTML = `
    <div class="collection-toolbar bright-toolbar">
      <div><b>PERSONAGENS OBTIDOS</b><span>${total}/50 cópias • ${ownedIds.length}/${personagens.length} tipos</span></div>
      <div class="collection-toolbar-actions"><button class="small-btn best-equip-btn" onclick="equiparMelhores()">⭐ EQUIPAR MELHORES</button><button class="small-btn primary" onclick="show('tela-banner')">🎴 IR PARA O BANNER</button></div>
    </div>
    <div class="characters-grid owned-characters-grid">${cards}</div>
    <div class="fusion-toolbar">${fusionControls}</div>`;
  // Tela de Personagens usa a mídia normal (não é o Banner), então vídeos ficam ativos aqui.
}

function melhorPersonagemPossuido(){
  const ownedIds = [...new Set(inventario.possuidos.filter((id) => personagens.some((p) => p.id === id)))];
  let melhor = null, melhorScore = -1;
  ownedIds.forEach((id) => {
    const p = personagens.find((x) => x.id === id);
    if (!p) return;
    const fusedCount = fused[id] || 0;
    const isFused = fusedCount > 0;
    const score = (rarityBuff[p.raridade]?.dmg || 0) * (isFused ? (fusionBonuses[id] || 1) : 1);
    if (score > melhorScore) { melhorScore = score; melhor = id; }
  });
  return melhor;
}
function melhorItemPossuido(lista){
  let melhor = null, melhorScore = -1;
  lista.forEach((item) => {
    if (!inventario.possuidos.includes(item.id)) return;
    if (item.dano > melhorScore) { melhorScore = item.dano; melhor = item.id; }
  });
  return melhor;
}
function equiparMelhores(){
  let algo = false;
  const bestChar = melhorPersonagemPossuido();
  if (bestChar && inventario.equipados.imagem !== bestChar) { inventario.equipados.imagem = bestChar; algo = true; }
  const bestS1 = melhorItemPossuido(skills.skill1);
  if (bestS1 && inventario.equipados.skill1 !== bestS1) { inventario.equipados.skill1 = bestS1; algo = true; }
  const bestS2 = melhorItemPossuido(skills.skill2);
  if (bestS2 && inventario.equipados.skill2 !== bestS2) { inventario.equipados.skill2 = bestS2; algo = true; }
  const bestUlt = melhorItemPossuido(ultimates);
  if (bestUlt && inventario.equipados.ultimate !== bestUlt) { inventario.equipados.ultimate = bestUlt; algo = true; }
  save();
  renderCharacters();
  renderInventory();
  renderMissions();
  mostrarToast(algo ? '✓ Melhores equipados!' : 'Você já está com os melhores equipados.', 'reward');
}
window.equiparMelhores = equiparMelhores;

function equipCharacter(id) {
  const personagem = personagens.find((item) => item.id === id);
  if (!personagem || !inventario.possuidos.includes(id)) return;

  inventario.equipados.imagem = id;
  tutorialStep = Math.max(tutorialStep, 2);
  save();
  renderCharacters();
  renderInventory();
  renderMissions();
  mostrarToast('✓ ' + personagem.nome + ' equipado!', 'reward');
}
function deleteCharacter(id) {
  if (inventario.equipados.imagem === id) {
    alert('Desequipe esse personagem antes de excluir.');
    return;
  }

  const indice = inventario.possuidos.indexOf(id);
  if (indice < 0) return;

  inventario.possuidos.splice(indice, 1);
  save();
  renderCharacters();
  renderInventory();
  updateResources();
}

function danoAtualPercent(p, isFused){
  if(!p) return 0;
  const base = rarityBuff[p.raridade]?.dmg || 0;
  const mult = isFused ? (fusionBonuses[p.id]||1) : 1;
  return Math.round(((1+base)*mult - 1) * 1000)/10;
}

function mostrarFusaoVisual(p, bonusPercent){
  const overlay = document.createElement('div');
  overlay.className = 'fusion-overlay';
  overlay.innerHTML = `
    <div class="fusion-overlay-card ${rarityInfo[p?.raridade]?.cls || ''}" style="--rarity:${rarityColor(p?.raridade)}">
      <div class="fusion-shine"></div>
      <div class="fusion-sparkles">${'✦'.repeat(14)}</div>
      <div class="fusion-portrait-frame">
        <img src="${bannerStaticSrc(p)}" alt="${p?.nome || ''}" draggable="false">
      </div>
      <small>FUSÃO CONCLUÍDA</small>
      <h2>${p?.nome || ''}</h2>
      <div class="fusion-bonus">+${bonusPercent}% DE DANO</div>
      <p>As 5 cópias foram combinadas em uma versão fortalecida.</p>
      <button class="small-btn primary" onclick="this.closest('.fusion-overlay').remove()">CONTINUAR</button>
    </div>`;
  document.body.appendChild(overlay);
}

function fuseCharacter(id){
  const jaFundidas = fused[id] || 0;
  const naoFundidas = count(id) - jaFundidas;
  if (naoFundidas < 5) return;
  let removed = 0;
  inventario.possuidos = inventario.possuidos.filter(x => x === id && removed < 5 ? (removed++, false) : true);
  inventario.possuidos.push(id);
  fused[id] = jaFundidas + 1;
  const p = personagens.find(x => x.id === id), b = rarityBuff[p?.raridade] || rarityBuff.comum;
  if (!fusionBonuses[id]) fusionBonuses[id] = 1 + b.dmg * .5;
  save(); renderCharacters(); renderInventory(); updateResources();
  mostrarFusaoVisual(p, Math.round((fusionBonuses[id] - 1) * 100));
}

document.getElementById('btn-fundir').onclick=()=>{const id=[...new Set(inventario.possuidos)].find(x=>count(x)>=5&&!fused[x]);if(id)fuseCharacter(id);else alert('Tenha 5 cópias iguais e ainda não fundidas.')};
const hungeBuffs = {
  PetHunge: { damage: .10, defense: .05, ultimate: .05, coins: .20, diamonds: .05 },
  ChucroHunge: { damage: .15, defense: .05, ultimate: .10, coins: .10, diamonds: .10 }
};
const rareLuckyRarities = new Set(['raro','epico','lendario','mitico','secreto','divino','celestial','supremo','ilimitado','exclusivo','indefinido','transcendente']);
function potionAtiva(tipo) { return Number(pocoesAtivas[tipo] || 0) > Date.now(); }
function tempoPocao(tipo) { return Math.max(0, Number(pocoesAtivas[tipo] || 0) - Date.now()); }
function potionMultiplier(tipo) { return potionAtiva(tipo) ? 1.5 : 1; }
function getEquippedHungeBuff() { const id=inventario.equipados?.imagem; return id ? (hungeBuffs[id] || null) : null; }
function getPlayerCoinRewardMultiplier(){ const b=getEquippedHungeBuff(); return (1+(b?.coins||0))*potionMultiplier('coins'); }
function getPlayerDiamondRewardMultiplier(){ const b=getEquippedHungeBuff(); return 1+(b?.diamonds||0); }
function consumirPocao(tipo) {
  const nomes={lucky:'Poção de Lucky',damage:'Poção de Damage',coins:'Poção de Moedas'};
  if(!pocoes[tipo]) return;
  if(!confirm('Certeza que deseja consumir essa poção?\n\n'+nomes[tipo]+' ficará ativa por 5 minutos.')) return;
  pocoes[tipo]--;
  pocoesAtivas[tipo]=Math.max(Date.now(),Number(pocoesAtivas[tipo]||0))+5*60*1000;
  save(); renderInventory('potions'); mostrarToast('🧪 '+nomes[tipo]+' ativada por 5 minutos!', 'reward');
}
window.consumirPocao=consumirPocao;

function getEquippedCharacter() {
  return personagens.find((personagem) => personagem.id === inventario.equipados.imagem) || null;
}
function getBestBaseCharacter(){
  return [...new Set(inventario.possuidos)].map(id=>personagens.find(p=>p.id===id)).filter(Boolean).filter(p=>p.raridade!=='hunge').sort((a,b)=>(rarityBuff[b.raridade]?.dmg||0)-(rarityBuff[a.raridade]?.dmg||0))[0]||null;
}
function getPlayerDamageMultiplier(){
  const personagem=getEquippedCharacter(),hunge=getEquippedHungeBuff();
  let multiplicador=1;
  if(hunge){const melhor=getBestBaseCharacter();const melhorDano=melhor?(rarityBuff[melhor.raridade]?.dmg||0):0;multiplicador=1+melhorDano+(hunge.damage||0);}
  else if(personagem&&personagem.raridade!=='hunge')multiplicador=1+(rarityBuff[personagem.raridade]?.dmg||0);
  if(personagem&&fusionBonuses[personagem.id])multiplicador*=fusionBonuses[personagem.id];
  return multiplicador*potionMultiplier('damage');
}
function getPlayerResistanceMultiplier() {
  const personagem = getEquippedCharacter();
  return (1 - (personagem ? (rarityBuff[personagem.raridade]?.res || 0) : 0)) * (1 - (getEquippedHungeBuff()?.defense || 0));
}
function getPlayerCooldownMultiplier() {
  const personagem = getEquippedCharacter();
  return Math.max(0.45, 1 - (personagem ? (rarityBuff[personagem.raridade]?.cd || 0) : 0));
}
function getPlayerUltimateChargeMultiplier(){
  const personagem=getEquippedCharacter(),hunge=getEquippedHungeBuff(),baseChar=hunge?getBestBaseCharacter():personagem;
  const base=baseChar?(rarityBuff[baseChar.raridade]?.ult||0):0;
  return (1+base)*(1+(hunge?.ultimate||0));
}
function getPlayerMoveMultiplier() {
  const personagem = getEquippedCharacter();
  return 1 + (personagem ? (rarityBuff[personagem.raridade]?.move || 0) : 0);
}
function getPlayerCritChance() {
  const personagem = getEquippedCharacter();
  return personagem ? (rarityBuff[personagem.raridade]?.crit || 0) : 0;
}
function registrarDanoMissao(dano) {
  try {
    const atual = Number(localStorage.getItem('arcaneDamage') || 0);
    localStorage.setItem('arcaneDamage', String(atual + Number(dano || 0)));
  } catch (error) {
    
  }
}

const missionTiers = {
  facil:   { label:'MISSÕES FÁCEIS',   rarity:'#39ff7a', cls:'tier-baixa' },
  media:   { label:'MISSÕES MÉDIAS',   rarity:'#2ec2ff', cls:'tier-media' },
  dificil: { label:'MISSÕES DIFÍCEIS', rarity:'#ffbe0b', cls:'tier-alta'  }
};
const missions=[

{id:'tutorial-spin',tier:'facil',title:'1 • Primeiro giro',desc:'Faça seu primeiro giro no Banner.',reward:'🪙 500',check:()=>tutorialStep>=1},
{id:'tutorial-equip',tier:'facil',title:'2 • Equipe seu personagem',desc:'Equipe o personagem obtido no Banner.',reward:'🪙 500',check:()=>tutorialStep>=2},
{id:'tutorial-boss',tier:'facil',title:'3 • Primeira caça',desc:'Derrote Arlan 3 vezes.',reward:'🪙 700',check:()=>(bossKills[1]||0)>=3},
{id:'tutorial-skill',tier:'facil',title:'4 • Novo poder',desc:'Compre e equipe uma Skill 2.',reward:'🪙 1.000',check:()=>!!inventario.equipados.skill2},
{id:'damage25k',tier:'facil',title:'Sem piedade',desc:'Cause 25.000 de dano total.',reward:'🪙 500',check:()=>Number(localStorage.getItem('arcaneDamage')||0)>=25000},
{id:'battleVanessa',tier:'facil',title:'A batalha Pela Vanessa',desc:'Entre em uma batalha.',reward:'🪙 400',check:()=>localStorage.getItem('arcaneEnteredBattle')==='1'},

{id:'boss3-miguel',tier:'media',title:'Caçador de Miguel',desc:'Derrote Miguel 5 vezes.',reward:'🪙 1.000',check:()=>(bossKills[3]||0)>=5},
{id:'boss4-carlos',tier:'media',title:'Caçador de Carlos',desc:'Derrote Carlos 3 vezes.',reward:'🪙 2.000',check:()=>(bossKills[4]||0)>=3},
{id:'boss5-lucas',tier:'media',title:'Caçador de Lucas',desc:'Derrote Lucas 5 vezes.',reward:'🪙 5.000',check:()=>(bossKills[5]||0)>=5},
{id:'boss6-davi',tier:'media',title:'Caçador de Davi',desc:'Derrote Davi 5 vezes.',reward:'🪙 10.000',check:()=>(bossKills[6]||0)>=5},

{id:'boss7-arthur',tier:'dificil',title:'Caçador de Arthur',desc:'Derrote Arthur 6 vezes.',reward:'🪙 15.000',check:()=>(bossKills[7]||0)>=6},
{id:'boss8-vinicius',tier:'dificil',title:'Caçador de Vinicius',desc:'Derrote Vinicius 7 vezes.',reward:'🪙 20.000',check:()=>(bossKills[8]||0)>=7},
{id:'boss9-guilerme',tier:'dificil',title:'Caçador de Guilherme',desc:'Derrote Guilherme 10 vezes.',reward:'🪙 100.000',check:()=>(bossKills[9]||0)>=10},
{id:'damage100k',tier:'dificil',title:'Fúria Arcana',desc:'Cause 100.000 de dano total.',reward:'🪙 500',check:()=>Number(localStorage.getItem('arcaneDamage')||0)>=100000},
{id:'damage1m',tier:'dificil',title:'Devastador',desc:'Cause 1.000.000 de dano total.',reward:'🪙 100.000 + 🧪 Poção da Sorte + 🧪 Poção de Dano + 🧪 Poção de Moedas',check:()=>Number(localStorage.getItem('arcaneDamage')||0)>=1000000,extra:{pocoes:{lucky:1,damage:1,coins:1}}},
{id:'boss10-paulao',tier:'dificil',title:'O Fim do Pneu',desc:'Derrote Paulão do Pneu 8 vezes.',reward:'🪙 500.000 + todas as Poções + 15 Giros',check:()=>(bossKills[10]||0)>=8,extra:{pocoes:{lucky:3,damage:3,coins:3},spins:15}}
];
updateNotificationBadges();
function renderMissions() {
  const container = document.getElementById('missoes-conteudo');
  if (!container) return;

  const grupos = ['facil','media','dificil'].map((tierKey) => {
    const info = missionTiers[tierKey];
    const cards = missions.filter((m) => m.tier === tierKey).map((mission) => {
      const done = mission.check();
      const claimedMission = claimed[mission.id];

      if (done && !claimedMission && !missionReadyNotified.has(mission.id)) {
        missionReadyNotified.add(mission.id);
        setTimeout(() => mostrarToast('✓ Missão concluída: ' + mission.title, 'mission'), 80);
      }

      return `
        <article class="mission-card ${info.cls} ${done && !claimedMission ? 'ready' : ''}" style="--rarity:${info.rarity}">
          <div>
            <h3>${mission.title}</h3>
            <p>${mission.desc}</p>
            <div class="mission-progress">
              <i style="width:${done ? 100 : 0}%"></i>
            </div>
          </div>
          <div class="mission-reward">
            ${claimedMission
              ? '✓ CONCLUÍDA'
              : done
                ? `<button class="small-btn primary" onclick="claimMission('${mission.id}')">RESGATAR</button>`
                : mission.reward}
          </div>
        </article>
      `;
    }).join('');

    return `<div class="mission-tier-group"><h3 class="mission-tier-title" style="--rarity:${info.rarity}">${info.label}</h3><div class="missions-list">${cards}</div></div>`;
  }).join('');

  container.innerHTML = grupos;
  updateNotificationBadges();
}

function claimMission(id){
  if(claimed[id])return;
  const m=missions.find(x=>x.id===id);
  if(!m||!m.check())return;
  claimed[id]=true;
  const nums=(m.reward.match(/[\d.]+/g)||[]).map(x=>Number(x.replace(/\./g,'')));
  moedasGlobais+=nums[0]||0;
  if(!m.extra) diamantesGlobais+=nums[1]||0;
  if(m.extra){
    if(m.extra.diamantes) diamantesGlobais+=m.extra.diamantes;
    if(m.extra.pocoes){ for(const tipo in m.extra.pocoes){ pocoes[tipo]=(pocoes[tipo]||0)+m.extra.pocoes[tipo]; } }
    if(m.extra.spins) bonusFreeSpins=(bonusFreeSpins||0)+m.extra.spins;
  }
  
  save();updateResources();renderMissions();mostrarToast('🎁 Recompensa da missão resgatada!', 'reward');
}
// Shop
let shopCategory='skill1';
function renderShop(cat = 'skill1') {
  shopCategory = cat;
  const all = cat === 'skill1' ? skills.skill1 : cat === 'skill2' ? skills.skill2 : ultimates;
  const c = document.getElementById('loja-conteudo');
  if (!c) return;

  const cards = all.map((item) => {
    const owned = inventario.possuidos.includes(item.id);
    const key = cat === 'skill1' ? 'skill1' : cat === 'skill2' ? 'skill2' : 'ultimate';
    const eq = inventario.equipados[key] === item.id;
    const info = rarityInfo[item.raridade] || { label: item.raridade, cls: 'rarity-divino' };
    const media = item.gif || item.video;
    return `
      <article class="shop-card ${info.cls}" style="--rarity:${rarityColor(item.raridade)}">
        <div class="asset-frame shop-asset">
          ${/\.mp4$/i.test(media || '') ? `<video src="${media}" muted loop autoplay playsinline preload="metadata"></video>` : `<img src="${media || 'BannerFoto.png'}" alt="${item.nome}" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')">`}
          <div class="asset-fallback hidden"><strong>${item.nome.slice(0,2).toUpperCase()}</strong><span>${item.nome}</span></div>
        </div>
        <h3>${item.nome}</h3>
        <div class="rarity-label">${info.label}</div>
        <div class="stat-line">Dano <b>${item.dano}</b></div>
        <div class="stat-line">Preço <b>${item.preco ? fmt(item.preco) + ' 🪙' : 'DROP BOSS 9 • 5%'}</b></div>
        <button class="small-btn ${eq ? 'primary' : ''}" onclick="buyEquip('${cat}','${item.id}')">${eq ? 'EQUIPADO' : owned ? 'EQUIPAR' : item.preco ? 'COMPRAR' : 'DROP EXCLUSIVO'}</button>
      </article>`;
  }).join('');

  const lifeCost = 1800 * (lifeUpgrades + 1);
  const lifeTotal = 800 + calcularBonusVidaPermanente();
  c.innerHTML = `
    <div class="shop-tabs">
      <button class="shop-tab ${cat === 'skill1' ? 'active' : ''}" onclick="renderShop('skill1')">SKILL 1</button>
      <button class="shop-tab ${cat === 'skill2' ? 'active' : ''}" onclick="renderShop('skill2')">SKILL 2</button>
      <button class="shop-tab ${cat === 'ultimate' ? 'active' : ''}" onclick="renderShop('ultimate')">ULTIMATES</button>
      <button class="shop-tab" onclick="show('tela-melhorias')">❤️ MELHORIAS</button>
    </div>
    <div class="shop-grid">${cards}</div>
    <div class="life-upgrade featured-upgrade">
      <div><b>❤️ MELHORIAS DE VIDA</b><span>Vida atual: <strong>${fmt(lifeTotal)}</strong> • Nível ${lifeUpgrades}</span><small>Cada melhoria aumenta sua vida máxima em +500.</small></div>
      <button class="small-btn primary" onclick="buyLifeUpgrade()">+500 VIDA • 🪙 ${fmt(lifeCost)}</button>
    </div>`;
}

function buyEquip(cat,id){
  const key=cat==='skill1'?'skill1':cat==='skill2'?'skill2':'ultimate';
  const list=cat==='skill1'?skills.skill1:cat==='skill2'?skills.skill2:ultimates;
  const item=list.find(x=>x.id===id);if(!item)return;
  if(inventario.possuidos.includes(id)){inventario.equipados[key]=id;save();renderShop(cat);renderMissions();renderInventory();return;}
  if(id==='BlackholeSkill2'){alert('Blackhole só pode cair do Boss 9: 5% por vitória no Boss 9.');return;}
  const diamondCost=Math.max(5,Math.ceil((item.preco||0)/5000));
  if(moedasGlobais<(item.preco||0)){alert('Moedas insuficientes.');return;}
  if(diamantesGlobais<diamondCost){alert('Diamantes insuficientes.');return;}
  moedasGlobais-=item.preco;diamantesGlobais-=diamondCost;inventario.possuidos.push(id);inventario.equipados[key]=id;
  if(window.playCoinsSound)playCoinsSound();if(cat==='skill2'){tutorialStep=Math.max(tutorialStep,4);compraSkill2Obrigatoria=false;}
  save();updateResources();renderShop(cat);renderMissions();renderInventory();
}function calcularBonusVidaPermanente(){return lifeUpgrades*500}
function buyLifeUpgrade(){
  const cost=1800*(lifeUpgrades+1),diamondCost=Math.max(5,Math.ceil(cost/5000));
  if(moedasGlobais<cost){alert('Moedas insuficientes.');return;}
  if(diamantesGlobais<diamondCost){alert('Diamantes insuficientes.');return;}
  moedasGlobais-=cost;diamantesGlobais-=diamondCost;lifeUpgrades++;
  if(window.playCoinsSound)playCoinsSound();save();updateResources();renderShop(shopCategory);renderUpgrades();
}
window.itensLoja={ultimate:ultimates};
function renderInventory(tab = 'all') {
  const container = document.getElementById('inventario-conteudo');
  if (!container) return;
  const equipados = inventario.equipados || {};
  const ownedCharacterIds = [...new Set(inventario.possuidos.filter((id) => personagens.some((p) => p.id === id)))];
  const ownedSkills1 = skills.skill1.filter((item) => inventario.possuidos.includes(item.id));
  const ownedSkills2 = skills.skill2.filter((item) => inventario.possuidos.includes(item.id));
  const ownedUltimates = ultimates.filter((item) => inventario.possuidos.includes(item.id));
  const equippedCharacter = getEquippedCharacter();
  const equippedS1 = skills.skill1.find((x) => x.id === equipados.skill1);
  const equippedS2 = skills.skill2.find((x) => x.id === equipados.skill2);
  const equippedUlt = ultimates.find((x) => x.id === equipados.ultimate);

  const mediaCard = (src, fallback) => {
    const ehVideo = /\.(mp4|webm|mov|ogg)$/i.test(String(src || ''));
    const media = ehVideo
      ? `<video src="${src}" muted loop autoplay playsinline preload="metadata" onerror="this.style.display='none';this.nextElementSibling.style.opacity='1'"></video>`
      : `<img src="${src}" alt="${fallback}" onerror="this.style.display='none';this.nextElementSibling.style.opacity='1'">`;
    return `<div class="inventory-media">${media}<span class="media-fallback">${fallback}</span></div>`;
  };

  const loadout = (label, item, icon) => `<article class="loadout-card alive-loadout ${item ? (rarityInfo[item.raridade] || rarityInfo.comum).cls : 'empty-loadout'}" style="--rarity:${item ? rarityColor(item.raridade) : '#54dcff'}">
    <div class="loadout-icon">${icon}</div><div class="loadout-copy"><small>${label}</small><b>${item?.nome || 'NÃO EQUIPADO'}</b><span>${item?.buff || item?.tier || 'Escolha um item obtido'}</span></div></article>`;

  // DEPOIS
  const characterUnits = ownedCharacterIds.flatMap((id) => {
    const p = personagens.find((x) => x.id === id);
    const qty = count(id);
    const fusedCount = fused[id] || 0;
    return Array.from({length: qty}, (_, index) => {
      const isFused = index >= qty - fusedCount;
      return `<article class="pet-style-card inventory-unit ${rarityInfo[p.raridade]?.cls || ''} ${equipados.imagem === id ? 'equipped' : ''} ${isFused ? 'character-fused' : ''}" style="--rarity:${rarityColor(p.raridade)}">
      <div class="pet-card-top"><span class="rarity-label">${p.tier}</span><span class="pet-count">#${index + 1}</span></div>
      ${isFused ? '<div class="fused-badge">★ FUNDIDO</div>' : ''}
      <div class="pet-media asset-frame">${mediaCard(p.arquivo, p.nome.slice(0,2).toUpperCase())}</div>
      <div class="pet-name-row"><h3>${p.nome}</h3>${equipados.imagem === id ? '<span class="equipped-mini">✓ EQUIPADO</span>' : ''}</div>
      <div class="pet-rarity">${p.tier}</div><p>${p.buff}</p>
      <div class="current-damage">⚔ Dano atual: +${danoAtualPercent(p, isFused)}%</div>
      <button class="small-btn ${equipados.imagem === id ? 'primary' : ''}" onclick="equipCharacter('${p.id}')">${equipados.imagem === id ? '✓ EQUIPADO' : 'EQUIPAR'}</button>
    </article>`;
    });
  }).join('');

  const skillUnits = [...ownedSkills1, ...ownedSkills2].map((item) => `<article class="inventory-item-card ${rarityInfo[item.raridade]?.cls || ''}" style="--rarity:${rarityColor(item.raridade)}">
    ${mediaCard(item.gif, '⚡')}<span class="item-type">${skills.skill1.includes(item) ? 'SKILL 1' : 'SKILL 2'}</span><h3>${item.nome}</h3><b>DANO ${item.dano}</b><button class="small-btn ${equipados.skill1 === item.id || equipados.skill2 === item.id ? 'primary' : ''}" onclick="buyEquip('${skills.skill1.includes(item) ? 'skill1' : 'skill2'}','${item.id}')">${equipados.skill1 === item.id || equipados.skill2 === item.id ? '✓ EQUIPADA' : 'EQUIPAR'}</button>
  </article>`).join('');

  const ultimateUnits = ownedUltimates.map((item) => `<article class="inventory-item-card ultimate-owned ${rarityInfo[item.raridade]?.cls || ''}" style="--rarity:${rarityColor(item.raridade)}">
    ${mediaCard(item.video, 'ULT')}<span class="item-type">ULTIMATE</span><h3>${item.nome}</h3><b>DANO ${item.dano}</b><small>VÍDEO: ${item.video}</small><button class="small-btn ${equipados.ultimate === item.id ? 'primary' : ''}" onclick="buyEquip('ultimate','${item.id}')">${equipados.ultimate === item.id ? '✓ EQUIPADA' : 'EQUIPAR'}</button>
  </article>`).join('');

  const potionCard = (tipo,icon,nome,desc) => `<article class="potion-card ${potionAtiva(tipo)?'potion-active':''}"><div class="potion-icon">${icon}</div><div class="potion-copy"><small>POÇÃO</small><h3>${nome}</h3><p>${desc}</p><b>Quantidade: ${pocoes[tipo]||0}</b>${potionAtiva(tipo)?`<span class="potion-timer">ATIVA • ${formatarTempoRestante(tempoPocao(tipo))}</span>`:''}</div><button class="small-btn ${pocoes[tipo]?'primary':''}" onclick="consumirPocao('${tipo}')" ${pocoes[tipo]?'':'disabled'}>${potionAtiva(tipo)?'ADICIONAR +5 MIN':'CONSUMIR'}</button></article>`;
  const potionsHTML=`<section class="inventory-section potion-section"><div class="section-ribbon">🧪 POÇÕES</div><div class="potion-grid">${potionCard('lucky','🍀','Poção de Lucky','1,5x sorte • afeta somente personagens Raro ou melhores.')}${potionCard('damage','⚔️','Poção de Damage','1,5x dano durante 5 minutos.')}${potionCard('coins','🪙','Poção de Moedas','1,5x moedas recebidas durante 5 minutos.')}</div></section>`;
  const skillCount = ownedSkills1.length + ownedSkills2.length;
  container.innerHTML = `
    <section class="inventory-hero bright-hero"><div class="inventory-title-wrap"><div class="inventory-logo">🎒</div><div><small>ARSENAL VIVO</small><h3>MINHA COLEÇÃO</h3><p>${ownedCharacterIds.length} personagens • ${skillCount} skills • ${ownedUltimates.length} ultimates</p></div></div><div class="inventory-hero-actions"><button class="small-btn best-equip-btn" onclick="equiparMelhores()">⭐ EQUIPAR MELHORES</button><div class="inventory-capacity"><strong>${contarPersonagensNoInventario()}/50</strong><span>CÓPIAS</span><small>${ownedCharacterIds.length}/${personagens.length} personagens</small></div></div></section>
    <div class="inventory-tabs"><button class="inventory-tab ${tab==='all'?'active':''}" onclick="renderInventory('all')">🎒 TUDO</button><button class="inventory-tab ${tab==='characters'?'active':''}" onclick="renderInventory('characters')">👤 PERSONAGENS</button><button class="inventory-tab ${tab==='skills'?'active':''}" onclick="renderInventory('skills')">⚡ SKILLS</button><button class="inventory-tab ${tab==='potions'?'active':''}" onclick="renderInventory('potions')">🧪 POÇÕES</button></div>
    ${tab==='potions'?potionsHTML:`<section class="inventory-loadout-grid">${loadout('PERSONAGEM', equippedCharacter, '♟')}${loadout('SKILL 1', equippedS1, '⚡')}${loadout('SKILL 2', equippedS2, '✦')}${loadout('ULTIMATE', equippedUlt, '☄')}</section>
    ${tab==='all'||tab==='characters'?`<section class="inventory-section alive-section"><div class="section-ribbon">👤 PERSONAGENS • ${contarPersonagensNoInventario()} CÓPIAS</div><div class="inventory-pet-grid">${characterUnits || '<div class="empty-state">Gire o Banner para obter personagens.</div>'}</div></section>`:''}
    ${tab==='all'||tab==='skills'?`<section class="inventory-section alive-section"><div class="section-ribbon">⚡ SKILLS OBTIDAS • ${skillCount}</div><div class="inventory-item-grid">${skillUnits || '<div class="empty-state">Você ainda não possui Skills.</div>'}</div></section><section class="inventory-section alive-section"><div class="section-ribbon">☄ ULTIMATES OBTIDAS • ${ownedUltimates.length}</div><div class="inventory-item-grid">${ultimateUnits || '<div class="empty-state">Derrote bosses para encontrar Ultimates.</div>'}</div></section>`:''}`}
    <div class="inventory-shortcuts"><button class="small-btn primary" onclick="show('tela-giro-diario')">🎡 GIRO DIÁRIO</button><button class="small-btn primary" onclick="show('tela-personagens')">👤 PERSONAGENS</button><button class="small-btn primary" onclick="show('tela-loja')">⚡ LOJA DE SKILLS</button></div>`;
  // Inventário e Personagens mostram a mídia normal (com vídeo quando houver);
  // apenas o Banner força imagem estática. Por isso NÃO removemos vídeos aqui.
}

function equippedClass(equipado) {
  return equipado ? 'equipped' : '';
}

function renderUpgrades() {
  const c = document.getElementById('melhorias-conteudo');
  if (!c) return;
  const atual = 800 + calcularBonusVidaPermanente();
  const proximoCusto = 1800 * (lifeUpgrades + 1);
  const pode = moedasGlobais >= proximoCusto;
  const niveis = Array.from({ length: 12 }, (_, i) => {
    const nivel = lifeUpgrades + i + 1;
    const custo = 1800 * nivel;
    const liberado = i === 0 ? pode : false;
    return `<div class="upgrade-node ${i === 0 && pode ? 'ready' : ''}"><span>NÍVEL ${nivel}</span><b>+500 ❤️</b><small>🪙 ${fmt(custo)}</small></div>`;
  }).join('');
  c.innerHTML = `
    <div class="upgrade-hero">
      <div class="upgrade-icon">❤️‍🔥</div>
      <div><small>VIDA DO HERÓI</small><h3>${fmt(atual)} HP</h3><p>Mais resistência para sobreviver às Ultimates e aos bosses mais fortes.</p></div>
      <button class="small-btn primary big-upgrade" onclick="buyLifeUpgrade()">MELHORAR • 🪙 ${fmt(proximoCusto)}</button>
    </div>
    <div class="upgrade-summary"><b>NÍVEL ATUAL ${lifeUpgrades}</b><span>+${fmt(calcularBonusVidaPermanente())} HP acumulado</span><span>${pode ? '✅ PRÓXIMA MELHORIA DISPONÍVEL' : '🔒 JUNTE MAIS MOEDAS'}</span></div>
    <div class="upgrade-tree">${niveis}</div>`;
}

function renderThemes(){document.getElementById('temas-conteudo').innerHTML='<div class="shop-grid">'+bosses.map(b=>`<article class="shop-card theme-card"><div class="asset-frame"><img src="Boss${b.id}Img.png" alt="Arena ${b.id}" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')"><div class="asset-fallback hidden"><strong>ARENA ${b.id}</strong><span>Cenário ${b.nome}</span></div></div><h3>ARENA ${b.id} • ${b.rank}</h3><p class="muted">Cenário de ${b.nome}</p><button class="small-btn primary" onclick="inventario.equipados.tema='Boss${b.id}Img';save();alert('Cenário equipado!')">EQUIPAR</button></article>`).join('')+'</div>'}
function renderBosses(){const c=document.getElementById('grid-bosses');c.innerHTML=bosses.map(b=>{const unlocked=b.id===1||bossesDerrotados.includes(b.id-1),r=bossRankInfo[b.rank],s=bossStats[b.id];return `<article class="boss-card ${r.cls}" style="--rank:${r.color};--rarity:${r.color}"><div class="boss-rank">${r.label}</div><div class="asset-frame boss-asset"><img class="boss-select-image" src="${b.imagem}" alt="${b.nome}" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')"><div class="asset-fallback hidden"><strong>${b.nome.slice(0,2).toUpperCase()}</strong><span>${b.nome}</span></div></div><h3>BOSS ${b.id} • ${b.nome}</h3><div class="boss-meta"><span>❤️ ${fmt(s.vida)}</span><span>🪙 ${fmt(s.moedas)}</span></div><div class="boss-skills">${b.skill1}${b.skill2?' • '+b.skill2:''}</div><button class="small-btn ${unlocked?'primary':''}" data-boss-id="${unlocked ? b.id : ''}" type="button">${unlocked?'ENTRAR NA ARENA':'🔒 DERROTE O ANTERIOR'}</button></article>`}).join('')}
function startBoss(id) {
  const boss = bosses.find((item) => item.id === Number(id));
  if (!boss) { mostrarToast('Boss não encontrado.', 'defeat'); return false; }
  const unlocked = boss.id === 1 || bossesDerrotados.includes(boss.id - 1);
  if (!unlocked) { mostrarToast('🔒 Derrote o boss anterior primeiro.', 'defeat'); return false; }
  bossSelecionadoId = boss.id;
  localStorage.setItem('arcaneEnteredBattle', '1');
  compraSkill2Obrigatoria = false;
  try { window.pararBatalha?.(); } catch (_) {}
  aplicarMusicaLobby(false);
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.remove('active'));
  const fight = document.getElementById('tela-jogo');
  if (!fight) { mostrarToast('Tela de batalha não encontrada.', 'defeat'); return false; }
  fight.classList.remove('hidden');
  fight.classList.add('active');
  // A luta começa sempre pelo 3-2-1-FIGHT. O timer só começa em iniciarBatalha().
  try {
    if (typeof window.iniciarIntroDeLuta !== 'function') throw new Error('Intro da batalha não carregou');
    window.iniciarIntroDeLuta(boss);
    return true;
  } catch (erro) {
    console.error('Falha ao iniciar intro:', erro);
    try {
      if (typeof window.iniciarBatalha !== 'function') throw erro;
      const jogador = typeof getEquippedCharacter === 'function' ? getEquippedCharacter() : personagens[0];
      window.iniciarBatalha(boss, jogador, inventario, rarityColor(jogador?.raridade || 'comum'));
      return true;
    } catch (erroFinal) {
      console.error('Falha ao iniciar batalha:', erroFinal);
      mostrarToast('⚠️ Não foi possível iniciar esta batalha.', 'defeat');
      show('tela-bosses');
      return false;
    }
  }
}
window.startBoss = startBoss;
window.renderBosses = renderBosses;

const btnPlay = document.getElementById('btn-play');
if (btnPlay) {
  btnPlay.addEventListener('click', () => {
    renderBosses();
    show('tela-bosses');
  });
}

function renderBossInfo(){
  const c=document.getElementById('boss-info-conteudo');
  if(!c)return;
  c.innerHTML=`<div class="encyclopedia-intro"><b>📖 ENCICLOPÉDIA DOS 10 BOSSES</b><span>Vida, recompensa, habilidades, cenário, música e Ultimate de cada Boss.</span></div><div class="boss-grid encyclopedia-grid">${bosses.map(b=>{const r=bossRankInfo[b.rank],s=bossStats[b.id];return `<article class="boss-card ${r.cls}" style="--rank:${r.color};--rarity:${r.color}"><div class="boss-rank">${r.label}</div><div class="asset-frame boss-asset"><img src="${b.imagem}" alt="${b.nome}" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')"><div class="asset-fallback hidden"><strong>${b.nome.slice(0,2).toUpperCase()}</strong><span>${b.nome}</span></div></div><h3>BOSS ${b.id} • ${b.nome}</h3><div class="boss-meta"><span>❤️ ${fmt(s.vida)}</span><span>🪙 ${fmt(s.moedas)}</span><span>💎 ${s.diamantes}</span></div><div class="boss-skills">⚡ ${b.skill1}${b.skill2?' • '+b.skill2:''}</div><div class="encyclopedia-data"><span>🌌 Cenário: Boss${b.id}Img.png</span><span>🎵 Música: Boss${b.id}Music.mp3</span><span>☄ Ultimate: Boss${b.id}.mp4</span></div></article>`}).join('')}</div>`;
}

function renderGamepasses(){
  const c=document.getElementById('gamepass-conteudo'); if(!c)return;
  const passIcons={'2x Money':'🪙','2x Diamantes':'💎','2x Chance Diamantes':'💎','Multi Open':'🥚','2x Lucky':'🍀'};
  const coinPacks=[['1.000 Moedas','3,99','🪙','5,99'],['5.000 Moedas','14,00','🪙','19,90'],['15.000 Moedas','34,90','🪙','49,90'],['35.000 Moedas','69,90','🪙','89,90'],['100.000 Moedas','149,90','🪙','199,90']];
  const diamondPacks=[['100 Diamantes','4,99','💎','6,99'],['500 Diamantes','19,90','💎','27,90'],['1.200 Diamantes','39,90','💎','54,90'],['2.800 Diamantes','79,90','💎','99,90'],['7.000 Diamantes','159,90','💎','199,90']];
  const buy=()=>alert('Compra visual por enquanto. O pagamento real será conectado depois.');
  const moneyCard=x=>`<article class="store-product-card"><div class="store-product-icon">${x[2]}</div><div class="store-product-info"><small>PACOTE</small><h3>${x[0]}</h3><p>Recurso para sua progressão.</p><div class="store-price-line"><s>R$ ${x[3]}</s><strong>R$ ${x[1]}</strong></div></div><button class="small-btn primary store-buy-btn" onclick="(${buy.toString()})()">COMPRAR</button></article>`;
  const passes=gamepasses.map(g=>`<article class="store-product-card store-pass-card"><div class="store-product-icon">${passIcons[g[0]]||'⭐'}</div><div class="store-product-info"><small>GAME PASS</small><h3>${g[0]}</h3><p>${g[2]}</p><div class="store-price-line"><strong>R$ ${g[1]}</strong></div></div><button class="small-btn primary store-buy-btn" onclick="(${buy.toString()})()">COMPRAR</button></article>`).join('');
  c.innerHTML=`<div class="store-page-shell"><section class="store-section"><div class="store-section-head"><div class="store-section-icon">🎟️</div><div><small>VANTAGENS PREMIUM</small><h3>GAME PASSES</h3></div></div><div class="store-product-list">${passes}</div></section><section class="store-section"><div class="store-section-head"><div class="store-section-icon">🪙</div><div><small>MOEDA PRINCIPAL</small><h3>MOEDAS</h3></div></div><div class="store-product-list">${coinPacks.map(moneyCard).join('')}</div></section><section class="store-section"><div class="store-section-head"><div class="store-section-icon">💎</div><div><small>MOEDA PREMIUM</small><h3>DIAMANTES</h3></div></div><div class="store-product-list">${diamondPacks.map(moneyCard).join('')}</div></section><section class="store-section"><div class="store-section-head"><div class="store-section-icon">🔑</div><div><small>RECOMPENSAS</small><h3>CODES</h3></div></div><div class="store-code-box"><input id="store-code-input" class="code-input" placeholder="Digite seu code"><button class="modal-action store-code-btn" onclick="redeemStoreCode()">RESGATAR CODE</button></div></section></div>`;
}
function redeemCodeValue(raw){
  const code=(raw||'').trim().toLowerCase();if(!code)return{ok:false,msg:'Digite um code.'};
  if(redeemedCodes[code])return{ok:false,msg:'Esse code já foi usado nesta conta.'};
  if(code==='update1'){moedasGlobais+=500;redeemedCodes[code]=Date.now();save();updateResources();return{ok:true,msg:'UPDATE1 resgatado! +500 🪙'};}
  if(code==='release'){moedasGlobais+=500;diamantesGlobais+=10;bonusFreeSpins++;redeemedCodes[code]=Date.now();save();updateResources();return{ok:true,msg:'RELEASE resgatado! +500 🪙 +10 💎 +1 giro 🎁'};}
  return{ok:false,msg:'Code inválido.'};
}
function redeemStoreCode(){const input=document.getElementById('store-code-input'),r=redeemCodeValue(input?.value);alert(r.msg);if(r.ok&&input)input.value='';}
// Configurações
const config=document.getElementById('modal-config');document.getElementById('btn-config').onclick=()=>config.classList.remove('hidden');document.getElementById('btn-fechar-config').onclick=()=>config.classList.add('hidden');document.querySelectorAll('[data-config]').forEach(b=>b.onclick=()=>showConfig(b.dataset.config));
function showConfig(type){
  const c=document.getElementById('config-detalhe');if(!c)return;
  if(type==='updates')c.innerHTML='<div class="config-detail"><h3>📜 Registro de Atualizações</h3><p class="muted"><b>Update 2 — Giro Diário & Hunge</b><br>🎡 Giro Diário • 🐾 Pet Hunge • 🐾 ChucroHunge • 🧪 Poções • 🎁 Login Diário • 🎵 áudio separado • 🛠️ correções de Banner e coleção.</p><p class="muted"><b>Codes:</b><br>🔑 UPDATE1 → 500 🪙<br>🔑 RELEASE → 500 🪙 + 10 💎 + 1 🎁 giro<br>Cada code pode ser usado uma vez.</p></div>';
  if(type==='codes')c.innerHTML='<div class="config-detail"><h3>🔑 CODES</h3><input id="code-input" class="code-input" placeholder="Digite seu code"><button class="modal-action" onclick="redeemCode()">RESGATAR</button></div>';
  if(type==='feedback')c.innerHTML='<div class="config-detail"><textarea id="feedback-input" class="feedback-input" placeholder="Sugestões, melhorias ou bugs..."></textarea><button class="modal-action" onclick="sendFeedback()">ENVIAR FEEDBACK</button></div>';
  if(type==='player'){
  c.innerHTML='<div class="config-detail" id="perfil-box"><p>Carregando perfil...</p></div>';
  carregarPerfilSupabase();
  }
}

async function carregarPerfilSupabase() {
  const box = document.getElementById('perfil-box');
  if (!box || !window.supabaseClient || !window.currentUserId) return;

  const { data: player } = await window.supabaseClient
    .from('Player')
    .select('username, avatar_emoji, name_color')
    .eq('user_id', window.currentUserId)
    .single();

  const avatares = ['🧙','🔥','❄️','⚡','🌑','🌟'];
  const idCurto = window.currentUserId.slice(0, 8);

  box.innerHTML = `
    <div style="text-align:center">
      <div id="perfil-avatar" style="font-size:48px;margin-bottom:8px">${player?.avatar_emoji || '🧙'}</div>
      <p style="color:${player?.name_color || '#ffffff'};font-weight:800;font-size:18px">${player?.username || 'Jogador'}</p>
      <p style="opacity:.6;font-size:12px">ID: ${idCurto}</p>
    </div>
    <div style="display:flex;gap:6px;justify-content:center;margin:12px 0">
      ${avatares.map(a => `<button class="setting-option" onclick="mudarAvatar('${a}')" style="padding:8px 10px">${a}</button>`).join('')}
    </div>
    <div style="text-align:center;margin-bottom:12px">
      <label style="font-size:13px;opacity:.7">Cor do nome: </label>
      <input type="color" id="input-cor-nome" value="${player?.name_color || '#ffffff'}" onchange="mudarCorNome(this.value)">
    </div>
    <button class="setting-option" onclick="mudarConta()">🔁 Mudar de conta</button>
    <button class="setting-option" style="color:#ff6b6b" onclick="deletarConta()">🗑️ Deletar conta</button>
    .select('username, avatar_emoji, name_color, playtime_seconds')
  `;
}

async function mudarAvatar(emoji) {
  document.getElementById('perfil-avatar').textContent = emoji;
  await window.supabaseClient.from('Player').update({ avatar_emoji: emoji }).eq('user_id', window.currentUserId);
}

async function mudarCorNome(cor) {
  await window.supabaseClient.from('Player').update({ name_color: cor }).eq('user_id', window.currentUserId);
  carregarPerfilSupabase();
  atualizarPerfilVisual();
}

async function mudarConta() {
  await window.supabaseClient.auth.signOut();
  window.location.href = 'login.html';
}

async function deletarConta() {
  if (!confirm('Tem certeza que quer deletar sua conta? Isso apaga todo o seu progresso.')) return;
  if (!confirm('Essa ação NÃO pode ser desfeita. Confirma mesmo assim?')) return;
  const digitado = prompt('Digite EXCLUIR (em maiúsculas) para confirmar de vez:');
  if (digitado !== 'EXCLUIR') return alert('Cancelado.');

  await window.supabaseClient.from('Player').delete().eq('user_id', window.currentUserId);
  await window.supabaseClient.auth.signOut();
  alert('Conta deletada.');
  window.location.href = 'login.html';
}


function redeemCode(){const r=redeemCodeValue(document.getElementById('code-input')?.value);alert(r.msg);if(r.ok){const i=document.getElementById('code-input');if(i)i.value='';}}
function sendFeedback(){
  const el = document.getElementById('feedback-input');
  const text = (el && el.value || '').trim();
  if(!text) return;
  const link = document.createElement('a');
  link.href = 'mailto:paulaoprogramador@gmail.com?subject=' + encodeURIComponent('Arcane Clash Feedback') + '&body=' + encodeURIComponent(text);
  document.body.appendChild(link);
  link.click();
  link.remove();
  if (el) el.value = '';
  mostrarToast('📨 Abrindo seu app de e-mail...', 'reward');
}
document.getElementById('btn-silenciar-lobby').onclick=()=>{musicaLigada=!musicaLigada;document.getElementById('btn-silenciar-lobby').textContent=musicaLigada?'🔊 Música: ligada':'🔇 Música: desligada';aplicarMusicaLobby(musicaLigada);save()};
function ativarCompraSkill2SePronto() {
  if (missionProgress.boss1 >= 3 && !inventario.equipados.skill2 && moedasGlobais >= 1500) {
    if (!compraSkill2Obrigatoria) mostrarToast('⚡ Você alcançou 1500 moedas! A compra da Skill 2 é obrigatória agora.', 'mission');
    compraSkill2Obrigatoria = true;
    setTimeout(() => { show('tela-loja'); renderShop('skill2'); }, 450);
  }
}

function aoVencerBatalha(bossId, moedas, diamantes) {
  if (window.stopBossMusic) stopBossMusic();
  if (window.playVictorySound) playVictorySound();
  bossesDerrotados = [...new Set([...bossesDerrotados, bossId])];
  bossKills[bossId] = (bossKills[bossId] || 0) + 1;
  if (bossId === 1) {
    missionProgress.boss1 = (missionProgress.boss1 || 0) + 1;
    if (missionProgress.boss1 >= 3) tutorialStep = Math.max(tutorialStep, 3);
  }
  const moedasRecebidas = Math.round(Number(moedas||0) * getPlayerCoinRewardMultiplier());
  const diamantesRecebidos = Math.round(Number(diamantes||0) * getPlayerDiamondRewardMultiplier());
  moedasGlobais += moedasRecebidas;
  diamantesGlobais += diamantesRecebidos;
  save();
  updateResources();
  renderMissions();
  mostrarToast(`🏆 Vitória! +${fmt(moedasRecebidas)} moedas${diamantesRecebidos ? ' e +' + diamantesRecebidos + ' diamantes' : ''}`, 'victory');
  ativarCompraSkill2SePronto();
  if (compraSkill2Obrigatoria) { setTimeout(() => { show('tela-loja'); renderShop('skill2'); }, 250); } else { show('tela-menu'); }
}
function aoPerderBatalha(){if(window.stopBossMusic)stopBossMusic();if(window.playDefeatSound)playDefeatSound();mostrarToast('☠ Derrota! Tente novamente.', 'defeat');show('tela-menu')}
function iniciarIntroDeLuta(boss){const overlay=document.getElementById('tela-fight-intro'),el=document.getElementById('fight-intro-numero');if(!overlay||!el){iniciarBatalha(boss,jogador,inventario,rarityColor(boss.rank));return}overlay.classList.remove('hidden');let seq=['3','2','1','FIGHT!'],i=0;const next=()=>{if(i>=seq.length){overlay.classList.add('hidden');iniciarBatalha(boss,jogador,inventario,rarityColor(boss.rank));return}el.textContent=seq[i++];setTimeout(next,500)};next()}
// Pause
 document.getElementById('btn-pause').onclick=()=>{document.getElementById('modal-pause').classList.remove('hidden');if(typeof pausarBatalha==='function')pausarBatalha()};document.getElementById('btn-continuar').onclick=()=>{document.getElementById('modal-pause').classList.add('hidden');if(typeof continuarBatalha==='function')continuarBatalha()};document.getElementById('btn-musica').onclick=e=>{
  batalhaMusicaLigada=!batalhaMusicaLigada;
  e.currentTarget.textContent=batalhaMusicaLigada?'🔊 Música: ligada':'🔇 Música: desligada';
  if(window.setBattleMusicEnabled)window.setBattleMusicEnabled(batalhaMusicaLigada,bossSelecionadoId);
  save();
};document.getElementById('btn-sair').onclick=()=>{document.getElementById('modal-pause').classList.add('hidden');document.getElementById('modal-confirmar-saida').classList.remove('hidden')};document.getElementById('btn-cancelar-sair').onclick=()=>{document.getElementById('modal-confirmar-saida').classList.add('hidden');document.getElementById('modal-pause').classList.remove('hidden')};document.getElementById('btn-confirmar-sair').onclick=()=>{document.getElementById('modal-confirmar-saida').classList.add('hidden');if(typeof pararBatalha==='function')pararBatalha();if(window.stopBossMusic)stopBossMusic();show('tela-menu')};
window.addEventListener('error', (event) => {
  console.error('Arcane Clash runtime error:', event.error || event.message);
});

setInterval(()=>{ updateResources(); if(document.getElementById('tela-inventario')?.classList.contains('active')) { const activePotionTab=document.querySelector('.inventory-tab.active'); if(activePotionTab?.textContent.includes('POÇÕES')) renderInventory('potions'); } },1000);

window.addEventListener('load', () => {
  updateResources();
  try{renderDailyWheel();}catch(e){console.error('Giro Diário:',e);}
  renderMissions();
  // Pré-renderiza os painéis principais para que nenhum menu fique vazio.
  renderCharacters();
  renderShop('skill1');
  renderThemes();
  renderUpgrades();
  renderInventory();
  renderGamepasses();
});


window.renderCharacters = renderCharacters;
window.renderInventory = renderInventory;
window.renderShop = renderShop;
window.renderUpgrades = renderUpgrades;
window.renderThemes = renderThemes;
window.renderDailyWheel = renderDailyWheel;
window.renderGamepasses = renderGamepasses;

document.getElementById('btn-perfil-topo')?.addEventListener('click', () => {
  document.getElementById('modal-config').classList.remove('hidden');
  showConfig('player');
});

async function aplicarPerfilNoJogo() {
  if (!window.supabaseClient || !window.currentUserId) return;

  const { data: player } = await window.supabaseClient
    .from('Player')
    .select('username, name_color, avatar_emoji')
    .eq('user_id', window.currentUserId)
    .single();

  if (!player) return;

  const btnPerfilTopo = document.getElementById('btn-perfil-topo');
if (btnPerfilTopo) btnPerfilTopo.textContent = avatar;
  
  const nome = player.username || jogador.nome;
  const cor = player.name_color || '#ffffff';
  const avatar = player.avatar_emoji || 'P';

  jogador.nome = nome;

  const nomeMenu = document.getElementById('nome-menu');
  if (nomeMenu) { nomeMenu.textContent = nome; nomeMenu.style.color = cor; }

  const nomeHud = document.getElementById('nome-player-hud');
  if (nomeHud) { nomeHud.textContent = nome; nomeHud.style.color = cor; }

  const avatarEl = document.querySelector('.profile-avatar');
  if (avatarEl) avatarEl.textContent = avatar;
}

window.addEventListener('load', aplicarPerfilNoJogo);
window.atualizarPerfilVisual = aplicarPerfilNoJogo;

let segundosDeSessao = 0;
setInterval(() => { segundosDeSessao++; }, 1000);

async function salvarTempoDeJogo() {
  if (!window.supabaseClient || !window.currentUserId || segundosDeSessao === 0) return;
  const { data } = await window.supabaseClient.from('Player').select('playtime_seconds').eq('user_id', window.currentUserId).single();
  const totalAtual = (data?.playtime_seconds || 0) + segundosDeSessao;
  await window.supabaseClient.from('Player').update({ playtime_seconds: totalAtual }).eq('user_id', window.currentUserId);
  segundosDeSessao = 0;
}

setInterval(salvarTempoDeJogo, 30000);
window.addEventListener('beforeunload', salvarTempoDeJogo);


async function renderPerfilGrande() {
  if (!window.supabaseClient || !window.currentUserId) return;

  const { data: player } = await window.supabaseClient
    .from('Player')
    .select('username, avatar_emoji, name_color, playtime_seconds')
    .eq('user_id', window.currentUserId)
    .single();

  const avatar = player?.avatar_emoji || '🧙';
  const nome = player?.username || jogador.nome;
  const cor = player?.name_color || '#ffffff';
  const segundos = player?.playtime_seconds || 0;
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);

  document.getElementById('pg-avatar').textContent = avatar;
  document.getElementById('pg-nome').textContent = nome;
  document.getElementById('pg-nome').style.color = cor;
  document.getElementById('pg-id').textContent = 'ID: ' + window.currentUserId.slice(0, 8);
  document.getElementById('pg-cor-input').value = cor;
  document.getElementById('pg-tempo').textContent = `⏱️ Tempo jogado: ${horas}h ${minutos}min`;

  document.getElementById('tela-perfil-grande').classList.add('active');
}

function fecharPerfilGrande() {
  document.getElementById('tela-perfil-grande').classList.remove('active');
}

async function mudarAvatarGrande(emoji) {
  document.getElementById('pg-avatar').textContent = emoji;
  document.getElementById('btn-perfil-topo').textContent = emoji;
  await window.supabaseClient.from('Player').update({ avatar_emoji: emoji }).eq('user_id', window.currentUserId);
}

async function mudarCorNomeGrande(cor) {
  document.getElementById('pg-nome').style.color = cor;
  await window.supabaseClient.from('Player').update({ name_color: cor }).eq('user_id', window.currentUserId);
  aplicarPerfilNoJogo();
}

document.getElementById('btn-perfil-topo')?.addEventListener('click', renderPerfilGrande);