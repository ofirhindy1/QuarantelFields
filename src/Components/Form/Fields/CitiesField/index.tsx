import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import CITIES_AND_STREETS from "../../../../utils/CITIES_AND_STREETS.json";

// import InputLabel from "@material-ui/core/InputLabel";

const CITIES: any[] = [
  {
    "1": "חיפה",
  },
  {
    "2": "חדרה",
  },
  {
    "3": "תל אביב",
  },
  {
    "4": "נתניה",
  },
  {
    "5": "בת ים",
  },
  {
    "6": "נהריה",
  },
  {
    "7": "רחובות",
  },
];

interface CitiesProps {
  cityIndex: Number;
  setCityIndex: any;
  errors: any;
}
const Form: React.FC<CitiesProps> = ({ setCityIndex, cityIndex, errors }) => {
  const handleChange = (event: any) => {
    setCityIndex(event.target.value);
  };

  return (
    <div className="App">
      <Select
        value={cityIndex}
        onChange={handleChange}
        variant="outlined"
        required
        error={errors}>
        {CITIES.map((city, index) => (
          <MenuItem value={index + 1} key={index + 1}>
            {city[index + 1]}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Form;
