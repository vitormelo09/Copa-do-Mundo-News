import '../styles/countdown.css'

export function countdown() {
  return `
    <section class="countdown">
      <div class="countdown-info">
        <h2>CONTAGEM REGRESSIVA</h2>
        <p>Copa do Mundo Feminina FIFA 2027 · Brasil</p>
      </div>

      <div class="countdown-timer">
        <div class="countdown-item">
          <span id="days">000</span>
          <small>DIAS</small>
        </div>

        <span class="separator">:</span>

        <div class="countdown-item">
          <span id="hours">00</span>
          <small>HORAS</small>
        </div>

        <span class="separator">:</span>

        <div class="countdown-item">
          <span id="minutes">00</span>
          <small>MIN</small>
        </div>

        <span class="separator">:</span>

        <div class="countdown-item">
          <span id="seconds">00</span>
          <small>SEG</small>
        </div>
      </div>
    </section>
  `
}