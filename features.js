
(function () {
  const cache = new Map();
  let clickAudio = null;
  let lobbyAudio = null;
  let bossMusic = null;
  let battleMusicEnabled = true;

  function getAudio(file, volume) {
    let audio = cache.get(file);

    if (!audio) {
      audio = new Audio(file);
      audio.preload = 'auto';
      audio.volume = volume;
      cache.set(file, audio);

      try {
        audio.load();
      } catch (error) {

      }
    }

    return audio;
  }

  function play(file, volume = 0.55) {
    const audio = getAudio(file, volume);

    try {
      audio.volume = volume;
      audio.currentTime = 0;
      const promise = audio.play();

      if (promise && promise.catch) {
        promise.catch(() => {});
      }

      return audio;
    } catch (error) {
      return null;
    }
  }

  function playClick() {
    if (!clickAudio) {
      clickAudio = new Audio('MineClick.mp3');
      clickAudio.preload = 'auto';
      clickAudio.volume = 0.18;

      try {
        clickAudio.load();
      } catch (error) {}
    }

    try {
      clickAudio.currentTime = 0;
      const promise = clickAudio.play();

      if (promise && promise.catch) {
        promise.catch(() => {});
      }
    } catch (error) {}
  }

  document.addEventListener('pointerdown', (event) => {
    if (event.button !== undefined && event.button !== 0) return;

    const interactive = event.target.closest(
      'button, a, [role="button"], input, select, textarea'
    );

    if (!interactive) return;
    if (interactive.id === 'btn-pause') return;

    const battleControl = interactive.closest('#tela-jogo .battle-controls');
    if (battleControl) return;

    playClick();
  }, true);

  window.playSfx = (file, volume = 0.55) => play(file, volume);

  window.playUltimateVoice = (ultimateId) => {
    const files = {
      Ultimate1: 'ArlanUltimate.mp3',
      Ultimate2: 'MarcosUltimate.mp3',
      Ultimate3: 'MiguelUltimate.mp3',
      Ultimate4: 'CarlosUltimate.mp3',
      Ultimate5: 'LucasUltinate.mp3',
      Ultimate6: 'DaviUltimate.mp3',
      Ultimate7: 'ArthurUltimate.mp3',
      Ultimate8: 'ViniciusUltimate.mp3',
      Ultimate9: 'GuilermeChucroUltimate.mp3',
      Ultimate10: 'PaulaoDoPneuUltimate.mp3'
    };

    const file = files[String(ultimateId)];
    if (file) play(file, 0.58);
  };

  function playFirstAvailable(files, volume) {
    let index = 0;
    const next = () => {
      if (index >= files.length) return;
      const file = files[index++];
      const audio = getAudio(file, volume);
      let resolved = false;
      const fail = () => {
        if (resolved) return;
        resolved = true;
        audio.removeEventListener('error', fail);
        next();
      };
      audio.addEventListener('error', fail, {once:true});
      try {
        audio.currentTime = 0;
        audio.volume = volume;
        const promise = audio.play();
        if (promise && promise.catch) promise.catch(fail);
      } catch (_) { fail(); }
    };
    next();
  }

  window.playVictorySound = () => playFirstAvailable(['Vitória.mp3','Vitoria.mp3','Victory.mp3'], 0.52);
  window.playDefeatSound = () => playFirstAvailable(['RezeroLoser.mp3','GameOver.mp3','Derrota.mp3','Defeat.mp3'], 0.30);

  window.playCoinsSound = () => playFirstAvailable(['Coins.mp3', 'coins.mp3', 'Coin.mp3', 'Moedas.mp3'], 0.40);

  function desbloquearLobbyPorGestura() {
    if (!lobbyAudio || !lobbyAudio.paused || !lobbyMusicWanted) return;
    try { const promise=lobbyAudio.play(); if(promise&&promise.catch)promise.catch(()=>{}); } catch(_) {}
  }
  let lobbyMusicWanted = true;
  document.addEventListener('pointerdown', desbloquearLobbyPorGestura, true);
  document.addEventListener('touchstart', desbloquearLobbyPorGestura, true);

  window.setLobbyMusic = (enabled) => {
    lobbyMusicWanted = enabled !== false;
    const candidatos = ['LoobyMusic.mp3', 'LobbyMusic.mp3'];
    if (!enabled) {
      if (lobbyAudio) { lobbyAudio.pause(); lobbyAudio.currentTime = 0; }
      return;
    }

    if (lobbyAudio && !lobbyAudio.paused) {
      lobbyAudio.volume = 0.01;
      return;
    }

    
    let indice = 0;
    const tentar = () => {
      if (indice >= candidatos.length) return;
      const arquivo = candidatos[indice++];
      const audio = new Audio(arquivo);
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0.05;
      audio.addEventListener('error', tentar, {once:true});
      lobbyAudio = audio;
      try {
        const promise = audio.play();
        if (promise && promise.catch) promise.catch(() => {
          
        });
      } catch (_) {}
    };
    tentar();
  };

  window.setBattleMusicEnabled=(enabled,bossId)=>{
    battleMusicEnabled=enabled!==false;
    if(!battleMusicEnabled){if(bossMusic){bossMusic.pause();bossMusic.currentTime=0;}return;}
    if(bossId)window.playBossMusic(bossId);
  };
  window.playBossMusic = (bossId) => {
    if(!battleMusicEnabled)return;
    try {
      if (bossMusic) {
        bossMusic.pause();
        bossMusic.currentTime = 0;
      }

      bossMusic = new Audio(`Boss${bossId}Music.mp3`);
      bossMusic.loop = true;
      bossMusic.preload = 'auto';
      bossMusic.volume = 0.22;
      bossMusic.load();

      const promise = bossMusic.play();
      if (promise && promise.catch) promise.catch(() => {});
    } catch (error) {}
  };

  window.duckBossMusic = () => {
    if (bossMusic) {
      bossMusic.volume = 0.035;
    }
  };

  window.restoreBossMusic = () => {
    if (bossMusic) {
      bossMusic.volume = 0.22;
    }
  };

  window.isBattleMusicEnabled=()=>battleMusicEnabled;

  window.stopBossMusic = () => {
    try {
      if (bossMusic) {
        bossMusic.pause();
        bossMusic.currentTime = 0;
      }
    } catch (error) {}
  };
})();