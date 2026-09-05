
const SUPABASE_URL = 'https://nwithfitohtygvxrysgv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-JX98qu3_yPXqGp--R-aMw_nSHDBCOR';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== FUNÇÕES DE ERRO NA TELA DE LOGIN =====
function mostrarErroLogin(msg) {
  const el = document.getElementById('login-erro');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
}

function limparErroLogin() {
  const el = document.getElementById('login-erro');
  if (el) el.classList.add('hidden');
}

// ===== ALTERNAR ENTRE AS ABAS (ENTRAR / CADASTRAR / RECUPERAR) =====
function mostrarFormulario(nome) {
  const formularios = ['form-entrar', 'form-cadastrar', 'form-recuperar'];
  formularios.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  const alvo = document.getElementById(nome);
  if (alvo) alvo.classList.remove('hidden');
  limparErroLogin();
}

document.getElementById('tab-entrar')?.addEventListener('click', () => {
  document.getElementById('tab-entrar').classList.add('active');
  document.getElementById('tab-cadastrar').classList.remove('active');
  mostrarFormulario('form-entrar');
});

document.getElementById('tab-cadastrar')?.addEventListener('click', () => {
  document.getElementById('tab-cadastrar').classList.add('active');
  document.getElementById('tab-entrar').classList.remove('active');
  mostrarFormulario('form-cadastrar');
});

document.getElementById('btn-esqueci-senha')?.addEventListener('click', () => {
  mostrarFormulario('form-recuperar');
});

document.getElementById('btn-voltar-login')?.addEventListener('click', () => {
  document.getElementById('tab-entrar').classList.add('active');
  document.getElementById('tab-cadastrar').classList.remove('active');
  mostrarFormulario('form-entrar');
});

// ===== LOGIN =====
async function fazerLogin() {
  limparErroLogin();
  const email = document.getElementById('login-email').value.trim();
  const senha = document.getElementById('login-senha').value;
  if (!email || !senha) return mostrarErroLogin('Preencha e-mail e senha.');

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password: senha });
  if (error) return mostrarErroLogin('E-mail ou senha incorretos.');

  irParaMenu();
}

// ===== CADASTRO =====
async function fazerCadastro() {
  limparErroLogin();
  const nome = document.getElementById('cadastro-nome').value.trim();
  const email = document.getElementById('cadastro-email').value.trim();
  const senha = document.getElementById('cadastro-senha').value;

  if (!nome || nome.length > 15) return mostrarErroLogin('Nome inválido (máx 15 caracteres).');
  if (!email) return mostrarErroLogin('Digite um e-mail.');
  if (!senha || senha.length < 8) return mostrarErroLogin('Senha precisa ter no mínimo 8 caracteres.');

  const { data, error } = await supabaseClient.auth.signUp({ email, password: senha });
  if (error) return mostrarErroLogin('Erro ao criar conta: ' + error.message);

  const userId = data.user?.id;
  if (userId) {
    await supabaseClient.from('Player').insert({ user_id: userId, username: nome });
  }

  irParaMenu();
}

// ===== RECUPERAÇÃO DE SENHA (POR E-MAIL) =====
document.getElementById('btn-enviar-recuperacao')?.addEventListener('click', async () => {
  limparErroLogin();
  const email = document.getElementById('recuperar-email').value.trim();
  if (!email) return mostrarErroLogin('Digite seu e-mail.');

  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.href
  });

  if (error) return mostrarErroLogin('Erro ao enviar. Tente novamente.');

  mostrarErroLogin('Link enviado! Confira seu e-mail (e o spam).');
});

// Detecta quando a pessoa volta pelo link do e-mail pra trocar a senha
supabaseClient.auth.onAuthStateChange(async (event, session) => {
  if (event === 'PASSWORD_RECOVERY') {
    const novaSenha = prompt('Digite sua nova senha (mín. 8 caracteres):');
    if (novaSenha && novaSenha.length >= 8) {
      const { error } = await supabaseClient.auth.updateUser({ password: novaSenha });
      if (!error) alert('Senha alterada com sucesso! Faça login novamente.');
    }
  }
});

// ===== IR PARA O MENU (após login/cadastro) =====
async function irParaMenu() {
  document.getElementById('tela-login').classList.remove('active');
  document.getElementById('tela-loading').classList.remove('active');
  document.getElementById('tela-menu').classList.add('active');
}

// ===== PONTO DE ENTRADA DO JOGO (chamado pelo botão "ENTRAR NA ARENA") =====
window.entrarNoJogo = async function () {
  const { data } = await supabaseClient.auth.getSession();
  document.getElementById('tela-loading').classList.remove('active');

  if (data.session) {
    document.getElementById('tela-menu').classList.add('active');
  } else {
    document.getElementById('tela-login').classList.add('active');
  }
};

// ===== LIGAÇÃO DOS BOTÕES =====
document.getElementById('btn-fazer-login')?.addEventListener('click', fazerLogin);
document.getElementById('btn-fazer-cadastro')?.addEventListener('click', fazerCadastro);