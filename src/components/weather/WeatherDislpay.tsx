export const WeatherDislpay = ({ data }: { data: any }) => {
  return (
    <main className="w-full flex justify-center mt-20">
      <div className="card">
        <p>Temperature : {data.main.temp}&deg;C</p>
        <p>Description : {data.weather[0].description}</p>
        <p>Wind Speed : {data.wind.speed} km/h</p>
        <p>Humidity : {data.main.humidity}%</p>
      </div>
    </main>
  );
};
