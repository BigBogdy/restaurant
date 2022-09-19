import React, { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    setValue(event.target.value);
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoiYm9nZHVuMTciLCJhIjoiY2w4NG5sdHUzMDFvZDQwbzdvZm1nMnRiYyJ9.07cbj43Gix79lTCsYyao5Q&autocomplete=true`;
      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  return {
    value,
    onChange: handleChange,
    suggestions,
    setValue,
    setSuggestions,
  };
};

export default useInput;
