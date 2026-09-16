import './style.css'

//HTMLDivElement: é informar ao TypeScript qual tipo de elemento queremos receber.
const app = document.querySelector<HTMLDivElement>('#app')

//ver se o elemento app foi encontrado
if (app) {
  app.innerHTML = `
    <h1>Copa Feminina 2027</h1>
    <p>Seu portal para acompanhar a Copa do Mundo Feminina.</p>
  `
}