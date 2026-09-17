export function startCountdown() {
    const targetDate = new Date('2027-06-24T00:00:00')
  
    const daysElement = document.querySelector<HTMLSpanElement>('#days')
    const hoursElement = document.querySelector<HTMLSpanElement>('#hours')
    const minutesElement = document.querySelector<HTMLSpanElement>('#minutes')
    const secondsElement = document.querySelector<HTMLSpanElement>('#seconds')
  
    function updateCountdown() {
      const now = new Date()
  
      const difference = targetDate.getTime() - now.getTime()
  
      if (difference <= 0) {
        return
      }
  
      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      )
  
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      )
  
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      )
  
      const seconds = Math.floor(
        (difference / 1000) % 60
      )
  
      if (daysElement) {
        daysElement.textContent = String(days)
      }
  
      if (hoursElement) {
        hoursElement.textContent = String(hours).padStart(2, '0')
      }
  
      if (minutesElement) {
        minutesElement.textContent = String(minutes).padStart(2, '0')
      }
  
      if (secondsElement) {
        secondsElement.textContent = String(seconds).padStart(2, '0')
      }
    }
  
    updateCountdown()
  
    setInterval(updateCountdown, 1000)
  }