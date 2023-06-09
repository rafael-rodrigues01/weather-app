const cityForm = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = 
  document.querySelector('[data-js="city-temperature"]')
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCityCard = () => {
  if(cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
}

const showCityWeatherInfo = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
  const iconImg = `<img src="./src/icons/${WeatherIcon}.svg" />`

  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = iconImg
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.city.value 
  
  showCityCard()

  showCityWeatherInfo(inputValue)

  cityForm.reset()

})