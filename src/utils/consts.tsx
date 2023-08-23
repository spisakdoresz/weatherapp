export const kelvinToCelsius = (kelvin: number): number => {
  return Math.round(kelvin - 273.15);
};

export const unixTimestampToLocaleTimeString = (timestamp: number): string => {
  return timestamp ? new Date(timestamp * 1000).toLocaleTimeString() : "";
};

export const getWindDirectionText = (windDegrees: number): string => {
  if (windDegrees >= 337.5 || windDegrees < 22.5) {
    return "North";
  } else if (windDegrees >= 22.5 && windDegrees < 67.5) {
    return "Northeast";
  } else if (windDegrees >= 67.5 && windDegrees < 112.5) {
    return "East";
  } else if (windDegrees >= 112.5 && windDegrees < 157.5) {
    return "Southeast";
  } else if (windDegrees >= 157.5 && windDegrees < 202.5) {
    return "South";
  } else if (windDegrees >= 202.5 && windDegrees < 247.5) {
    return "Southwest";
  } else if (windDegrees >= 247.5 && windDegrees < 292.5) {
    return "West";
  } else if (windDegrees >= 292.5 && windDegrees < 337.5) {
    return "Northwest";
  } else {
    return "";
  }
};
