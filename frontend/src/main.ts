import './styles/global.css'
import { home } from './pages/home'
import { startCountdown } from './scripts/countdown'

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = home()

  startCountdown()
}