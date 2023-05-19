const APIKey = '6FRpUjIsdgJ6R7iEUe6ya735HCVbfWsk'

const getCityUrl = cityName => 
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = cityKey => 
  `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()

  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
  const [{ Key }] = await getCityData(cityName)
  return fetchData(getCityWeatherUrl(Key)) 
}

// getCityWeather('são paulo').then(console.log)


