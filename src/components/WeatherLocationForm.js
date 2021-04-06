import "./WeatherLocationForm.css";

function WeatherLocationInput({ value, handleChange, handleSubmit }) {
  return (
    <form className="weatherLocationForm" onSubmit={(e) => handleSubmit(e)}>
      <div className="weatherLocationForm__group">
        <input
          id="locationInput"
          className="weatherLocationForm__input"
          placeholder="Wpisz miasto"
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          title="Wpisz nazwę miasta"
        ></input>

        <button
          type="submit"
          value="submit"
          className="weatherLocationForm__button"
        >
          Szukaj
        </button>
      </div>
    </form>
  );
}

export default WeatherLocationInput;
