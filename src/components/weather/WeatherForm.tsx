import Button from "../shared/Button";
import { useLocationContext } from "./Weathercontext";

const WeatherForm = () => {
  const { location, setLocation } = useLocationContext();
  return (
    <div>
      <h1 className="heading py-9">Weather Informative Application</h1>
      <p className="text-lg">
        Please Enter Your Location Name to Get Weather Information
      </p>
      <form className="flex gap-4 justify-center mt-4">
        <input
          type="text"
          placeholder="Enter Your Location Name..."
          className="input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button text="Search Location" />
      </form>
    </div>
  );
};
export default WeatherForm;
