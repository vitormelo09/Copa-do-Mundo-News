import '../styles/header.css'

//  significa que outros arquivos poderão importar essa função.
export function header() {
    return `
        <header class="topbar">
      <div class="brand">
        <div class="brand-icon">⚽</div>

        <div class="brand-name">
          COPA DO MUNDO NEWS
        </div>

        <span class="year-badge">2027</span>
      </div>

      <nav class="menu">
        <a href="#" class="active">Início</a>
        <a href="#">Partidas</a>
        <a href="#">Seleções</a>
        <a href="#">Jogadoras</a>
        <a href="#">Notícias</a>
        <a href="#">Estádios</a>
      </nav>

      <div class="auth-actions">
        <a href="#" class="login-link">Entrar</a>
        <a href="#" class="create-account">Criar conta</a>
      </div>
    </header>
    `
}