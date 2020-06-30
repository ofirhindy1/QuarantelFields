import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "@material-ui/core";

const STREETS: Object[] = [
  {
    "1100": "שכונה א",
  },
  {
    "1101": "שכונה ב",
  },
  {
    "2102": "שכונה ג",
  },
  {
    "2100": "שכונה ד",
  },
  {
    "3101": "שכונה ה",
  },
  {
    "4102": "שכונה ו",
  },

  {
    "5102": "שכונה ז",
  },
  {
    "6101": "שכונה ח",
  },
  {
    "7101": "שכונה ט",
  },
  {
    "7102": "שכונה י",
  },
];

interface StreetsProps {
  streetIndex: Number;
  setStreetIndex: any;
  cityIndex: Number;
  errors: any;
}

const StreetsField: React.FC<StreetsProps> = ({
  streetIndex,
  setStreetIndex,
  cityIndex,
  errors,
}) => {
  // console.log(city);

  const handleChange = (event: any) => {
    setStreetIndex(event.target.value);
  };
  return (
    <div className="App">
      <Select
        required
        value={streetIndex}
        onChange={handleChange}
        disabled={!cityIndex}
        variant="outlined"
        error={errors}>
        {STREETS.map(
          (street, index) =>
            parseInt(Object.keys(street)[0].substr(0, 1)) === cityIndex && (
              <MenuItem
                value={Object.keys(street)[0]}
                key={Object.keys(street)[0]}>
                {Object.values(street)[0]}
              </MenuItem>
            )
        )}
      </Select>
    </div>
  );
};

export default StreetsField;
