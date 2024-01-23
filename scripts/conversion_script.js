function convertUnits() {
  // Get the quantity and units from the input fields
  var quantity = parseFloat(document.getElementById("quantityInput").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;

  // Perform conversions based on the unit type
  var result;
  if (['meters', 'feet', 'kilometers', 'miles'].includes(fromUnit)) {
      result = convertLength(quantity, fromUnit, toUnit);
  } else if (['celsius', 'fahrenheit'].includes(fromUnit)) {
      result = convertTemperature(quantity, fromUnit, toUnit);
  } else if (['kilograms', 'pounds'].includes(fromUnit)) {
      result = convertWeight(quantity, fromUnit, toUnit);
  } else {
      result = "Invalid unit";
  }

  // Display the result
  document.getElementById("result").innerText = result.toFixed(2);
}

function convertLength(value, fromUnit, toUnit) {
  var meters;

  // Convert from the 'from' unit to meters
  switch (fromUnit) {
      case 'meters':
          meters = value;
          break;
      case 'feet':
          meters = value / 3.28084;
          break;
      case 'kilometers':
          meters = value * 1000;
          break;
      case 'miles':
          meters = value * 1609.344;
          break;
      default:
          return "Invalid unit";
  }

  // Convert from meters to the 'to' unit
  switch (toUnit) {
      case 'meters':
          return meters;
      case 'feet':
          return meters * 3.28084;
      case 'kilometers':
          return meters / 1000;
      case 'miles':
          return meters / 1609.344;
      default:
          return "Invalid unit";
  }
}

function convertTemperature(value, fromUnit, toUnit) {
  if (fromUnit === 'celsius') {
      return toUnit === 'fahrenheit' ? (value * 9 / 5) + 32 : value;
  } else if (fromUnit === 'fahrenheit') {
      return toUnit === 'celsius' ? (value - 32) * 5 / 9 : value;
  } else {
      return "Invalid unit";
  }
}

function convertWeight(value, fromUnit, toUnit) {
  var kilograms;

  // Convert from the 'from' unit to kilograms
  switch (fromUnit) {
      case 'kilograms':
          kilograms = value;
          break;
      case 'pounds':
          kilograms = value / 2.20462;
          break;
      default:
          return "Invalid unit";
  }

  // Convert from kilograms to the 'to' unit
  switch (toUnit) {
      case 'kilograms':
          return kilograms;
      case 'pounds':
          return kilograms * 2.20462;
      default:
          return "Invalid unit";
  }
}
