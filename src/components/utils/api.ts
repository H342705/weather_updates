// this function is used to get the latitude and longitude of a location
export async function getLocationData(locationName: string) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${locationName}&format=jsonv2`
  );
  const data = await response.json();
  // making a logic to extract a latitude and longitude from data
  const latitude = data[0].lat;
  const longitude = data[0].lon;
  // returning the latitude and longitude
  return { latitude, longitude };
}

// this function is used to get the weather information of a location
export const getWeatherData = async (latitude: number, longitude: number) => {
  const apiKey = "ae9d8bd9cbc83605c2f4d7dd9addf7ad";
  const tempDetails = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  );
  const data = await tempDetails.json();
  return data;
};
