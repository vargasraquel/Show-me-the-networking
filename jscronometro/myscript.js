const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours') 
const daysContainer = document.querySelector('#days')
const nextEventoContainer = document.querySelector('#evento')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const newEvent = new Date().getFullYear() + 1
const newEventTime = new Date(`July 09 2020 20:00:00`)

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
	secondsContainer.textContent = getTimeUnit(seconds) 
	minutesContainer.textContent = getTimeUnit(minutes) 
	hoursContainer.textContent = getTimeUnit(hours) 
	daysContainer.textContent = getTimeUnit(days) 
}	
 
const updateCountdown = () => {
	const currentTime = new Date()
	const difference = newEventTime - currentTime
	const days = Math.floor(difference / 1000 / 60 / 60 / 24)
	const hours = Math.floor(difference / 1000 / 60 / 60) % 24
	const minutes = Math.floor(difference / 1000 / 60) % 60
	const seconds = Math.floor(difference / 1000) % 60
	
	insertCountdownValues({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
	spinnerLoading.remove()
	countdownContainer.style.display = 'flex'
}

setTimeout(() => {
	spinnerLoading.remove()
	countdownContainer.style.display = 'flex'
}, 1000)

setInterval(updateCountdown, 1000)